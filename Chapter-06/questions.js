const readline = require("readline");

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const collectAnswer = (questions, done) => {

    const answers = [];
    const [firstquestion] = questions;
    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length],questionAnswered);
        }
        else{
            done(answers);
        }
    } 
    rl.question(firstquestion,questionAnswered);
}
collectAnswer(questions, answers =>{
    console.log("Thanks for your answer");
    console.log(answers);
    process.exit();
})