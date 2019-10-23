const fs = require("fs");
const colorJason = require("./assets/colors.json");

if(fs.existsSync("storage_files")){
    process.stdout.write("");
}
else {
    fs.mkdir("storage_files", err => {
        if (err) {
            console.log( err.message);
            process.exit();
        }
    });
}
colorJason.colorList.forEach(c => {
    fs.appendFile("./storage_files/colors.md", `${c.color}: ${c.hex}\n`,err =>{
        if (err){
            console.log(err.message);
            process.exit();
        }
    });
});