// const setup = require('./tests/jest.setup');
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./tests/setup.js'],
  testEnvironment: 'node',
};

// module.exports = async () => {
//   console.log('---------------------CONFIG FILE');
//   return {
//     verbose: true,
//   };
// };
