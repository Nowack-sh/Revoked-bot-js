const { Permissions, MessageEmbed } = require("discord.js")

module.exports  =  {
    name: "renew",
    description: "Recreate a channel",
    execute: (client, message, args, Discord) => {
        let channel1 = message.mentions.channels.first()
        if(!channel1) channel1 = message.channel;
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.reply("You dont have enought permissions.")
        }
        client.channels.cache.get(`894977434120753162`).send(`${message.author} a **nuke** le channel ${channel1}`)
        const embed = new MessageEmbed()
        .setTitle("Nuke !")
        .setDescription(`This channel has been nuked by ${message.author}`)
        .setColor(message.author.color)
        .setTimestamp()
        .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
        channel1.clone().then(msg => msg.send({ embeds: [embed] })).catch(err => console.log(err));
        channel1.delete();
    }
}