const RichEmbed = require("discord.js");

module.exports = {
    name: 'offer',
    description: 'Offer Services',
    execute(message) {
        let filter = m => m.author.id === message.author.id
        const OfferChannel1 = '857559554215378955'
        const OfferChannel2 = '857559571916128267'
        const OfferChannel3 = '857559587410149386'
        const OfferChannel4 = '859526009286950933'
        var AuthorTag = message.author.tag;
        var AuthorID = message.author.id;
        var AuthorProfile = message.author.displayAvatarURL({ dynamic:true, size:256})
        message.channel.send(`Cool, a new request! Answer the following questions.\n1. | Which one of the offer-services channel do you want to send this request in?\n\n\`Please mention the channel you'll like to send the message in.\``).then(() => {
            message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        })
        .then(message => {
        message=message.first()
        if (message.content == '<#'+OfferChannel1+'>' || message.content == '<#'+OfferChannel2+'>' || message.content == '<#'+OfferChannel3+'>' || message.content == '<#'+OfferChannel4+'>') {
            const ChannelID=message.mentions.channels.first()
            message.channel.send(`2. | Epic, what do you want the title to be?\n\n\`Please type in the title\``).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                })
                .then(message => {
                    message=message.first()
                    var Title=message.content
                    message.channel.send(`3. | Now, What is the description of the services you offer?\n\n\`Please type in the description\``).then(() => {
                        message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 120000,
                            errors: ['time']
                        })
                        .then(message => {
                            message=message.first()
                            var Description=message.content
                                message.channel.send("You have successfully posted an offer in <#" + ChannelID +">")
                                const embed = new RichEmbed.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle("OFFERING: " + Title)
                                .setAuthor(AuthorTag, AuthorProfile)
                                .addFields(
                                    { name: 'Submitted by:', value: '<@'+AuthorID+'>' },
                                    { name: 'Details:', value: Description },
                                )
                                .setFooter("To create an offer use the cmd: ~offer")
                                ChannelID.send(embed)
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
  