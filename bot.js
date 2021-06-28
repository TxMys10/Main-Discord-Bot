const Discord  = require('discord.js');
const discord = new Discord.Client();
const { token, prefix } = require('./config.json');


const fs = require('fs');
discord.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) { 
    const command = require(`./Commands/${file}`);

    discord.commands.set(command.name, command);
}



discord.on('ready', () => { 
    console.log('The bot is online.')
    }
)

discord.on('message', message => { 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "help")  { 
        discord.commands.get('help').execute(message, args, Discord)
    }
    if(command === "react") { 
        discord.commands.get('react').execute(message, args, Discord)
    }
});

discord.login(token);
