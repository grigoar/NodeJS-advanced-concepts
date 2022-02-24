require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

console.log('SETUP-------------------------');
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://grigoar:tR9zW9fNAjWS2Nxx@cluster0.yowls.mongodb.net/blog_dev',
  { useMongoClient: true }
);
// mongoose.connect(keys.mongoURI, { useMongoClient: true });
