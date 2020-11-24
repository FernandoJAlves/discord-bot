module.exports = {
    name: 'ping',
    description: 'A simple ping command',
    execute(message, args) {
        runCommand(message, args);
    }
}


function runCommand(message, args) {
    message.channel.send('pong');
}
