const connectA = true;
const urlA = "/flie1.json";
const urlA2 = "/flie2.json";
const urlA3 = "/flie3.json";
const urlA4 = "/flie4.json";

function downloading(url) {
  return new Promise(function (res, rej) {
    console.log("Downloading...");
    setTimeout(() => {
      if (connectA) {
        res(`Download Completed ${url}`);
      } else {
        rej(`Download Failed ${url}`);
      }
    }, 1000);
  });
}
async function start() {
  console.log(await downloading(urlA));
  console.log(await downloading(urlA2));
  console.log(await downloading(urlA3));
  console.log(await downloading(urlA4));
}
start();
