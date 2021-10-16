const { MessageEmbed, Permissions } = require("discord.js")

module.exports = {
    name: "nick",
    description: "Change the nickname of a member.",
    execute: (client, message, args, Discord) => {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return message.reply("**Sorry but you havent the permission to do this command.**")
        let user = message.mentions.users.first()
        if(!user) return message.reply("**You forgot to provide a member.**")

        let nick = args.slice(1).join(" ")
        if(!nick) return message.reply("**You forgot to provide a nickname to give to the member.**")

        client.channels.cache.get(`894977434120753162`).send(`${message.author} a **changer le pseudo** de ${user}`)
        let member = message.guild.members.cache.get(user.id);
        member.setNickname(nick);

        const embed = new MessageEmbed()
        .setTitle("Changing nick")
        .setDescription(`Succesfully changed ${user.tag} name to ${nick}.`)
        .setColor(message.author.color)
        .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
        .setTimestamp()
        message.reply({ embeds: [embed] })

    }
}