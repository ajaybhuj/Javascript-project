new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task called");
    resolve();
  }, 1000);
}).then(function () {
  console.log("prmised consumed");
});
