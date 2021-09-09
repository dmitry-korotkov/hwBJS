"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    let p = parseInt(percent);
    let c = parseInt(contribution);
    let a = parseInt(amount);
    let d = date.getFullYear() * 12 + date.getMonth()
    let lostD = new Date().getFullYear() * 12 + new Date().getMonth();
    
    if (!p || (p < 0)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
    } else if (c === NaN || c === "" || (c < 0) || typeof contribution === 'object' ) {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`
    } else if (!a || (a < 0)) {
        return  `Параметр "Общая стоимость" содержит неправильное значение ${amount}`
    }
    let n = (11-new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) - 1)*12 + (date.getMonth() + 1)
    console.log(d)
    console.log(lostD)
    console.log(d -lostD)
    console.log(n)

    if(d <= lostD) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${ date.toLocaleString() }`
    }
    
    let s = a - c;
	p = p/1200;
	let paymentPerMonth = s*(p+p/((Math.pow((1+p),n))-1));
	let payment = (paymentPerMonth*n).toFixed(2);
	payment = +payment;
    if (payment < 0) {
        return 0
    }
  return payment;
    // код для задачи №1 писать здесь
    // return totalAmount;
}



function getGreeting(name) {
    if (!name) {
       return `Привет, мир! Меня зовут Аноним.`
    }
    return `Привет, мир! Меня зовут ${name}.`
    // код для задачи №2 писать здесь
    // return greeting;
}