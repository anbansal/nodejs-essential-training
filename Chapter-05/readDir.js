const fs = require("fs");
console.log("Start reading now")
const files = fs.readdirSync("./assets");
console.log("Completed Syncroniously!!!");
console.log(files);

fs.readdir("./assets",(err,file) => {
    if(err){
        throw err;
    }
    console.log("Completed Asyncroniously!!!");
    console.log(file);
});
console.log("Start reading now Asyncroniously")
