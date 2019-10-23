const collectAnswer = require("./lib/collectAnswer")
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
collectAnswer(questions, answers => {
    console.log("Thanks for your answer");
    console.log(answers);
    process.exit();
})