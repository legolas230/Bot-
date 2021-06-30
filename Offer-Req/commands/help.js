module.exports = {
	name: 'help',
	description: 'Help!',
	execute(message) {
		const embed = {
			"color": "RANDOM",
			  "fields": [	
			    {
				  "name": "Commands",
				  "value": "‣ `Offer`: Offer your services.\n‣ `Request`: Request for services.\n‣ `Delete`: Delete your offer.\n‣ `Complete`: Mark your request as complete."
			    },]
	    };
	  message.channel.send({embed});
  },
};