const fs = require("fs");

const writeStream = fs.createWriteStream("./myFile.txt", "utf-8");
const readStream = fs.createReadStream("./lorum-ipsum.md", "utf-8");

// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

// readStream.on("data", data => {
//     writeStream.write(data);
// });

// process.stdin.pipe(writeStream);

readStream.pipe(writeStream);