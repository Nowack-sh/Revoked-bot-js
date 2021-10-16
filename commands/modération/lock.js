const { Permissions, Channel } = require("discord.js")
const discord = require("discord.js")

module.exports = {
    name: "lock",
    description: "Locks a channel.",
    execute: (client, message, args, Discord) => {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.reply("**Sorry but you havent the permission to do this command.**")
        let channel1 = message.mentions.channels.first() || message.channel;
        client.channels.cache.get(`894977434120753162`).send(`${message.author} a **lock** le channel ${channel1}`)
        try {
            channel1.permissionOverwrites.edit(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
            message.channel.send("**Loading...**").then(async msg => {
                msg.edit(`**${channel1} has been successfully locked.**`)
            })
        }catch(e) {
            console.log(e)
        }
    }
}
