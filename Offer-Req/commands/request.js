const RichEmbed = require("discord.js");

module.exports = {
    name: 'request',
    aliases: ['req'],
    description: 'Request Services',
    execute(message) {
        let filter = m => m.author.id === message.author.id
        const ReqChannel1 = '857559554215378955'
        const ReqChannel2 = '857559571916128267'
        const ReqChannel3 = '857559587410149386'
        const ReqChannel4 = '859526009286950933'
        var AuthorTag = message.author.tag;
        var AuthorID = message.author.id;
        var AuthorProfile = message.author.displayAvatarURL({ dynamic:true, size:256})
        message.channel.send(`Cool, a new request! Answer the following questions.\n1. | Which one of the request-services channel do you want to send this reques in?\n\n\`Please mention the channel you'll like to send your request in.\``).then(() => {
            message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        })
        .then(message => {
        message=message.first()
        if (message.content == '<#'+ReqChannel1+'>' || message.content == '<#'+ReqChannel2+'>' || message.content == '<#'+ReqChannel3+'>' || message.content == '<#'+ReqChannel4+'>') {
            const ChannelID=message.mentions.channels.first()
            message.channel.send(`2. | Epic, what do you want to title your request?\n\n\`Please type in the title of your request\``).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                })
                .then(message => {
                    message=message.first()
                    var Title=message.content
                    message.channel.send(`3. | Now, What is the description of your request?\n\n\`Please type in the description of your request\``).then(() => {
                        message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 120000,
                            errors: ['time']
                        })
                        .then(message => {
                            message=message.first()
                            var Description=message.content
                            message.channel.send(`4. | The final step, What is your budget?\n\n\`Please type in a budget for your request (Do NOT use ranges. Example: 10-15)\``).then(() => {
                                message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 30000,
                                    errors: ['time']
                                })
                                .then(message => {
                                    message=message.first()
                                    var Budget=message.content
                                    if(!isNaN(message.content)){
                                        message.channel.send("You have successfully posted a request in <#" + ChannelID +">")
                                        const embed = new RichEmbed.MessageEmbed()
                                        .setColor('RANDOM')
                                        .setTitle("REQUEST: " + Title)
                                        .setAuthor(AuthorTag, AuthorProfile)
                                        .addFields(
                                            { name: 'Submitted by:', value: '<@'+AuthorID+'>' },
                                            { name: 'Details:', value: Description },
                                            { name: 'Budget:', value: '$'+Budget },
                                        )
                                        .setFooter("To create a request, use the cmd: ~request")
                                        ChannelID.send(embed)
                                    }
                                    else{
                                        message.channel.send("Incorrect budget entered.")
                                    }
                                })
                                .catch(collected => {
                                    message.reply('you took too long to respond.');
                                });
                            })
                        })
                        .catch(collected => {
                            message.reply('you took too long to respond.');
                        });
                    })
                })
                .catch(collected => {
                    message.reply('you took too long to respond.');
                });
            })
        } else {
            message.channel.send(`Incorrect channel specified.`)
        }
        })
        .catch(collected => {
            message.reply('you took too long to respond.');
        });
    })
  },
};
  