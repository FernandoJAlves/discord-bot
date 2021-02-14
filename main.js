const credentials = require('./credentials');
const fs = require('fs');

const Discord = require('discord.js');
const botClient = new Discord.Client(); // this is the actual bot
const botPrefix = '.'; // prefix used for commands

botClient.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // only get commands in .js files
const commandList = [];

// add all commands in 'commands' folder
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  botClient.commands.set(command.name, command);
  commandList.push({
    name: command.name,
    description: command.description,
    visible: command.visible || true
  });
}


botClient.once('ready', () => {
  console.log("Nando's Bot is online");
});

botClient.on('message', message => {
  
  if (!message.content.startsWith(botPrefix) || message.author.bot) return; // ignore if it's not a command or a message from a bot
  
  const commandArgs = message.content.slice(botPrefix.length).split(/ +/);
  const command = commandArgs.shift().toLowerCase();
  
  switch (command) {
    case 'ping':
      botClient.commands.get('ping').execute(message, commandArgs);
      break;
    
    default:
      message.channel.send('u wot m8?');
      break;
  }
  
});




botClient.login(credentials.token);
