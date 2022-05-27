const prompt = require('prompt-sync')({sigint: true});

const question = prompt("Would you like to play: ROLL THE DICE 'rigged' ? Type: 'yes' or 'no' ");

if (question === "yes") { 
    let riggedroll = Number(prompt("Enter the number you would to rig: (between 1 and 6): "));
    let roll = Math.ceil(Math.random()*10); 
    console.log(roll);
    if (roll > 6){
        console.log(riggedroll);
        }
        else console.log(roll);
        }
        else if (question === "no") {
        console.log("Maybe Later?");
}
else console.log("error!")