const questions = [
    "What is your name?",
    "How are you?",
    "What did you do today?",
    "What is your favourite color?",
    "What is your hobby?",
    "Where are you coming from?",
    "Where are you going?",
    "What is your background?"
]

const ask = (i = 0) => {
    process.stdout.write(`\n\n${questions[i]} > `);
}

ask();
const answers = [];
process.stdin.on("data",data =>{
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});

process.on("exit",() =>{
    const [ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8] = answers;
    const [q1, q2, q3, q4, q5, q6, q7, q8] = questions;
    console.log(`
    
    Thanks for you answers. Here what you answered....

    ${q1}: ${ans1}
    ${q2}: ${ans2}
    ${q3}: ${ans3}
    ${q4}: ${ans4}
    ${q5}: ${ans5}
    ${q6}: ${ans6}
    ${q7}: ${ans7}
    ${q8}: ${ans8}   
    
    `);
});

