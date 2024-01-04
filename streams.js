const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");
const writeStream2 = fs.createWriteStream("./docs/blog5.txt");

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  console.log(chunk);
  //   console.log(chunk.toString());
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream2);
