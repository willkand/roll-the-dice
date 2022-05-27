const prompt = require('prompt-sync')({sigint: true});

const question = prompt("Would you like to play: ROLL THE DICE? Type: 'yes' or 'no' ");

if (question === "yes") {
    const choosesides = Number(prompt("How many sides would you like you dice to be? "));
    console.log(Math.ceil(Math.random()*choosesides)) +1;
    }
    else if (question === "no")
    {
    console.log("Maybe next time");    
}
else console.log("error!")