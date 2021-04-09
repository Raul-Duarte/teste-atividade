const fs = require("fs");

const fileText = "file.txt"


//Arrow Function

// fs.readFile(fileText,(err, data)=>{
//     if(err){
//         console.log('deu erro')
//     }

//     console.log(data.toString())
// })



//Function

fs.readFile(fileText, function (err, data) {
    if (err) {
        console.log('deu erro')
    }
    console.log(data.toString())
});