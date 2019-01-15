import { createClient } from "redis";
const client;

export default class Database {
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