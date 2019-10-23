const cp = require("child_process");
const questionApp = cp.spawn("node",["questions.js"]);
questionApp.stdin.write("Ankur Bansal\n");
questionApp.stdin.write("I am fine\n");
questionApp.stdin.write("Learn a new Skill\n");
questionApp.stdin.write("Red\n");
questionApp.stdin.write("Surfing\n");
questionApp.stdin.write("Below\n");
questionApp.stdin.write("Above\n");
questionApp.stdin.write("Don't know\n");

questionApp.stdout.on("data",data=>{
    console.log(` From the Question App: ${data}`);
})
questionApp.stdout.on("exit", () => {
    console.log(`Question App: Exited`);
})