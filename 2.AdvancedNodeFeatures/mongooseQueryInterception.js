// Problems to solve, with solutions
// p1: Caching code isn't easily reusable anywhere else in our codebase
// s1: Hook in to Mongoose's query generation and execution process
// p2:Cached values never expire
// s2: Add timeout to values assigned to redis. Also add ability to reset all values tied to some specific event
// p3: Cache keys won't work when we introduce other collections or query options
// s3: Figure out a more robust solution for generating cache keys

// override the exec function from mongo
Person.find({ occupation: /host/ })
  .where("name.last")
  .equals("Ghost")
  .where("age")
  .gt(17)
  .lt(66)
  .where("likes")
  .in(["vaporizing", "talking"])
  .limit(10)
  .sort("-occupation")
  .select("name occupation");
//   .exec(callback);

query.getOptions();
// {find: {occupation:"host"}, where:[{"name.last":"Ghost"}]}

// query.exec = function () {
//   // to check to see if this query has already been executed and if it has return the result right away

//   const result = client.get("query key");

//   if (result) {
//     return result;
//   }

//   // otherwise issue the query *as normal*
//   const result = runTheOriginalQueryFunction();

//   // then save that value in redis
//   client.set("query key", result);

//   return result;
// };

// query.exec((err, result) => console.log(result));
// // Same as
// query.then((result) => console.log(result));
// // Same as
// const result = await query;
