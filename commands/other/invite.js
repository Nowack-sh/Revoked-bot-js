const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    description: "Invite the bot to a guild.",
    execute: (client, message, args, Discord) => {
        const embed = new MessageEmbed()
        .setURL("")
        .setTitle("Invite me here.")
        message.reply({embeds: [embed]})
    }
}