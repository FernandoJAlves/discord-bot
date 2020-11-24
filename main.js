const credentials = require('./credentials');

const Discord = require('discord.js');
const botClient = new Discord.Client(); // this is the actual bot

botClient.once('ready', () => {
    console.log("Nando's Bot is online");
})






botClient.login(credentials.token);
