const fs = require("fs");

console.log("started reading files");
// Synchronous
//const files = fs.readdirSync("./assets"); 
// console.log("complete");
// console.log(files);

// Asynchronous
const files = fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("complete");
    console.log(files);
});
