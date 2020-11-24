module.exports = {
  name: 'ping',
  description: 'A simple ping command',
  execute(message, args) {
    runCommand(message, args);
  }
}

// this is the entrypoint to the command
function runCommand(message, args) {
  message.channel.send('pong');
}
