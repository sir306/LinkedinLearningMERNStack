const fs = require("fs");

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

// fs.renameSync("./storage-files", "./storage");
fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }

    console.log("./storage directory removed");
});
