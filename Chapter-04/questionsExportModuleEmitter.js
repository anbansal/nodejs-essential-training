const collectAnswer = require("./lib/collectAnswerNew")
const questions = [
    "What is your name? ",
    "How are you? ",
    "What did you do today? ",
    "What is your favourite color? ",
    "What is your hobby? ",
    "Where are you coming from? ",
    "Where are you going? ",
    "What is your background? "
];
const emitter = collectAnswer(questions);


emitter.once("ask",() => {
    console.log("I am going to ask you some question now!!!");
})
emitter.on("ask",question =>{
    console.log(`\t\tQuestion asked: ${question}`);
})
emitter.on("answer", answer => {
    console.log(`\t\tQuestion answered: ${answer}`)
});

emitter.on("completed", answers => {
    console.log("Thanks for your answer");
    console.log(answers);
});
emitter.on("completed", () => {
    process.exit();
});