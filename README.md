# Disconnect24 Bot
![License](https://img.shields.io/github/license/riiconnect24/rc24-bot.svg)
![Production List](https://img.shields.io/discord/397593815755522068.svg)

## How do I set this up?
*An installation of NodeJS is required before you can successfully set this up. Nodemon is also required if you want automatic restarts.*
1. Create a clone of this Github Repository
2. `cd` into the directory of the downloaded folder
3. Generate a package.json file by running `npm init`, everything can be set to your preference; except the entry point must be `bot.js`.
4. Install discord.js by running `npm install --save discord.js`.
5. (optional) Install nodemon by running `npm install --save nodemon`.
6. Run `start.bat`!

Please note, if you decide to not use Nodemon, you will need to update `start.bat` to run `node bot.js` rather than `nodemon bot.js`.

## Do you want to submit an error?
If you'd like to add an error to our database, you may freely do that. Go to `/Settings/error-db.json` to add errors. It must follow the format:

```
{
    "262102":{"description":"[WC24] Nintendo Channel Discontinued.", "fix":"Try repatching Nintendo Channel using the correct xdelta."},
    "error2":{"description":"error description", "fix":"error fix"}
}
```

Please only try to create an error PR if you know how JSON files work. If you dont, please just create an issue, or talk to a developer.
