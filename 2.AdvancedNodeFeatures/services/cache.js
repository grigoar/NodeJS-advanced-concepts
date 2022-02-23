const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");

const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);
// client.get = util.promisify(client.get);
client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || "");

  return this;
};

mongoose.Query.prototype.exec = async function () {
  //   this;
  //   console.log("IM ABOUT TO RUN  A QUERY");
  try {
    if (!this.useCache) {
      return exec.apply(this, arguments);
    }

    const key = JSON.stringify(
      Object.assign({}, this.getQuery(), {
        collection: this.mongooseCollection.name,
      })
    );

    // See if we have a value for "key" in redis
    //   const cachedValue = await client.get(key);
    const cachedValue = await client.hget(this.hashKey, key);

    // If we do, return that
    if (cachedValue) {
      const doc = JSON.parse(cachedValue);
      return Array.isArray(doc)
        ? doc.map((d) => new this.model(d))
        : new this.model(doc);

      // console.log(this);
      // const doc = new this.model(JSON.parse(cachedValue));
      // return JSON.parse(cachedValue);
      // return doc;
    }

    // Otherwise, issue the query and store the result in redis

    const result = await exec.apply(this, arguments);
    // client.hset(this.hashKey, key, JSON.stringify(result), "EX", 10);
    client.hset(this.hashKey, key, JSON.stringify(result));
    client.expire(this.hashKey, 10);
    //   client.set(key, JSON.stringify(result), "EX", 10);
    //   return exec.apply(this, arguments);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  },
};
