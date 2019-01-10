# Disconnect24 Bot
![License](https://img.shields.io/github/license/riiconnect24/rc24-bot.svg)
![Production List](https://img.shields.io/discord/397593815755522068.svg)

## How do I set this up?
*An installation of NodeJS is required before you can successfully set this up.*
1. Create a clone of this Github Repository
2. `cd` into the directory of the downloaded folder
3. Generate a package.json file by running `npm init`, everything can be set to your preference; except the entry point must be `bot.js`.
4. Install discord.js by running `npm install --save discord.js`.
5. (optional) Install nodemon by running `npm install --save nodemon`.
6. Run `start.bat`!

Please note, if you decide to not use Nodemon, you will need to update `start.bat` to run `node bot.js` rather than `nodemon bot.js`.
Linux users can just run the command in BASH.

## Do you want to submit an error?
If you'd like to add an error to our database, you can now do it easier than before. Now, to add an error; all you have to do is run `d!error <error code>` on the error code you want to submit. If the error code isnt in the database, it will be submitted to the developers. No more need to hassle with JSON.
