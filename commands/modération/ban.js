const { Permissions } = require("discord.js")
const { MessageEmbed } = require("discord.js")
const owners = require("../../owners.json")

module.exports = {
    name: "ban",
    description: "Ban a member.",
    execute: (client, message, args, Discord) => {
        if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("**Sorry but you dont have the permission to ban.**")
        let user = message.mentions.users.first() || client.users.cache.find(user => user.id === `${args[1]}`)
        let raison = args.slice(2).join(" ");
        if (!user) return message.reply("**You forgot to provide a member to ban.**")
        if (!raison) raison = "No reason specified."
        if (owners["owners"].includes(user.id)) return message.reply("**You cant ban an owner !!**")
        client.channels.cache.get(`894977434120753162`).send(`${message.author} a **banni** ${user}`)
        if (message.guild.members.cache.get(user.id).roles.highest.position < message.guild.members.cache.get(message.author.id).roles.highest.position) {
            if (message.guild.members.cache.get(user.id).bannable) {
                message.guild.members.ban(user.id, { reason: `${raison}` });
                const embed = new MessageEmbed()
                    .setTitle("Ban !")
                    .setDescription(`${message.author} banned ${user.tag}`)
                    .setColor(message.author.color)
                message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
            }
            else {
                message.reply({ content: "**I cant ban this member !**", allowedMentions: { repliedUser: false } });
            }
        }
        else {
            message.reply({ content: "**Sorry but you are not allowed to ban a member with a supperior role thans yours **", allowedMentions: { repliedUser: false } });
        }
    }
}
