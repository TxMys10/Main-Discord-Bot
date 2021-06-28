
module.exports = { 
    name: "help",
    description: "This is a help command.",
    execute(message, args, Discord) { 
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Help Desk!')
        .setDescription('A list of commands to help you in the future!')
        .addFields(
            {name: '!help', value: 'This is a help command.'},
        )
       
         .setFooter('Thanks!');
         message.delete()
         message.channel.send(`Check your PMs, ${message.author.username}`)
         
         message.author.send(embed);
    }
}