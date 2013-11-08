var fs = require("fs");

function main() {
    try {
        fs.readFile(process.argv[2], function (err, data) {
            if (err) {
                throw err
            } else {
                fs.writeFile(process.argv[2] + ".base64", new Buffer(data, 'binary').toString('base64'), function (err) {
                    if (err) {
                        throw err;
                    } else {
                        return;
                    }
                });
            }
        });
    } catch (e) {
        console.log(e);
    }    
};

main();