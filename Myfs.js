const fs = require("fs");
//readflie
const data = fs.readFileSync("myflie/data.txt", "utf8");

console.log(data);
//writeflie

const writeflie = `This is NodeJs \n ${data} \n ${new Date()}`;
fs.writeFileSync("myflie/datawrite.txt", writeflie);
console.log(writeflie);
