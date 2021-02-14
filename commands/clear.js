module.exports = {
  name: 'clear',
  description: 'A command to clear a given number of messages',
  async execute(...args) {
    await runCommand(...args);
  }
}
  
// this is the entrypoint to the command
async function runCommand(client, message, args, Discord) {
  if (!args || args.length != 1) return message.reply('Please enter the amount of messages to clear!');
  const amountToDelete = args[0];

  if (isNaN(amountToDelete)) return message.reply('Please enter a valid number!');
  if (amountToDelete > 100) return message.reply('You cannot delete more than 100 messages!');
  if (amountToDelete < 1) return message.reply('You must delete at least 1 message!');

  // TODO: catch for when the messages are older than 14 days and check if it is a DM (bulkDelete does not work there)

  await message.channel.messages.fetch({limit: amountToDelete}).then(messages => {
    // message.channel.bulkDelete(messages);
  });

}
