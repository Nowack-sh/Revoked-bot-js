const owners = require("../../owners.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ownerslist",
    execute: (client, message, args, Discord) => {
        if (!owners["owners"].includes(message.author.id)) return message.reply("**Only the bots owners can perform this command")
        const ids = `<@${owners["owners"].join(">, \n<@")}>`
        const embed = new MessageEmbed()
        .setTitle("Owner list")
        .setDescription(`${ids}`)
        .setColor(message.author.color)
        .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
        message.reply({ embeds: [embed] })
    }
}