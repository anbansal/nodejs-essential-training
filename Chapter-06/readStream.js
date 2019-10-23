const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8");

let fileTxt = "";

readStream.on("data",data =>{
    fileTxt += data;
});
readStream.once("data",data=>{
    console.log(data);
});
readStream.on("end",()=>{
    console.log("finished reading the data.");
    console.log(`I read ${fileTxt.length -1} chunk of data`);
})
