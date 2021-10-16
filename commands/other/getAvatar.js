const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "pic",
    description: "Shows the avatar of a member",
    execute: (client, message, args,) => {
        let user = message.mentions.users.first()
        if(!user) user = message.author
        const embed = new MessageEmbed()
        .setTitle(`Here is ${user.username}'s avatar:`)
        .setColor(message.author.color)
        .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
        .setDescription(`[Png](${user.avatarURL({ format: 'png' })}) | [Webp](${user.avatarURL({ dynamic: true })}) | [Jpg](${user.avatarURL({ format: 'jpg' })})`)
        .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
        .setTimestamp()
        message.reply({ embeds: [embed] }).catch(err => console.log(err));;
        
    }
}