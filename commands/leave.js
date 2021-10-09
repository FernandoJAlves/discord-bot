module.exports = {
  name: 'leave',
  description: "The 'leave' command for the music features",
  async execute(...args) {
    await runCommand(...args);
  }
}

// this is the entrypoint to the command
async function runCommand(client, message, args, Discord) {
  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command!');

  await voiceChannel.leave();
  await message.channel.send('Leaving the channel :smiling_face_with_tear:');
}
