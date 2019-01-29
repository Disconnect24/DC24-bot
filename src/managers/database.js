const redis = require("redis");
var redisClient;

module.exports = class Database {
    connect(config) {
        redisClient = redis.createClient({
            host: config.host,
            port: config.port,
            password: config.password,
            db: config.database
        });
    }

    get() {
        return redisClient;
    }
}
