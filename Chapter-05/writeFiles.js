const fs = require("fs");

const text  = `
# This is a markdown file.

* readDir
* readFile
* readDirSync
* readFileSync



`;

fs.writeFile("./assets/notes.md",text.trim(),(err)=>{
    if (err) throw err;
    else {
        console.log("File Saved");
    }
})
