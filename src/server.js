const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./models/database');
const accountsRoute = require('./routes/accounts.route')

const app = express();
dotenv.config();

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

app.use(cors());

app.use(express.json());

app.use('/', accountsRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Running hm-restaurant on Port ' + port);
});