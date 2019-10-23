const questions = [
    "How are you",
    "What did you do today",
    "What is your favourite color",
    "What is your hobby",
    "Where are you coming from",
    "Where are you going",
    "What is your background"
]

const ask = (i = 0) => {
    process.stdout.write(`\n${questions[i]}\n`);
}


ask(process.argv[2]);
