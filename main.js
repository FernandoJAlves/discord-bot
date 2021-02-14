const credentials = require('./credentials');
const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client(); // this is the actual bot

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command-handler', 'event-handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(credentials.token);
