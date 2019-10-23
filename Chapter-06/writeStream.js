const fs = require("fs");

const readStreamLI = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8");
const writeStreamLI = fs.createWriteStream("./assets/lorum-ipsumCopy.md","UTF-8")

const writeStream = fs.createWriteStream("./assets/my-file.txt","UTF-8");

readStreamLI.pipe(writeStreamLI);

process.stdin.pipe(writeStream);