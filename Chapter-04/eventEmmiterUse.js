const events = require("events");
const util = require("util")
const emitter = new events.EventEmitter();

emitter.on("customEvent",(message,user) =>{
    util.log(`${user}: ${message}`)
});

process.stdin.on("data",data =>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "Goodbye!!!", "Process");
        process.exit();
    }
    emitter.emit("customEvent",input,"User");
});