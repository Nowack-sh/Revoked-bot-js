const { Permissions } = require("discord.js")

module.exports = {
    name: "dm",
    description: "Dm the pinged user.",
    execute: (client, message, args, Discord) => {
        let member = message.mentions.users.first()
        const guild = message.guild.name;
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("**Sorry but you dont have the permission to perform this command.**")
        if(!member) return message.reply("**Please provide a member to dm.**")
        let text = args.join(" ").slice(22)
        if(!text) return message.reply(`**Please provide a text to send to ${member}`)
        member.send(text)
    }
}