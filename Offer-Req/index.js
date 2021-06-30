require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
		status: 'active',
        activity: {
            name: '~help',
            type: "PLAYING"
        }
    });
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();

	const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

	if (command) 
		{
			command.execute(message, args, client);
		}		
	});	

client.login(process.env.TOKEN);