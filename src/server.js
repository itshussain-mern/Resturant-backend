const express = require('express');
const sequelize = require('./models/database');

const app = express();

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

  const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Running hm-restaurant on Port ' + port);
});