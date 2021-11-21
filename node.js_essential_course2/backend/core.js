const path = require("path");
const util = require("util");
const { log } = require("util"); // destructuring util down to just log
const v8 = require("v8");
const { getHeapStatistics } = require("v8");
// const dirUploads = path.join(__filename,'www', 'files', 'uploads');
// console.log(dirUploads);
// util.log(path.basename(__filename));
// util.log("^ The name of the current file");
log(getHeapStatistics());