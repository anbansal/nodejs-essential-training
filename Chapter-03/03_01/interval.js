const waitTIme = 3000;
const waitTimeInt = 500;
let currTime = 0;

const incTime = () => {
    currTime += waitTimeInt;
    console.log(`current time is ${currTime/1000} seconds.`)
}
const timeFinished = () => {
    clearInterval(interval);
    console.log("done!!!");
}
console.log(`Waiting for ${waitTIme / 1000} seconds`);
const interval = setInterval(incTime, waitTimeInt);
setTimeout(timeFinished, waitTIme);