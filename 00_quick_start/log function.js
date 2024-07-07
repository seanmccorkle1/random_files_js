var plus=function(a,b){
    return a+b
}


function log({attempt, answer}= {}) {
    return console.log(attempt, ...answer)
}



log({attempt: plus(6, 5), answer: [11, "answer is 11"]})