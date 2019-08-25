const Discord = require('discord.js');
const token = 'NTQ0OTI2MjM3NTAwNjM3MjA3.XWL-nA.pIOMmHt-oLyxNAllk6Lt6UJXfP4';
const client = new Discord.Client();
const {Client, RichEmbed} = require('discord.js');

//-----------------------------//

client.login(token);

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'role-request');


      if (!channel) return;


      channel.send(`${member}, joined Exonian Order's discord! Quia Exonia!`);
    });

    client.on('message', (message) => {
        if (message.content.toLowerCase() === 'ping') {
            message.channel.send(`Pong`);
        }
    });
    client.on('message', (message) => {
        if (message.content.toLowerCase() === 'aresite') {
            message.channel.send(`Oh yesssssss BOIS`);
        }
    });
    client.on('message', (message) => {
        if (message.content.toLowerCase() === 'Kringinal') {
            message.channel.send(`KAISER`);
        }
    });
    client.on('ready', () => {
        console.log('I am ready!');
      });

      client.on('message', message => {
        if (message.content === '!rules') {
          const embed = new RichEmbed()
            .setTitle('RULES')
            .setColor(0xFFFF00)
            .setFooter(Text='QUIA EXONIA // Exonian Industries')
            .setThumbnail(url='https://cdn.discordapp.com/attachments/543295930938425347/544928774169559074/EXO_MAIN.png')
            .setDescription('**Welcome to Exonian Order!**\n\n\n**Discord Rules**\n\n I - Keep topics to their designated channels. #off-duty is for silly things and off-topic conversation, #nsfw is for pornography and otherwise lewd media. \n\n II - The format of your username must go: [Roblox Username] | E.g. “[ExonianOrder]”\n\n III: Do not @everyone, unless you are an officer announcing an event in #announcements. \n\n IV. You must follow Discord’s official Community Guidelines, or otherwise face being banned. Please read over said guidelines at https://discordapp.com/guidelines \n\n V. Cussing is allowed, but please do it in moderation. Of course, “christian server” memes are allowed, yet like most memes, only in off-duty situations. \n\n VI. Screaming at the top of your motherfucking lungs in voice chat will not be tolerated. \n\n VII: Do not Spam, this is really an obvious one. \n\n VIII: If there is a problem related to the discord, report to a General+, they are the ones tasked with administering the discord. Do not ping anyone without good reason. \n\n IX: Short links are not allowed to be posted, as well as blasze.tk links.');
          message.channel.send(embed);
        }
      });
      client.on('message', message => {
        if (message.content === '!verification') {
          const embed = new RichEmbed()
            .setTitle('HOW TO VERIFY')
            .setColor(0xFFFF00)
            .setFooter(Text='QUIA EXONIA // Exonian Industries')
            .setThumbnail(url='https://cdn.discordapp.com/attachments/543295930938425347/544928774169559074/EXO_MAIN.png')
            .setDescription('**Welcome to Exonian Order!**\n\n\n**Verification** \n\n\n  I. Say your username, rank in Ascendancy of the Order or Exonian Order, and timezone in #role-request \n \n II. Wait for the Kaiser or Supreme General to rank you. \n \n III. Complete the course if you havent! https://www.roblox.com/games/2669712159/Exonian-Initiation');
          message.channel.send(embed);
        }
      });
