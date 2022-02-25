// console.log('SETUP-------------------------');
// const mongoose = require('mongoose');
// const keys = require('../config/keys');

// mongoose.Promise = global.Promise;
// mongoose.connect(
//mongoURI
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   }
// );
require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');
// console.log('SETUP-------------------------');
mongoose.Promise = global.Promise;
// mongoose.connect(
//mongoURI
//   { useMongoClient: true }
// );
mongoose.connect(keys.mongoURI, { useMongoClient: true });
