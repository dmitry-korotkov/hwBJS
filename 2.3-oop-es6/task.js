class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = state,
        this.type = type
    }
    fix() {
        this.state = this.state * 1.5;
        if (this.state > 100) {
            this.state = 100
        }

    }
    set state(num) {
        if (num < 0) {
            this.state = 0 
        }
        if (num > 100) {
            this.state = 100
        }
        this._state = num
    }
    get state() {
        return this._state
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//console.log(sherlock)
//console.log(sherlock.releaseDate); //2019
//console.log(sherlock.state); //100
sherlock.fix();
//console.log(sherlock.state); //100
sherlock.state = 50;
///console.log(sherlock.state) // 50

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = "magazine") {
        super(name, releaseDate, pagesCount, state, type)
        //this.type = "magazine"
    }
}

const murzilka = new Magazine("murzilka", 2021, 108);
//console.log(murzilka)
//console.log(murzilka.state)

class Book extends Magazine {
    constructor(author, name, releaseDate, pagesCount, state, type = "book") {
        super(name, releaseDate, pagesCount, state, type);
        //this.type = "book"
        this.author = author
    }
}
const book = new Book("Аркадий и Борис Стругацкие","Пикник на обочине", 1972, 168);
//console.log(book)
//console.log(book.type)

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
        super(author, name, releaseDate, pagesCount, state, type)
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state, type)
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "detective") {
        super(author, name, releaseDate, pagesCount, state, type)
    }
}

class Library {
    constructor(name) {
        this.name = name,
        this.books = []
    }
    addBook(book) {
       if (book.state > 30) {
           this.books.push(book)
       }    
    }
    findBookBy(type, value) {
        //console.log(this.books) //массив
        /*
        for (let i = 0; i < this.books.length; i++) {
            //console.log(this.books[i])//перебор массива
            if (this.books[i][type] === value) {
                return this.books[i]
            }
        }
        return null
        */
        let arr = this.books.filter(function (book) {
            return book[type] === value
        })
        return arr.length === 0 ? null : arr[0]
    }
    giveBookByName(bookName) {
        /*
        let arr = this.books.map(function(book) {
            return book;
        });
        
        for (let i = 0; i < arr.length; i++) {
            //console.log(arr[i])//перебор массива
            if (arr[i].name === bookName) {
                this.books.splice(i,1)
                return arr[i]            
            }
        return null    
        }
        */
        let arr = this.books.map(function(book) {
            return book;
        });
        if (arr.findIndex(book => book.name === bookName) > -1) {
            this.books.splice(arr.findIndex(book => book.name === bookName),1)
            return arr[arr.findIndex(book => book.name === bookName)];
        }
        return null
    }
}
const library = new Library("library")
library.addBook(murzilka)
library.addBook(book)
library.addBook(sherlock)
//console.log(library)
library.findBookBy();
//console.log(library.findBookBy("name", "Властелин колец"))
//console.log(library.findBookBy("releaseDate", 2021))
//console.log(library.giveBookByName("murzilka"));
//console.log("Количество книг после выдачи: " + library.books.length);


class StudentLog {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    addGrade(grade, subject) {
        if (grade > 0 && grade < 6) {
            if (this[subject] === undefined) {
                this[subject] = []
                this[subject].push(grade)
            } else {
                this[subject].push(grade)
            }
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
        }
        return this[subject].length
    }
    getAverageBySubject(subject) {
        function getAverage(marks) {
            let sum = marks.reduce(function (num, currient) {
                return num + currient
            },0)
            return sum / marks.length
        }
        if (this[subject] === undefined) {
            return 0
        } else {
            return getAverage(this[subject])
        }
    }
    getTotalAverage() {
        let count = 0
        let sum = 0
        for (let mark in this) {
            if (Array.isArray(this[mark])) {
                //console.log(this[mark])
                count += this[mark].length
                sum += this[mark].reduce(function (num, currient) {
                    return num + currient
                },0)
            }
        }
        console.log(count)
        return sum / count
    }
}

const log = new StudentLog('Олег Никифоров')
log.addGrade(4, "rus")
log.addGrade(3, "eng")
log.addGrade(5, "eng")
console.log(log)
console.log(log.addGrade(2, "eng"))
console.log(log.addGrade(6, "eng"))
console.log(log.getAverageBySubject("en"))
console.log(log.getAverageBySubject("eng"))
console.log(log.getTotalAverage())
