const default_text_handler = require('../../helpers/default_text_handler');

module.exports = (Discord, client, message) => {
  const prefix = '.'; // prefix used for commands

  // handle of special regular messages
  default_text_handler.handle(message);

  if (!message.content.startsWith(prefix) || message.author.bot) return; // ignore if it's not a command or a message from a bot

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);

  if (command) {
    command.execute(client, message, args, Discord);
  } else {
    message.channel.send(`Command \`${cmd}\` does not exist!`);
  }
}

