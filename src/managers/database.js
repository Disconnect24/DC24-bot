const redis = require("redis");
var redisClient;

class database {
    Connect(config) {
        redisClient = redis.createClient({
            host: config.host,
            port: config.port,
            password: config.password,
            db: config.database
        });
    }

    Get() {
        return redisClient;
    }
}