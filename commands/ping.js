module.exports = {
  name: 'ping',
  description: 'A simple ping command',
  execute(...args) {
    runCommand(...args);
  }
}

// this is the entrypoint to the command
function runCommand(message, args) {
  message.channel.send('pong');
}
