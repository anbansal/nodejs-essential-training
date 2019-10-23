const waitTime = 5000;
const waitTimeInt = 500;
let currTime = 0;

const incTime = () => {
    currTime += waitTimeInt;
    const p = Math.floor((currTime/waitTime) *100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting......${p}%`)
}
const timeFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done!!!");
}
console.log(`Waiting for ${waitTime / 1000} seconds`);
const interval = setInterval(incTime, waitTimeInt);
setTimeout(timeFinished, waitTime);