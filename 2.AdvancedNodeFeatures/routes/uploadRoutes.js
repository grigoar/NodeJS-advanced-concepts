const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

// deprecated
// const s3 = new AWS.S3({
//   accessKeyId: keys.accessKeyId,
//   secretAccessKey: keys.secretAccessKey,
//   signatureVersion: 'v4',
// });
const s3 = new AWS.S3({
  credentials: {
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
  },
  region: 'eu-west-3',
});
// const s3 = new AWS.S3({
//
//  credentials use
// });

module.exports = (app) => {
  app.get('/api/upload', requireLogin, (req, res) => {
    // myUserId/lkjsdflkjhfdsg.jph

    const key = `${req.user.id}/${uuid()}.jpeg`;
    // const key = `234/dfsgfdsgsfd.jpeg`;
    // console.log(s3);
    console.log('S3 was called');
    console.log(key);
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'my-blog-bucket-node-course',
        ContentType: 'image/jpeg',
        Key: key,
      },
      (err, url) => {
        console.log(err);
        return res.send({ key, url });
      }
    );
  });
};
