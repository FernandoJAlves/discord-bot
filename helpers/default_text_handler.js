module.exports = {
  handle(message) {
    if (message.author.bot) return; // ignore bot messages

    // handle tf2 meme messages
    tf2_handle(message);
  }
}

// main handle functions

function tf2_handle (message) {
  this_is_a_bucket(message);
  theres_more(message);
}

// helper functions

function this_is_a_bucket (message) {
  const lowerMessage = message.content.toLowerCase();
  const reducedMessage = lowerMessage.replace(/[\W\s+]/g, '');

  if (reducedMessage === 'thisisabucket') {
    console.log(`LOG: ${message.author.username} (${message.author.tag}) triggered 'This is a bucket'`);
    message.channel.send('https://img.wattpad.com/eed7c2b0f83524336370949369ee546b6331e7d8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f377a6c687a6f4c7a6544625456413d3d2d3537363031343031372e313532663737663234666364363462313936323233333035323434362e676966?s=fit&w=720&h=720');
  }
}

function theres_more (message) {
  const lowerMessage = message.content.toLowerCase();
  const reducedMessage = lowerMessage.replace(/[\W\s+]/g, '');

  if (reducedMessage === 'theresmore') {
    console.log(`LOG: ${message.author.username} (${message.author.tag}) triggered 'There's more'`);
    message.channel.send('https://img.wattpad.com/5269d8d98d6f7e11b8c4085ce90485dc850097a4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f42556259756733335831777138673d3d2d3537363031343031372e313532663737663630373230653062623536393033363232333831392e676966?s=fit&w=720&h=720');
  }
}

