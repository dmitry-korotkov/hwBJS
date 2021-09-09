/*
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
console.log(weapons)

function getNames() {
    return weapons.map(weapon => weapon.name)
}
console.log( getNames())

function getCountReliableWeapons(durability) {
    return weapons.filter(weapon => weapon.durability > durability).length
}

console.log(getCountReliableWeapons(200))

function hasReliableWeapons(durability) {
    return  weapons.some(weapon => weapon.durability > durability)
}

console.log(hasReliableWeapons(900))

function getReliableWeaponsNames(durability) {
    return weapons
    .filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name)
}

console.log(getReliableWeaponsNames(200))

function getTotalDamage() {
    let sum = 0
    weapons.forEach(weapon => sum += weapon.attack)
    return sum
    //return weapons.reduce((acc, weapon, index)=> acc + weapon.attack , 0)    
}
console.log(getTotalDamage())

function getValuestCountToSumValues(array, sumVal) {
    let arr = []
    let sum = 0
    array.forEach(num => {
        sum +=num
        if (sum < sumVal) {
            arr.push(num)
        }
    })
    return arr.length + 1

}

console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20))
*/
//Задача 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  //console.log(new Date().getTime())
  //console.log(e)
  while (new Date().getTime() <= e) {
    //console.log(5)
  }
}

function sum(...args) {
  //console.log(args)
  // Замедление на половину секунды.
  sleep(0); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  /*
    let i = -1
    if (arr1.length === arr2.length) {
        return arr1.every(num => {
            i++
            //console.log(i)
            return num === arr2[i]  
        })
    } else {
        return false
    }
    */
  return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}
/*
function memorize(fn, limit) {
    let memory = []
    //console.log(memory)
    //
    return function (...args) {
        let findResult = memory.find(obj => compareArrays(obj.args,args))
        if(findResult !== undefined) {
            return findResult.result
        } 
        memory.push({args: args, result: fn(...args)})
        if (memory.length > limit) {
            memory.shift();
        }
        return fn(...args)    
    }
}
*/

function memorize(fn, limit) {
  let memory = [];
  //console.log(memory)
  //
  return function (...args) {
    const funcArgs = arguments;
    const findResult = memory.find((obj) => compareArrays(obj.args, funcArgs));
    if (findResult) {
      return findResult.result;
    }

    let fnResult = fn(...args);
    const resultObject = {
      args: Array.from(arguments),
      result: fnResult,
    };
    memory.push(resultObject);
    if (memory.length > limit) {
      memory.shift();
    }
    return fnResult;
  };
}

const mSum = memorize(sum, 5);
//console.log(mSum)
//console.log(mSum(3,4))
//console.log(mSum(4,3))
//console.log(mSum(4,3))

//Задача 3

const arr = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3],
  [1, 2],
  [9, 5, 2, 4],
  [4, 4],
  [4, 4],
  [1, 2, 3],
  [4, 6, 6],
  [3, 3, 5],
];

function testCase(testFunction, timerName) {
  console.time(timerName);

  for (let i = 0; i < 100; i++) {
    arr.forEach((arrNum) => testFunction(...arrNum));
  }

  for (let i = 0; i <= 50; i++) {
    testFunction.apply(this, arr);
  }

  console.timeEnd(timerName);
}

testCase(mSum, 'mSum');
testCase(sum, 'sum');
