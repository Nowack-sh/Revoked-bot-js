const owners = require("../../owners.json")

module.exports = {
    name: "setusername",
    description: "Change the bot's username",
    execute: (client, message, args, Discord) => {
        if (owners["owners"].includes(message.author.id)) {
            let choice = args.slice(0).join(" ");
            client.user.setUsername(`${choice}`).catch(err => console.log(err));
            message.reply(`**My username has been updated succesfuly to ${choice}**`)
        }
        else(message.reply("**Only the bot's owner can do this command**"))
    }
}