module.exports = (client, interaction) => {
    if(interaction.value === "couple") {
        interaction.update({ content: 'couple sélect avec succès!', components: [] });
    }
}