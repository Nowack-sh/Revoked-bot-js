const { Client, Message, MessageEmbed, interaction } = require('discord.js');
const axios = require('axios') // npm i axios
const dotenv = require("dotenv")
require('dotenv').config()

module.exports = {
    name: 'banner',
    description: 'Gets a users banner',
    execute: (client, message, args, Discord) => {
        let user = message.mentions.users.first() || client.users.cache.find(user => user.id === `${args[1]}`);
        if(!user) user = message.author
        axios.get(`https://discord.com/api/users/${user.id}`, {
            headers: {
                Authorization: `Bot ${process.env.token}`,
            },
        }).then((res) => {
            const {
                banner,
                accent_color
            } = res.data

            if (banner) {
                const extension = banner.startsWith("a_") ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`;

                const embed = new MessageEmbed()
                    .setTimestamp()
                    .setTitle(`${user.tag}'s banner`)
                    .setImage(url)
                    .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
                    .setColor(accent_color || message.author.color); // you can put any color

                message.reply({
                    embeds: [embed]
                })
            } else {
                if (accent_color) {
                    const embed2 = new MessageEmbed()
                        .setDescription(`${user.tag} does not have a banner! The color if the embed is thier accent color'`)
                        .setColor(accent_color);
                    message.reply({
                        embeds: [embed2]
                    })
                } else {
                    message.reply(`${user.tag} does not have a banner nor a accent color`)
                }
            }
        })
    }
}