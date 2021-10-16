const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: "help",
    description: "Send a help embed.",
    execute: (client, message, args, Discord) => {
        const embedWelcome = new MessageEmbed()
            .setTitle("HELP !")
            .setTimestamp()
            .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
            .setDescription("Besoin d'aide? \n Je vous propose de vous aider sur : \n 🛡️・La modération \n 👑・Commandes d'owners \n 🔞・Commandes NSFW \n ❄️・Autres commandes...")
        const embedModération = new MessageEmbed()
            .setTitle("**Modération. 🛡️**")
            .setDescription("Commandes de modérations:")
            .setTimestamp()
            .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
            .setColor(message.author.color)
            .setFields(
                { name: "`>ban [mention] [reason]`", value: "Banni un membre du serveur." },
                { name: "`>snipe`", value: "Envoie le dernier message supprimé" },
                { name: "`>lock [#channel]`", value: "Ferme le channel." },
                { name: "`>unlock [#channel]`", value: "Réouvre le channel." },
                { name: "`>clear [amount]`", value: "Supprime un nombre de message." },
                { name: "`>renew [#channel]`", value: "Recrée le channel." },
                { name: "`>mute [mention]`", value: "Mute un membre." },
                { name: "`>unmute [mention]`", value: "Unmute un membre." },
                { name: "`>nick [membre] [nickname]`", value: "Change le pseudo d'un membre." },
                { name: "`>blacklist [ID]`", value: "Ban un membre pour toujours sauf si il n'est plus dans la blacklist." },
                { name: "`>dm [mention] [Message]`", value: "Envoie un message privé à un membre." }
            )
        const embedharaam = new MessageEmbed()
            .setTitle("**Haram akhy 🔞**")
            .setTimestamp()
            .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
            .setDescription("Commandes de type haram.")
            .setColor(message.author.color)
            .setFields(
                { name: "`>anal`", value: "Remet toi sur le droit chemmin mon ami." },
                { name: "`>boobs`", value: "Remet toi sur le droit chemmin mon ami." },
                { name: "`>hentai`", value: "Remet toi sur le droit chemmin mon ami." },
                { name: "`>pussy`", value: "Remet toi sur le droit chemmin mon ami." },
            )
        const embedOther = new MessageEmbed()
            .setTitle("**Other commands. ❄️**")
            .setColor(message.author.color)
            .setTimestamp()
            .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
            .setDescription("Autres commandes.")
            .setFields(
                { name: "`>pic [mention]`", value: "Envoie la photo de profil de quelqu'un." },
                { name: "`>banner [mention]`", value: "Envoie la banner de quelqu'un." },
                { name: "`>infos`", value: "Envoie les informations supplémentaires sur le bot." },
                { name: "`>say [message]`", value: "Le bot répéte le message." },
            )
        const embedOwner = new MessageEmbed()
            .setTitle("**Owner commands. 👑**")
            .setTimestamp()
            .setFooter("Revoked crow bot made by Nowack", "https://cdn.discordapp.com/attachments/885190475114512434/885618687736938516/a_ee83114d0b8eaf3d2f6d53c384ac1aa3.gif")
            .setDescription("Commandes possible uniquement par les owners.")
            .setColor(message.author.color)
            .setFields(
                { name: "`>owners [add/remove] [ID]`", value: "Ajoute un membre à la liste d'owners." },
                { name: "`>ownerslist`", value: "Envoie la photo de profil de quelqu'un." },
                { name: "`>setAvatar [lien]`", value: "Change la photo de profil du bot." },
                { name: "`>setUsername [Nickname]`", value: "Change le pseudo du bot." },
                { name: "`>whitelist [add/remove] [ID]`", value: "Ignore le membre par les protections." },
                { name: "`>wlshow`", value: "Liste des whitelisteds." },
            )
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton().setCustomId("1").setLabel("🛡️").setStyle("SECONDARY"),
                new MessageButton().setCustomId("2").setLabel("👑").setStyle("SECONDARY"),
                new MessageButton().setCustomId("3").setLabel("❄️").setStyle("SECONDARY"),
                new MessageButton().setCustomId("4").setLabel("🔞").setStyle("SECONDARY")
            )
        message.reply({ embeds: [embedWelcome], components: [row] }).then(msg => {
            const filter = b => (["1", "2", "3", "4"].includes(b.customId) && !b.user.bot && b.user.id === message.author.id)
            const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });
            collector.on("collect", async b => {
                switch (b.customId) {
                    case "1":
                        b.update({ embeds: [embedModération], components: [row] });
                        break;
                    case "2":
                        b.update({ embeds: [embedOwner], components: [row] });
                        break;
                    case "3":
                        b.update({ embeds: [embedOther], components: [row] });
                        break;
                    case "4":
                        b.update({ embeds: [embedharaam], components: [row] });
                }
            })
            collector.on("end", collected => {
                row.components.forEach(b => {
                    b.setDisabled(true);
                })
                msg.edit({ content: "Embed inactif", components: [row] })
            })
        }
        )
    }
}