const bl = require("../blacklist.json")
module.exports = (client, member) => {

    if (bl["bl"].includes(member.user.id)) {
        member.ban();
    }
}