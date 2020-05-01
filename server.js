const express = require("express");
const app = express();
const connectDB = require("./config/db");
const UsersRouter = require("./routes/users");
const AuthRouter = require("./routes/auth");
const ContactsRouter = require("./routes/contacts");
const path = require("path");

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", UsersRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/contacts", ContactsRouter);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
