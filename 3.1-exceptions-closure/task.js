function parseCount (parseValue) {
    let parse = Number.parseInt(parseValue)
    if (isNaN(parse)) {
        throw new Error("Невалидное значение")
    }
    return parse
}
//console.log(parseCount("ыфва"))

function validateCount (parseValue) {
    //parseCount (parseValue)
    try {
        return parseCount (parseValue)
    } catch(e) {
        return e
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    getPerimeter () {
        return this.a + this.b + this.c
    }
    getArea () {
        let halfP = this.getPerimeter() / 2
        return +Math.sqrt( halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)).toFixed(3)
    }

}
function getTriangle(a,b,c) {
    try {
      return new Triangle(a,b,c);
    } catch {
      return  {
        getArea() {
          return "Ошибка! Треугольник не существует";
        },
        getPerimeter() {
            return "Ошибка! Треугольник не существует";
        }
      }
    }
  }

//let a = new Triangle (3,5,3);
//console.log(a.getPerimeter())
//console.log(a.getArea())
console.log(getTriangle(3,7,3))

