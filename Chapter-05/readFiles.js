const fs = require("fs");

console.log("start reading text file Synchroniously!!!");

const file = fs.readFileSync("./assets/Readme.md","UTF-8");
console.log(file);

fs.readFile("./assets/Readme.md", "UTF-8",(err,fileText)=>{
    if(err){
        console.log(`The error occured here ${err.message}`);
        process.exit();
    }
    console.log(fileText);
});
console.log("start reading the text file Asynchroniously");


console.log("now will read a binary file");

fs.readFile("./assets/alex.jpg", (err, fileText) => {
    if (err) {
        console.log(`The error occured here ${err.message}`);
        process.exit();
    }
    console.log(fileText);
});
console.log("start reading the binary file Asynchroniously");
