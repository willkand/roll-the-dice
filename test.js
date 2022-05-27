const prompt = require('prompt-sync')({sigint: true});

let riggedroll = Number(prompt("Enter the number you would to rig: (between 1 and 6): "));
    
let roll = Math.ceil(Math.random()*10); 
    
console.log(roll);
    
        if (roll > 6){
        console.log(riggedroll);
        }
        else { console.log(roll);
    }