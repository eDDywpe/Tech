

module.exports = {
    config: {
        name: "ownercmds",
        description: "Get a meme from database!",
        usage: "-ownercmds",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ownercommands"]
    },
 run: async (bot, message, args) =>{
message.channel.send("**OWNER** ``` -eval <code> (it evals the code) \n -note (#channel) <text> (same as -say but only for owners!) \n -setbotstatus online/idle/dnd/invisible (sets bot status) \n -shutdown (shuts the bot down) \n -timers (m/h/d) <text> (sets a timer for the owners!)```")
}}
