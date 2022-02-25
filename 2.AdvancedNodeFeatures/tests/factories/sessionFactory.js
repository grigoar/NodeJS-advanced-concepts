const Buffer = require('safe-buffer').Buffer;
const Keygrip = require('keygrip');
// const keygrip = new Keygrip(['123123123']);
const keys = require('../../config/keys');
const keygrip = Keygrip([keys.cookieKey]);

module.exports = (user) => {
  const sessionObject = {
    passport: {
      user: user._id.toString(),
    },
  };

  const session = Buffer.from(JSON.stringify(sessionObject)).toString('base64');

  const sig = keygrip.sign('session=' + session);

  return { session, sig };
};
