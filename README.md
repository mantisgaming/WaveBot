# WaveBot

Created by Max Allen &copy;2024

Wave bot is a discord bot that will react with a waving emoji to any system welcome messages welcoming new users to a discord server. This removes the spam from stickers while keeping community engagement with new users.

To invite WaveBot to a discord server, click the following link:
[Invite WaveBot (https://discord.com/oauth2/authorize?client_id=1120903508078633020)](https://discord.com/oauth2/authorize?client_id=1120903508078633020)

## Self Hosting

The application expects an environment variable named "BOT_TOKEN" with the private token for the bot that the application is controlling.

A docker image has been built and published to the docker registry at https://hub.docker.com/r/m4nt1s/wavebot if you would like to use that.

## Notes

For anyone interested in hosting, building, and/or forking their own instance, there is currently an error about a duplicate typescript definition. I resolved this by deleting the duplicate definition in the discord.js library locally to the project before building.