const express = require('express');
const app = express();
const UsersRouter = require('./routes/users');
const AuthRouter = require('./routes/auth');
const ContactsRouter = require('./routes/contacts');

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the ContactKeeper API~~' });
});

app.use('/api/users', UsersRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/contacts', ContactsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
