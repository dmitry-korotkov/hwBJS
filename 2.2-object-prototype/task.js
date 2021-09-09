//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function () {
    let a = this.toLowerCase().split(' ').join('')
    let b = "";
    for (let i = a.length - 1; i >= 0; i--) {
        b += a[i]
    } 
    return a === b
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0
    }
    let sum = 0
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    let roundedAverage = sum / marks.length
    return Math.round(roundedAverage)
}

function checkBirthday(birthday) {
    let date  = new Date(birthday)
    let dateNow = Number(new Date())
    let birthdayUnix = Number(new Date(date ))
    verdict = dateNow - birthdayUnix
    let age = verdict / 1000 / 3600 / 24 / 365
    if (age > 18 ) {
        return true
    }
}