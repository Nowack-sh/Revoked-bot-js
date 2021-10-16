const client = require("../index")

module.exports = (client, message) => {
    let snipes = client.snipes.get(message.channel.id) || [];

    snipes.unshift({
        msg: message,
        image: message.attachments.first()?.proxyURL || null,
        time: Date.now(),
    })
    
    client.snipes.set(message.channel.id, snipes)
}