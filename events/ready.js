const chalk = require("chalk")
const prefix = "+"

module.exports = (client) => {
    client.user.setStatus('idle')
    client.user.setActivity(`My prefix is: ${prefix}`)
    console.log(chalk.bgBlack.white(`Connecté en tant que ${chalk.bgBlack.green(client.user.tag)} !`));
}