const {Permissions, MessageEmbed} = require("discord.js");

module.exports = {
    name: "clear",
    description: "Deletes a specific number of messages",
    execute: (client, message, args, Discord) => {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("You dont have enought permissions.")
            let amount = args[0];
            if(amount > 100) return message.reply("**You can clear 1 to 100 messages only**")
            message.channel.bulkDelete(amount).catch(err => console.log(err));
            const embed = new  MessageEmbed()
            .setTitle("Clear !")
            .setDescription(`This channel has been cleared by ${message.author}  (${amount} messages have been cleared) <a:yes:861945985773469736>`)
            .setTimestamp()
            .setColor(message.author.color)
            .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
            message.channel.send({ embeds: [embed] });
        
    }
}