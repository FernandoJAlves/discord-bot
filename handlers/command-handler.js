const fs = require('fs');

module.exports = (client, Discord) => {
  const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // only get commands in .js files
  const commandList = [];

  // add all commands in 'commands' folder
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);

    if (command.name){
      client.commands.set(command.name, command);
      commandList.push({
        name: command.name,
        description: command.description,
        visible: command.visible || true
      });
    } else {
      console.log("Warning: Found a command without a name!");
      continue;
    }
  }
}

