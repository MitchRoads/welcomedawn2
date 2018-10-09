const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

client.on(`ready`, () => {
  console.log(`I am ready to welcome!`);
client.user.setActivity('At The Strike Of DAWN: Season 1');

});

client.on('message', async (message, member) => {

	  if (message.content.startsWith(`${prefix}avatar`)) { 
	   let user = message.mentions.users.first(); 
if(!user) return message.channel.send("You haven't selected/mentioned a user whose avatar you want to see."); 
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Profile Picture`)
    .setImage(user.displayAvatarURL)
    .setColor("#ea9b67")
    .setTimestamp(new Date());
    message.channel.send(avatarEmbed);
}
	   });

client.on('guildMemberAdd', (member) => {
	
  let guild = member.guild;
  let server = member.guild.name;
member.addRole(`456990891987697675`);
  let welcome = guild.channels.find(c => c.name === 'welcome');
  let gembed = new Discord.RichEmbed()
      .setTitle("User Enterance")
      .setColor("#c2c5ea")
      .setDescription(`Welcome ${member}, to **${server}**, hope you enjoy your stay.`)
      .setTimestamp()
  welcome.send(gembed);
	      });

client.on('guildMemberRemove', (member) => {
	
  let guild = member.guild;
  let server = member.guild.name;
  let logs = guild.channels.find(c => c.name === 'logs');
  let gembed = new Discord.RichEmbed()
      .setTitle("User Departure")
      .setColor("#c2c5ea")
      .setDescription(`Too bad that ${member} has decided to go, maybe one day you'll return to us. But for now, au revoir.`)
      .setTimestamp()
  logs.send(gembed);
	      });
