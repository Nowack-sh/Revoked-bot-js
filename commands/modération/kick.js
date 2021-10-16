const { Client, Message, MessageEmbed, interaction, Permissions } = require('discord.js');
const owners = require("../../owners.json")

module.exports = {
    name: "kick",
    description: "Kick a member from the server.",
    execute: (client, message, args, Discord) => {
        let member = message.mentions.members.first();
        if(member.id === message.author.id) return message.reply("**You cant kick your self.**")
        if (owners["owners"].includes(member.id)) return message.reply("**You cant kick an owner !!**")
        client.channels.cache.get(`894977434120753162`).send(`${message.author} a **kick** ${member}`)
        if (message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
            let reason = args.slice(2).join(" ");
            if(!reason) reason = "No reason specifiedé"
            if (!member) return message.reply("**Please put the ID or the mention of someone.**")
            if (!member.kickable) return message.reply("**Sorry but i can't kick this member.**")
            const embed = new MessageEmbed()
            .setTitle("Kick !")
            .setDescription(`**${member} was successfully kicked for ${reason}**`)
            .setColor(message.author.color)
            .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
            .setTimestamp()
            message.reply({ embeds: [embed] })
            member.kick()
        }
    }
}
