var x = new Promise((resolve, reject) => {
  let age = 22;
  if (age >= 18) {
    resolve("You can vote");
  } else {
    reject("You can't vote");
  }
});

x.then((message) => {
  console.log("Check Successful" + " " + message);
}).catch((message) => {
  console.log("Check unsuccesful" + " " + message);
});
