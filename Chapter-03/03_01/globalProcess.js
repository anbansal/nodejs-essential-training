const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greetings = grab("--greeting");
const user = grab("--user");

console.log(`${greetings} ${user}`);