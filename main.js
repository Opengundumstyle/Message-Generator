var fs=require('fs');
var text=fs.readFileSync("./pick_up_lines.txt",'utf-8');
var textByLine = text.split('\n')

console.log(textByLine);