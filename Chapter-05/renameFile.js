const fs = require("fs");

fs.writeFileSync("./storage_files/checkFile1.md",`# Not a new file \n`);
fs.writeFileSync("./storage_files/checkFile2.md", `# Not a new file \n`);

fs.renameSync("./storage_files/checkFile1.md","./storage_files/checkFileData.md")

fs.unlinkSync("./storage_files/checkFileData.md")