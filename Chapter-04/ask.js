const readline = require("readline");
const util = require("util")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like programming? ", answer =>{
    console.log(`Your answer: ${answer}`);
});