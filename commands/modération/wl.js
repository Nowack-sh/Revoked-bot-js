const wl = require("../../whitelist.json")
const { wlSave } = require("../../utils/functions")
const owners = require("../../owners.json")

module.exports = {
    name: "whitelist",
    description: "Add a user to be ignored by the bot.",
    execute: (client, message, args, Discord) => {
        if (!owners["owners"].includes(message.author.id)) return message.reply("**Sorry but you cant perform this command.**")
        let onoff = message.content.trim().split(/ +/g);
        let user = client.users.cache.get(onoff[2]);
        if(!user) return message.reply("**You need to specify a user to whitelist**")
        if(!onoff) return message.reply("**Should i add it or remove it (>whitelist add/remove userid)")
        if(user.id === message.author.id) return message.reply("**You cant add/remove your self to the whitelist**")
        switch (onoff[1]) {
            case "add":
                if(!wl["wl"].includes(user.id)) {
                    wl["wl"].push(user.id)
                    wlSave();
                    message.reply(`${user} has been added succesfuly to the whitelist`)
                }
                break;
            case "remove":
                const getIndex = wl["wl"].indexOf(user.id);
                if (getIndex > -1) {
                    wl["wl"].splice(getIndex, 1);
                    wlSave();
                    message.reply(`${user} has been removed succesfuly from the whitelist`)
                }
                break;
        }
    }
}