(await import('dotenv')).config();
import * as discord from 'discord.js';

//initialize
let client = new discord.Client(
    {
        intents: ['Guilds', 'GuildMessages'],
        partials: []
    }
);

//set status
client.on('ready', () => {
    client.user.setPresence({
        activities: [
            {
                name: "new people join!",
                type: discord.ActivityType.Watching
            }
        ],
        status: "online"
    });
});

//wave at new joins
client.on('messageCreate', (message) => {
    if (message.type == discord.MessageType.UserJoin) {
        try {
            message.react("👋");
        } catch (err) {
            console.error(err.message);
        }
    }
})

console.log(`loging in with token: ${process.env.BOT_TOKEN}`)

client.login(process.env.BOT_TOKEN);