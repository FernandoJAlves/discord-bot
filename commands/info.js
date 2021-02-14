module.exports = {
  name: 'info',
  description: 'A short description of the bot',
  execute(...args) {
    runCommand(...args);
  }
}

// this is the entrypoint to the command
function runCommand(client, message, args, Discord) {
  const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Hello there')
    .setURL('https://www.youtube.com/watch?v=frszEJb0aOo')
    .setDescription("I'm an experimental bot, coded by some guy that really needs sleep")
    .setImage('https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/6087/2437349-pikachu.png')
    .setFooter('Make sure to spam me with bugs');

  message.channel.send(newEmbed);
}
