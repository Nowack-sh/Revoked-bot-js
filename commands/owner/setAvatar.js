const owners = require("../../owners.json")

module.exports = {
    name: "setavatar",
    description: "Change the bot's avatar",
    execute: (client, message, args, Discord) => {
        if (owners["owners"].includes(message.author.id)) {
            let URL = args.slice(0).join(" ");
            if(!URL) message.reply("**You need to provide a URL**")
            client.user.setAvatar(`${URL}`).catch(err => console.log(err));
        }
        else(message.reply("**Only the bot's owner can do this command**"))
    }
}