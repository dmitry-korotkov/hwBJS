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
    }
    // код для задачи №1 писать здесь
    // return x;
    return x
}

function getAverageMark(marks){ 
    let sumMark = 0;
    if (!marks.length) {
        return 0 
    }
    if (marks.length > 5) {
        console.log("Внимание! Количество оценок больше 5")
        marks.splice(5);    
    }

    for (let i = 0; i < marks.length; i++) {
        sumMark += marks[i];
    }
    return sumMark / marks.length

    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    console.log(new Date());
    console.log(dateOfBirthday);
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    }
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    //return (new Date() - dateOfBirthday).getFullYear() >= 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    // код для задачи №3 писать здесь
    // return result;
}