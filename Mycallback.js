const url1 = "/file1.json";
const url2 = "/file2.json";

function download(url, callback) {
  console.log(`downloading ${url}`);
  setTimeout(() => {
    callback(url);
  }, 3000);
}
download(url1, function (result) {
  console.log(`${result} Download Completed`);
  download(url2, function (result) {
    console.log(`${result} Download Completed`);
  });
});
