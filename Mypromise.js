const connect = true;
const urlP = "/flie1.json";
const urlP2 = "/flie2.json";
const urlP3 = "/flie3.json";
const urlP4 = "/flie4.json";

function downloading(url) {
  return new Promise(function (res, rej) {
    console.log("Downloading...");
    setTimeout(() => {
      if (connect) {
        res(`Download Completed ${url}`);
      } else {
        rej(`Download Failed ${url}`);
      }
    }, 1000);
  });
}
downloading(urlP)
  .then((result) => {
    console.log(result);
    return downloading(urlP2);
  })
  .then((result) => {
    console.log(result);
    return downloading(urlP3);
  })
  .then((result) => {
    console.log(result);
    return downloading(urlP4);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
