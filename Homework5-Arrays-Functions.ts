// 1. Create an array of strings and add a new element at the end of the array. Log the result.
let dogs: string[] = ["pitbull", "german shepard", "cane corso"];
dogs.push("scottish fold");
console.log("1. Added new element:", dogs);

// 1. Create an array of strings and add a new element at the end of the array. Log the result.
let cats: string[] = ["british shorthair", "main coon", "persian"];
cats.push("scottish fold");
console.log("1. Added new element:", cats);

// 2. Create an array of numbers and remove the first element from the array. Log the result.
let numbers: number[] = [1, 2, 3, 4];
numbers.shift();
console.log("2. Removed first element:", numbers);

// 3. Use the map method to create a new array and divide each number by 2 “num / 2” from [1, 2, 3, 4, 5]. Log the result.
let nums = [1, 2, 3, 4, 5];
let divided = nums.map(num => num / 2);
console.log("3. Divided by 2:", divided);

// 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let values = [3, 7, 1, 9, 12, 4];
let greaterThanFive = values.filter(num => num > 5);
console.log("4. Numbers greater than 5:", greaterThanFive);

// 5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let unsorted = [9, 3, 7, 2, 8, 5];
let sorted = unsorted.sort((a, b) => a - b);
console.log("5. Sorted ascending:", sorted);

// 6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let fruitList = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let firstThree = fruitList.slice(0, 3);
console.log("6. First three elements:", firstThree);

// 7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let transport = ['car', 'bike', 'bus', 'train', 'boat'];
transport.splice(1, 2);
console.log("7. After splice:", transport);

// 8. Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log("8. Largest number:", findLargest(5, 10, 3));

// 9. Write a function “convertToCentimeters” which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 10): number {
  return inches * 2.54;
}
console.log("9. Default inches (10):", convertToCentimeters());
console.log("9. Passed inches (5):", convertToCentimeters(5));

// 10. Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
  if (height !== undefined) {
    return width * height;
  } else {
    return width * width;
  }
}
console.log("10. Rectangle area (4x6):", calculateArea(4, 6));
console.log("10. Square area (5x5):", calculateArea(5));
// PR test: new commit
