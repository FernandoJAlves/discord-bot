module.exports = {
  name: 'ping',
  description: 'A simple ping command',
  execute(...args) {
    runCommand(...args);
  }
}

// this is the entrypoint to the command
function runCommand(client, message, args, Discord) {
  message.channel.send('pong');
}
