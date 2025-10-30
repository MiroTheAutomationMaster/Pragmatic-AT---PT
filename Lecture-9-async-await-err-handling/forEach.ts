// forEach method
const nums: number [] = [10, 20, 30, 40];

nums.forEach((n: number, index: number) => {
   // console.log(`Index ${index}: value ${n}`);
});

// sum nums
let sum: number = 0;

nums.forEach((num: number) => {
    sum = sum + num;
});
// console.log("Sum of nums", sum);

// active users
interface User {
    id: number;
    name: string;
    isActive: boolean;
}

const users: User[] = [
    {id:1, name: "Miro", isActive: true},
    {id:2, name: "Irina", isActive: false},
    {id:3, name: "Tedi", isActive: true},
    {id:4, name: "Vili", isActive: false},
];

let activeIds: number[] = [];

users.forEach((user: User) => {
    if (user.isActive) {
        activeIds.push(user.id)
    }
});

console.log("activeIds", activeIds);

export {}; // it can go without this as it's not showing error