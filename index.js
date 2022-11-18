const { default: normalizeOpts } = require("@babel/core/lib/transformation/normalize-opts");

function writeCards(names, eventName ){
    const newWriteCards = []
    for(let n = 0; n<names.length; n++){
        newWriteCards.push(`Thank you, ${names[n]}, for the wonderful ${eventName} gift!`);
        debugger;
    } 
    return newWriteCards;
}


writeCards(["Ada", "Brendan", "Ali"], "birthday")

function countDown(originalNumber){
    while (originalNumber>=0){
        console.log(originalNumber--)
    }
}   

countDown(10)