const fs = require('fs');
var config;

class Config {
    Load() {
        config = JSON.parse(fs.readFileSync("config.json", "utf8"));
        return config;
    }

    Get() {
        return config;
    }
}