const { MessageEmbed } = require("discord.js")
const os = require('os');

module.exports = {
    name: "infos",
    description: "Informations of the host",
    execute: (client, message, args, Discord) => {
        const embed = new MessageEmbed()
        .setTimestamp()
        .addField(`:map: Number of servers`, `${client.guilds.cache.size}`, true)
        .addField(`:bust_in_silhouette: Number of users`, `${client.users.cache.size}`, true)
        .addField(`:speech_balloon:  Number of channels`, `${client.channels.cache.size}`, true)
        .addField(`:desktop: Operating System`, `${os.platform()}`, true)
        .addField(`:gear: Architecture`, `${os.arch()}`, true)
        .addField(`:rocket:  Processor`, `${os.cpus().map(i => `${i.model}`)[0]}`, true)
        .addField(`:pager: RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, true)
        .addField(`:dividers: Lib`, `Discord.js V13`, true)
        .addField(`:alarm_clock: Uptime`, "" + (Math.round(client.uptime / (1000 * 60 * 60))) + " Heure(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minute(s) et " + (Math.round(client.uptime / 1000) % 60) + " seconde(s)" + "")
        .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
    message.reply({ embeds: [embed] })
    }
}