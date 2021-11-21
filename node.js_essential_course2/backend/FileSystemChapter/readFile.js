const fs = require("fs");

// Synchronously
// const text = fs.readFileSync("./assets/Readme.md", "utf-8");
// console.log(text);

// Asynchronously
// fs.readFile("./assets/Readme.md", "utf-8", (err, text) => {
//     console.log("Finished reading doc");
//     console.log(text);
// });

fs.readFile("./assets/alex.jpg", (err, img) => {
    if(err){
        console.log(`An error has occurd: ${err.message}`);
        process.exit();
    }
    console.log("Finished binary file");
    console.log(img);
});