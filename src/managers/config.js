const fs = require('fs');
var configuration;

class config {
    Load() {
        configuration = JSON.parse(fs.readFileSync("config.json", "utf8"));
        return configuration;
    }

    Get() {
        return configuration;
    }
}