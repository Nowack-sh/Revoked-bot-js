const { Permissions } = require("discord.js")

module.exports = {
    name: "unmute",
    descritpion: "Unmute a member",
    execute: (client, message, args, Discord) => {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("**Sorry but you dont have the permission to execute this command.**")
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        client.channels.cache.get(`894977434120753162`).send(`${message.author} a **unmute** ${Member}`)
        if(!Member) return message.reply("**Please provide a member to mute.**")
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
        Member.roles.remove(role)
        message.reply(`**${Member} is now unmuted.**`)
    }
}