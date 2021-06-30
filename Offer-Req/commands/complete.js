const RichEmbed = require("discord.js");

module.exports = {
    name: 'complete',
    description: 'Request Completed',
    execute(message) {
        if(message.content === '~complete'){
            const embed = {
              "color": "RANDOM",
              "title": "Command: ~complete",
              "description": "\n**Description:** Mark your request as completed.\n**Usage:** ~complete [message id]"
            }
            message.channel.send({embed})
          }
        var AuthorID = message.author.id;
        const ReqChannel1 = '857559554215378955'
        const ReqChannel2 = '857559571916128267'
        const ReqChannel3 = '857559587410149386'
        const ReqChannel4 = '859526009286950933'
        var msgid = message.content.slice(10)
        message.client.channels.cache.get(ReqChannel1).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                const receivedEmbed = message.embeds[0];
                const embed = new RichEmbed.MessageEmbed(receivedEmbed)
                    .setTitle("This request has been completed!")
                    embed.fields[1] = []
                    embed.fields[2] = []
                    message.edit(embed)
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return1"))
        message.client.channels.cache.get(ReqChannel2).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                const receivedEmbed = message.embeds[0];
                const embed = new RichEmbed.MessageEmbed(receivedEmbed)
                    .setTitle("This request has been completed!")
                    embed.fields[1] = []
                    embed.fields[2] = []
                    message.edit(embed)
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return2"))
        message.client.channels.cache.get(ReqChannel3).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                const receivedEmbed = message.embeds[0];
                const embed = new RichEmbed.MessageEmbed(receivedEmbed)
                    .setTitle("This request has been completed!")
                    embed.fields[1] = []
                    embed.fields[2] = []
                    message.edit(embed)
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return3"))
        message.client.channels.cache.get(ReqChannel4).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                const receivedEmbed = message.embeds[0];
                const embed = new RichEmbed.MessageEmbed(receivedEmbed)
                    .setTitle("This request has been completed!")
                    embed.fields[1] = []
                    embed.fields[2] = []
                    message.edit(embed)
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return4"))
    },
};