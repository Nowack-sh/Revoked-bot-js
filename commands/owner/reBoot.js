const owners = require("../../owners.json")

module.exports = {
    name: "reboot",
    description: "Reboot the bot.",
    execute: (client, message, args, Discord) => {
        if (owners["owners"].includes(message.author.id)) {
            message.channel.send("**🕙 Restart en cours ...**").then(async msg => {
                msg.edit("**🕙 Restart en cours ...**")
                client.destroy();
                await client.login(process.env.token);
                await msg.edit("**🕙 Restart en cours ...**")
                msg.edit("**Restart effectué avec succés**")
            })
        }
        else(message.reply("**Only the bot's owner can do this command**"))
    }
}
