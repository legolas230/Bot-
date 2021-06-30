module.exports = {
    name: 'delete',
    description: 'Delete Offers',
    execute(message) {
        if(message.content === '~delete'){
            const embed = {
              "color": "RANDOM",
              "title": "Command: ~delete",
              "description": "\n**Description:** Delete your message in the offering services channel.\n**Usage:** ~delete [message id]"
            }
            message.channel.send({embed})
          }
        var AuthorID = message.author.id;
        const OfferChannel1 = '857559554215378955'
        const OfferChannel2 = '857559571916128267'
        const OfferChannel3 = '857559587410149386'
        const OfferChannel4 = '859526009286950933'
        var msgid = message.content.slice(8)
        message.client.channels.cache.get(OfferChannel1).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                message.delete()
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return1"))
        message.client.channels.cache.get(OfferChannel2).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                message.delete()
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return2"))
        message.client.channels.cache.get(OfferChannel3).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                message.delete()
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return3"))
        message.client.channels.cache.get(OfferChannel4).
        messages.fetch(msgid)
        .then(message => {
            var embedid=message.embeds[0].fields[0].value
            console.log(embedid)
            if(embedid.includes(AuthorID)){
                message.delete()
            }
            else{
                return;
            }
        })
        .catch(err => console.log("Return4"))
    },
};