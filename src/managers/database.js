import { createClient } from "redis";
const client;

class Database {
    Connect(config) {
        client = createClient({
            host: config.host,
            port: config.port,
            password: config.password,
            db: config.database
        });
    }

    Get() {
        return client;
    }
}