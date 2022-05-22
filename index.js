const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc3NzkwMzEyMTc5MTc5NTUw.GialtD.3w8xHw2f04BfE1IQ-dU5DW34kSEdi7UcRa3G94"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi kate") {
        message.reply(`Hi ${client.user.tag}`)
    }
})

client.login(process.env.TOKEN)