const { readFile, writeFile } = require('fs'); // Corrected function names: `read` to `readFile` and `write` to `writeFile`
const path = require('path');

const filepath = path.join('subfolder','mama.txt'); // Corrected the path joining
console.log(filepath);
const { readFileSync } = require('fs');
readFile(filepath,'utf8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(res)
})

writeFile(
    path.join('subfolder','manis.txt'),
    '\nHey there is am using call back function',
    {flag: 'a'},
    (err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("Files written successfully")
    }
)
