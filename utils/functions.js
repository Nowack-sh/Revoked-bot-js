const fs = require("fs");
const wl = require("../whitelist.json")
const owners = require("../owners.json")
const bl = require("../blacklist.json")

function blSave() {
    fs.writeFile("./blacklist", JSON.stringify(bl, null, 4), (err) => {
        if (err) console.log(`Erreur : ${err}`);
    });
};

function ownerSave() {
    fs.writeFile("./owners.json", JSON.stringify(owners, null, 4), (err) => {
        if (err) console.log(`Erreur : ${err}`);
    });
};

function wlSave() {
    fs.writeFile("./whitelist.json", JSON.stringify(wl, null, 4), (err) => {
        if (err) console.log(`Erreur : ${err}`);
    });
};

function loadAntiraid(client) {
    require("../Protect/antilink")(client);
}

function loadCommands(client) {
    const modules = ["owner", "modération", "haram", "other"];
    modules.forEach(c => {
        fs.readdir(`commands/${c}`, (err, files) => {
            if (err) { console.log(err) };
            console.log(`[CommandesLogs] ${files.length} commande/s chargée/s dans ${c} ☑️`);
            files.forEach(f => {
                const pull = require(`../commands/${c}/${f}`);
                client.commands.set(pull.name, pull);
                });
            });
        });
    };


module.exports = {
    blSave,
    wlSave,
    ownerSave,
    loadAntiraid,
    loadCommands
}