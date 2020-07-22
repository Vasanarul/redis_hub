// BASIC SETUP
const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

client.del("test-key", redis.print);
client.del("test-list", redis.print);

// KEYS | KEYS | KEYS

// basic value retrieval
client.set("test-key", "test-value", redis.print);
client.get("test-key", redis.print);

// incrementing a value
client.set("foo", 100, redis.print);
client.incr("foo");
client.get("foo", redis.print);

// add (append) a value to a key
client.append("test-key", ", newvalue", redis.print);
client.get("test-key", redis.print);

// LISTS | LISTS | LISTS

// adding to a list from the front (shift)
client.lpush("test-list", "a", "b", "c", redis.print);
client.lindex("test-list", 0, redis.print);

// adding to a list from the back (push)
client.rpush("test-list", 1, 2, 3, redis.print);

// contents of a list
client.lrange("test-list", 0, -1);

// SETS | SETS | SETS

// making a set
client.sadd("test-set", 1, 2, 3);
client.smembers("test-set", redis.print);
// expect 1 2 3

// making a set with duplicates
client.sadd("duplicate-set", 1, 3, 3, 4);
client.smembers("duplicate-set", redis.print);
// expect 1 3 4



