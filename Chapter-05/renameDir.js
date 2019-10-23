const fs = require("fs");
var dirName1 = "storage";
var fileName1 = "newFile.md";
var dirName2 = "storage_files1";


let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();


// prints date & time in YYYY-MM-DD HH:MM:SS format
const text = "# just a new file\n" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;




if (!fs.existsSync(`./${dirName1}`)){
    fs.mkdirSync(`./${dirName1}`);
}
fs.writeFileSync(`./${dirName1}/${fileName1}`,text.trim());

fs.readdirSync(`./${dirName2}`).forEach(fileList =>{
    fs.unlink(`./${dirName2}/${fileList}`,err =>{
        if (err) {
            throw err;
        }
    })
});
if (fs.existsSync(`./${dirName1}`)) {
    fs.renameSync(`./${dirName1}`, `./${dirName2}`)
}