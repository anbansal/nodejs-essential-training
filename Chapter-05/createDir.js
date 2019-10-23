const fs = require("fs");

if (fs.existsSync("storage_files")){
    console.log("The direcotry storage_files already exist");
    process.exit();
}
else{
    fs.mkdir("storage_files",err =>{
        if (err){
            throw err;
        }
    });
    console.log("Directory successfully created!!!")
}
