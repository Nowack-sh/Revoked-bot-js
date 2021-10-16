const { Permissions } = require("discord.js"),
    ms = require("ms"),
    cooldown = {}
    const owners = require("../../owners.json")

    module.exports = {
    name: "mute",
    description: "Mute a member.",
    execute: (client, message, args, Discord) => {
        var authorcooldown = cooldown[message.author.id]
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("**Sorry but you dont have the permission to execute this command.**")
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (owners["owners"].includes(Member.id)) return message.reply("**You cant mute an owner !!**")
        if (!Member) return message.reply("**Please provide a member to mute.**")
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        client.channels.cache.get(`894977434120753162`).send(`${message.author} a **mute** ${Member}`)
        if (!role) {
            try {
                message.reply("**I didn't find the Mute role wait untill i create one...**")
                let muterole = guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: []
                    }
                })
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                })
                message.channel.send('**Muted role has sucessfully been created.**')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if (Member.roles.cache.has(role2.id)) return message.channel.send(`**${Member.displayName} is already muted.**`)
        Member.roles.add(role2)
        message.channel.send(`**${Member.displayName} is now muted.**`)
    }
}