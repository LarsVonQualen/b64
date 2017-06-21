var fs = require("fs");

function encode(data) {
  return new Buffer(data, 'binary').toString('base64');
}

function decode(data) {
  return new Buffer(data, 'base64').toString('binary');
}

function main() {
  try {
    switch (process.argv[2]) {
      case "encode":
        console.log("Encoding " + process.argv[3] + " to base64.");
        fs.readFile(process.argv[3], function (err, data) {
          if (err) {
            throw err
          } else {
            fs.writeFile(process.argv[3] + ".base64", encode(data), function (err) {
              if (err) {
                throw err;
              } else {
                return;
              }
            });
          }
        });
        console.log("Done! Encoded file into: " + process.argv[3] + ".base64");
        break;
      case "decode":
        console.log("Decoding " + process.argv[3] + " to binary.");
        fs.readFile(process.argv[3], function (err, data) {
          if (err) {
            throw err
          } else {
            fs.writeFile(process.argv[3] + ".bin", decode(data), function (err) {
              if (err) {
                throw err;
              } else {
                return;
              }
            });
          }
        });
        console.log("Done! Decoded file into: " + process.argv[3] + ".bin");
        break;
      default:
        console.log("Usage");
        console.log("node b64.js encode/decode some/path/to.file");
        break;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = main;