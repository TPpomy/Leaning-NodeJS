const fs = require("fs");
//readflie
const data = fs.readFileSync("myflie/data.txt", "utf8");
console.log(data);
//writeflie

const writeflie = `This is NodeJs \n ${data} \n ${new Date()}`;
/*fs.writeFileSync("myflie/datawrite.txt", writeflie);
console.log(writeflie);*/
console.log("/////////////////// This is fs Synchronous ///////////////////");

/////////////////////////////////////////fs Synchronous

fs.readFile("myflie/data.txt", "utf8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
  fs.writeFile("myflie/dataoutput.txt", writeflie, (err) => {
    if (err) return console.log(err);
  });
});
