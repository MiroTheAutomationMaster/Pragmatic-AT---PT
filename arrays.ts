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
})
//console.log(multiplyNums);
// console.log(mapNames);
console.log(checkTypeOf);
