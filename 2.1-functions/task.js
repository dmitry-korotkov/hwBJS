function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;
  let roots = [];
  if (D < 0) {
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    roots.push(x1);
  } else {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    roots.push(x1);
    roots.push(x2);
  }
  return { D, roots };
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}c`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (!result.roots.length) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  }
}
/*
function getAverageScore(data) {
    let obj = {}
    let average = []
    if ( !Object.keys(data).length ) {
        obj.average = 0;
    }
    for( let study in data) {
        obj[study] = getAverageMark(data[study])
    }
    for (let mark in obj) {
        average.push(obj[mark])
    }
    obj.average = getAverageMark(average)
    return obj
  }
  */
function getAverageScore(data) {
  let result = {};
  if (!Object.keys(data).length) {
    return { average: 0 };
  }
  let sum = 0;
  let count = 0;
  for (let subject in data) {
    let value = getAverageMark(data[subject]);
    sum += value;
    count++;
    result[subject] = value;
  }
  result.average = sum / count;
  return result;
}
function getAverageMark(marks) {
  if (!marks.length) {
    return 0;
  }
  let sum = 0;
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    count++;
  }
  return sum / count;
}
let data = {
  algebra: [4, 5, 5, 4],
  geometry: [2, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 5],
  english: [4, 4, 3, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4],
};
let data1 = {};

console.log(getAverageScore(data));
console.log(getAverageScore(data1));

function getDecodedValue(secret) {
  return secret ? 'Эмильо' : 'Родриго';
}

function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb),
  };
}

console.log(getDecodedValue(1));
console.log(getDecodedValue(0));
console.log(getPersonData({ aaa: 1, bbb: 0 }));
