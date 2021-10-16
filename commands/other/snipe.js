const { Message, MessageEmbed, Client } = require("discord.js")
const moment = require("moment")

module.exports = {
    name: "snipe",
    description: "Send the last message deleted.",
    /**
     * 
     * @param {Client} client 
     * @param {msg} message 
     * @param {String[]} args 
     */
    execute: (client, message, args, Discord) => {
    const snipes = client.snipes.get(message.channel.id)
    if(!snipes) return message.reply("**Sorry but there is nothing to snipe.**")

    const snipe = +args[0] -1 || 0;
    const target = snipes[snipe]
    if(!target) return message.reply(`**There is only ${snipes.length} messages.**`)

    const { msg, time, image} = target;
    const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setImage(image)
    .setTitle("Snipe.")
    .setDescription(msg.content)
    .setColor(message.author.color)
    .setFooter(`${moment(time).fromNow()} | ${snipe + 1}/ ${snipes.length}`)
    message.channel.send({ embeds: [embed] })

    }
}