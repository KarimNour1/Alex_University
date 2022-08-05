var fs = require("fs");

fs.appendfile("blank.txt","Hello World!") ,function(err){
    if(err) throw err;
    console.log("Appended");
}