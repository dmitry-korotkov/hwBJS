"use strict"
function getResult(a,b,c){
    let x = []
    let d = b ** 2 - 4 * a * c
    if (d > 0 ) {
        let xOne = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
        let xTwo = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
        x.push(xOne)
        x.push(xTwo)
    } else if ( d === 0) {
        let xOne = -b / (2 * a)
        x.push(xOne)
        console.log(x)
    }
    // код для задачи №1 писать здесь
    // return x;
    return x
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}