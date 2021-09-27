
// conert sentences from text file into array
var fs=require('fs');
var text=fs.readFileSync("./pick_up_lines.txt",'utf-8');
var textByLine = text.split('\n');


const pickRandomLines=(pickupLines)=>{
    let ranArry=[];
    let i=1;
    while(i<5){
    ranArry.push(pickupLines[Math.floor(Math.random()*pickupLines.length)])
    i++
        }
    return ranArry;

};
    


console.log(pickRandomLines(textByLine))

