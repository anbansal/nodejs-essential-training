const readline = require("readline");
const { EventEmitter } = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done = f => f) => {
    const emitter = new EventEmitter();
    const answers = [];
    const [firstquestion] = questions;
    const questionAnswered = answer => {
        emitter.emit("answer",answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            emitter.emit("ask", questions[answers.length])
            rl.question(questions[answers.length], questionAnswered);
        }
        else {
            emitter.emit("completed", answers);
            done(answers);
        }
    }
    process.nextTick(()=>{
        emitter.emit("ask",firstquestion);
        rl.question(firstquestion, questionAnswered);
    });
    return emitter;
}