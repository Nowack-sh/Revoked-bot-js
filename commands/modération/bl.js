const fs = require("fs")
const { Permissions } = require("discord.js")
const bl = require("../../blacklist.json")
const { blSave } = require("../../utils/functions")

module.exports = {
    name: "blacklist",
    description: "Prevent a person from coming back even if they are unban.",
    execute: (client, message, args, Discord) => {
        if (message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            let argsez = message.content.trim().split(/ +/g);
            let user = client.users.cache.get(argsez[2]);
            client.channels.cache.get(`894977434120753162`).send(`${message.author} a **blacklist** ${user}`)
            if(user.id === message.author.id) return message.reply("**You cant blacklist your self.**");
            switch (argsez[1]) {
                case "add":
                    if (!bl["bl"].includes(user.id)) {
                        bl["bl"].push(user.id);
                        blSave();
                        message.guild.members.cache.get(user.id).ban();
                    }
                    break;
                case "remove":
                    const getIndex = bl["bl"].indexOf(user.id);
                    if (getIndex > -1) {
                        bl["bl"].splice(getIndex, 1);
                        blSave();
                        message.guild.members.unban(user.id)
                    }
                    break;
            }
        }
    }
}