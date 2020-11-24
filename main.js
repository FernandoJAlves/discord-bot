const credentials = require('./credentials');

const Discord = require('discord.js');
const botClient = new Discord.Client(); // this is the actual bot

const botPrefix = '.'; // prefix used for commands

botClient.once('ready', () => {
    console.log("Nando's Bot is online");
});

botClient.on('message', message => {

    if (!message.content.startsWith(botPrefix) || message.author.bot) return; // ignore if it's not a command or a message from a bot

    const commandArgs = message.content.slice(botPrefix.length).split(/ +/);
    const command = commandArgs.shift().toLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send('pong');
            break;
    
        default:
            message.channel.send('u wot m8?'); 
            break;
    }

});




botClient.login(credentials.token);
