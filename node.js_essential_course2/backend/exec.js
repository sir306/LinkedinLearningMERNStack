const cp = require("child_process");

// cp.exec("start http://www.linkedin.com/learning");

// cp.exec("dir", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

cp.exec("node readStream", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});