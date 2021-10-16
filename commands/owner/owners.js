const { Permissions } = require("discord.js")
const { ownerSave } = require("../../utils/functions")
const owners = require("../../owners.json")

module.exports = {
    name: "owners",
    description: "Add a owner.",
    execute: (client, message, args, Discord) => {
        if (owners["owners"].includes(message.author.id)) {
            let onoff = message.content.trim().split(/ +/g);
            let user = client.users.cache.get(onoff[2]);
            if (!user) return message.reply("**You need to specify a user to whitelist**")
            if (!onoff) return message.reply("**Should i add it or remove it (>whitelist add/remove userid)")
            if (user.id === message.author.id) return message.reply("**You cant add/remove your self to the whitelist**")
            switch (onoff[1]) {
                case "add":
                    if (!owners["owners"].includes(user.id)) {
                        owners["owners"].push(user.id)
                        ownerSave();
                        message.reply(`**${user} has been succesfuly added to owners list**`)
                    }
                    break;
                case "remove":
                    const getIndex = owners["owners"].indexOf(user.id);
                    if (getIndex > -1) {
                        owners["owners"].splice(getIndex, 1);
                        ownerSave();
                        message.reply(`${user} has been succesfuly removed from the owners list`)
                    }
                    break;
            }
        }
        else(message.reply("**Only the bots owners can perform this command**"))
    }
}