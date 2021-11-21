const cp = require("child_process");

const questionApp = cp.spawn("node", ["question.js"]);

questionApp.stdin.write("nick \n");
questionApp.stdin.write("chch \n");
questionApp.stdin.write("nothing \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`Question App process exited`);
});