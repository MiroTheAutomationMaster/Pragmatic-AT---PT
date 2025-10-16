// arrays declaration
let numsArray: number[] = [1,2,3,4];
let stringsArray: string [] = ["Miro", "Irina", "Tedi", "Vili"];
let combinedArray: (string | number) [] = [1, "Miro", "Vili", 2];

// access element by index
stringsArray[0] // Miro
stringsArray[1] // Irina
combinedArray[2] // Vili
// console.log(stringsArray[0]);
// console.log(stringsArray[1]);
// console.log(combinedArray[2]);

// access array length
numsArray.length;

// method map or map method
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringsArray.map((currName: string) => `Hello ${currName}`)
let checkTypeOf = combinedArray.map((element: number | string) => {
  if (typeof element === "number") {
     return element + 5;
  } else {
    return `Welcome ${element}`;
  }
});
// console.log(multiplyNums);
// console.log(mapNames);
// console.log(checkTypeOf);

// method filter
let positiveNums: number[] = [2, 3, 4, 5, 6];
let filteredArr: number[] = positiveNums.filter((num: number) => num < 4);
// console.log("filteredArr", filteredArr);

// method sort
let sortNums: number[] = [100, 2, 30, 5, 40, 6];
let sortedResult = sortNums.sort((a: number, b: number) => a - b);
// console.log(sortedResult);

// method push
sortedResult.push(200);
// console.log(sortedResult);

// method pop
sortedResult.pop();
// console.log(sortedResult);

// method shift
sortedResult.shift();
// console.log(sortedResult);

// method unshift
sortedResult.unshift(1);
// console.log(sortedResult);

