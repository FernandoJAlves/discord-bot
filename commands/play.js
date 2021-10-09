const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
  name: 'play',
  description: "The 'play' command for the music features",
  async execute(...args) {
    await runCommand(...args);
  }
}

// this is the entrypoint to the command
async function runCommand(client, message, args, Discord) {
  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command!');
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has('CONNECT'))  return message.channel.send("You don't have the correct permissions");
  if (!permissions.has('SPEAK'))    return message.channel.send("You don't have the correct permissions");
  if (!args.length)                 return message.channel.send("You need to send the second argument");

  const validURL = (str) => {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex.test(str)){
        return false;
    } else {
        return true;
    }
  }

  if (validURL(args[0])) {
    console.log('Valid URL!');

    const connection = await voiceChannel.join();
    const stream = ytdl(args[0], {filter: 'audioonly'});
    connection.play(stream, {seek: 0, volume: 0.25})
    .on('finish', async () => {
      console.log("Finished! Leaving!");
      await voiceChannel.leave();
    })
    .on('error', (error) => {
      console.log('Error (!): ', error);
    });

    await message.reply(`Now playing: ***${args[0]}***`);
    return;
  }

  const connection = await voiceChannel.join();

  const videoFinder = async (query) => {
    const videoResult = await ytSearch(query);
    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
  }

  const video = await videoFinder(args.join(' '));

  if (video) {
    const stream = ytdl(video.url, {filter: 'audioonly'});
    connection.play(stream, {seek: 0, volume: 0.25})
    .on('finish', async () => {
      console.log("Finished! Leaving!");
      await voiceChannel.leave();
    })
    .on('error', (error) => {
      console.log('Error (!): ', error);
    });

    // connection.play('/app/example.mp3', { volume: 0.5 }).on('finish', () => {
    //   console.log("Finished! Leaving!");
    //   voiceChannel.leave();
    // });

    await message.reply(`Now playing: ***${video.title}***`);
  } else {
    message.channel.send('No video results were found');
    console.log('No video results were found');
    await voiceChannel.leave();
  }

}
