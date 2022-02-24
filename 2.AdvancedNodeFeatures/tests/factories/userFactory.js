const mongoose = require('mongoose');
const User = mongoose.model('User');
// const User = require('../../models/User');

module.exports = () => {
  return new User({}).save();
};

// module.exports = async () => {
//   const testUser = new User({
//     googleId: 'google test',
//     displayName: 'test display',
//   });
//   const user = await testUser.save();
//   return user;
// };

// require('../models/User');

// const mongoose = require('mongoose');
// const keys = require('../config/keys');
// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI, { useMongoClient: true });
