const cp = require("child_process");

cp.exec("node readStream", (err,data,stderr) =>{
    if (err) {
        console.log(stderr);
    }
})

cp.exec("ls -la", (err, data, stderr) => {
    if(err) {
        console.log(stderr);
    }
    else {
        console.log(data);
    }
});