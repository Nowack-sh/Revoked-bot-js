const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch")

module.exports = {
    name: "hentai",
    description: "Haram akhy.",
    execute: (client, message, args, Discord) => {
        if (!message.channel.nsfw) return message.channel.send('**This Channel Is Not NSFW Channel!**')
                superagent.get('https://nekos.life/api/v2/img/hentai').end((err, response) => {
                        const akami = new MessageEmbed()
                            .setAuthor(`Hentai!`)
                            .setTitle("Click to Go to Picture")
                            .setImage(response.body.url)
                            .setColor("RED")
                            .setURL(response.body.url);
                        message.reply({ embeds: [akami] });
                    })
                }
            }
