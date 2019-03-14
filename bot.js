const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot is Ready.');
});

client.on('message', message => {

    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => {
          const dispatcher = connection.playFile('music/'+message.content+'.mp3');
         dispatcher.on("end", end => {channel.leave()});
        })
    .catch(console.error); 
});

client.login('NTU1NDM2MzA3MDY5Nzk2MzU1.D2r1Sg.Y6x6b7mRYWMiquR0aSnQ_MMlMcA');