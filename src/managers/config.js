import { readFileSync } from "fs";
const config;

export default class Config {
    Load() {
        config = JSON.parse(readFileSync("config.json", "utf8"));
        return config;
    }

    Get() {
        return config;
    }
}