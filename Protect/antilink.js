const { Permissions, Message } = require("discord.js");
const owners = require("../owners.json")
const whitelist = require("../whitelist.json")

module.exports = client => {
        client.on("messageCreate", async message => {
                if (message.content.match(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi)) {
                    if (owners["owners"].includes(message.author.id)) return
                    if (whitelist["wl"].includes(message.author.id)) return
                        message.delete();
                        message.channel.send("**Sorry but you can't send invitations links**")
                    
                }
            }
        )
    }
