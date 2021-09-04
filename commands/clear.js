module.exports = {
  name: 'clear',
  description: 'A command to clear a given number of messages',
  async execute(...args) {
    await runCommand(...args);
  }
}

// this is the entrypoint to the command
async function runCommand(client, message, args, Discord) {
  const minDelete = 1;
  const maxDelete = 100;

  if (!args || args.length != 1) return message.reply('Usage: clear <Amount to delete>');
  const amountToDelete = args[0];

  if (isNaN(amountToDelete)) return message.reply('Please enter a valid number!');
  if (amountToDelete < minDelete) return message.reply(`You must delete at least ${minDelete} message!`);
  if (amountToDelete > maxDelete) return message.reply(`You cannot delete more than ${maxDelete} messages!`);

  if (message.guild === null) return message.reply('This command only works on server text channels!');

  await message.channel.messages.fetch({limit: amountToDelete}).then(messages => {
    message.channel.bulkDelete(messages, true);
  });

}
