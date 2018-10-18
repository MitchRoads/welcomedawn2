const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
require('moment-duration-format');

client.on(`ready`, () => {
  console.log(`I am ready to welcome!`);
client.user.setActivity('Welcoming Users | :avatar | :info');

});

client.on('message', async (message, member) => {

	  if (message.content.startsWith(`${prefix}avatar`)) { 
	   let user = message.mentions.users.first(); 
if(!user) return message.channel.send("You haven't selected/mentioned a user whose avatar you want to see."); 
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Profile Picture`)
    .setImage(user.displayAvatarURL)
    .setColor("#ea9b67")
    .setTimestamp();
    message.channel.send(avatarEmbed);
}
	
	if (message.content.startsWith(`${prefix}info`)) {

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("🤖 Bot Information")
    .setDescription("Information on WeatherDawn:")
    .setColor("#ea9b67")
    .setThumbnail(bicon)
    .addField("Name", client.user.username, true)
    .addField("Tag", client.user.tag, true)
    .addField("ID", client.user.id, true)
    .addField("Owned By", `${client.guilds.size} of @Dawn.Bots.INC guilds.`, true)
    .addField("Welcoming", `Over ${client.users.size} users.`, true)
    .addField("Date Of Creation", client.user.createdAt.toLocaleDateString(), true)
    .addField("Last Update", `${moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]')} ago`, true)
    .addField("Discord.js Version", "discord.js 11.4.2", true)
    .addField("Dawn Public Server", "https://discord.gg/wz4NnZk", true)
    .setFooter("Created By @Dawn.Bots.INC", client.user.displayAvatarURL)
    .setTimestamp();
    return message.channel.send(botembed);
  }      
});

client.on('guildMemberAdd', (member) => {
	
  let guild = member.guild;
  let server = member.guild.name;
member.addRole(`456990891987697675`);
  let welcome = guild.channels.find(c => c.name === 'welcome');
  let gembed = new Discord.RichEmbed()
      .setTitle("User Enterance")
      .setColor("#000000")
      .setDescription(`Welcome ${member}, to **${server}**, hope you enjoy your stay.`)
      .setTimestamp()
  welcome.send(gembed);
	      });

client.on('guildMemberRemove', (member, message) => {
	
  let guild = member.guild;
  let server = member.guild.name;
  let logs = guild.channels.find(c => c.name === 'logs');
  let gembed = new Discord.RichEmbed()
      .setTitle("User Departure")
      .setColor("#000000")
      .setDescription(`Too bad that ${member} has decided to go, maybe one day you'll return to us. But for now, au revoir.`)
      .setTimestamp()
  logs.send(gembed);
	      });	
client.login(process.env.BOT_TOKEN);
