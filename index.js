// Code your solutions in this file
function writeCards(names, eventName){
    let arr =[];
    for (let x = 0 ; x < names.length ; x++){
        arr.push("Thank you, " + names[x] + ", for the wonderful surprise gift!");
    }
    return arr;
}

function countdown(count){
    for (let i = count ; i >= 0 ; i--){
        console.log(i)
    }
}