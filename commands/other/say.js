module.exports = {
    name: "say",
    aliases: ["ntm"],
    description: "Make the robot talk",
    execute: (client, message, args, Discord, cmd) => {
        const content = args.slice(0).join(" ");
    let mention = ["@everyone", "@here", "<@&882314154877284362>"];
    let NoMention = true;
    for (var i in mention) {
        if (message.content.includes(mention[i])) NoMention = false;
    }
    if (NoMention) {
        if (content) {
            message.delete();
            message.channel.send({ content: `${content}` });
        }
        else {
            message.reply({ content: "**You forgot an argument.**", allowedMentions: { repliedUser: false } });
        }
    }
    else {
        message.reply({ content: "**Sorry but you cant mention (\`@everyone\` ou \`@here\`) !**", allowedMentions: { repliedUser: false } });
    }
    }
}