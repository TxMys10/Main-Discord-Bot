module.exports = { 
    name: "react", 
    description: "reactions!",

    execute(message, args, Discord) {
        message.react('👍'),
        message.react('👎') 
        message.channel.send(`Your message above has been reacted to.`)
    }
}