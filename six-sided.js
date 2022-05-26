const prompt = require('prompt-sync')({sigint: true});

const question = prompt("Would you like to play: ROLL THE DICE? Type: 'yes' or 'no' ");

if (question === "yes") { 
    console.log(Math.floor((Math.random()*6)+1));
}
else if (question === "no") {
    console.log("Maybe Later?");
}
else console.log("error!")