const redis = require("redis");
var redisClient;

class Database {
    Connect(config) {
        redisClient = createClient({
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