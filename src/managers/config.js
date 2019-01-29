const fs = require('fs');
var configuration;

module.exports = class Config {
    load() {
        configuration = JSON.parse(fs.readFileSync("config.json", "utf8"));
        return configuration;
    }

    get() {
        return configuration;
    }
}
