const prefix = "+"
const { DiscordTogether } = require('discord-together');
const Discord = require("discord.js");
const { Permissions, MessageEmbed } = require("discord.js");
const chalk = require("chalk")

module.exports = (client, message) => {
    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (client.commands.get(command)) {
        client.commands.get(command).execute(client, message, args);
        console.log(chalk.bgBlack.white(`The user ${chalk.bgBlack.green(message.author.tag)} as executed ${chalk.bgBlack.green(client.commands.get(command).name)}`));
    }
}