const waittime = 3000;
console.log(`Waiting for ${waittime/1000} seconds`);
const timeFinished = () => console.log("done!!!");
setTimeout(timeFinished,waittime);
