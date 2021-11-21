const fs = require("fs");

const md = `
# This is a new file

We can write text to a file with fs.writeline

*fs.readdir
*fs.readFile
*fs.writeLine

`;

fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("File saved");
})