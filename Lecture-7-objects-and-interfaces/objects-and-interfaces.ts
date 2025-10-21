// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

// Object declaration
const car = {
    type: "Mercedes",
    model: "S class",
    color: "black",
    horsePower: 550,
};

// Interface person object
interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string;
}

// console.log(car);

// Object with method and array value
const person ={
    name: "Miro",
    lastName: "Stoimenov",
    address: "Sofia",
    age: 38,
    hobbies: ["badminton", "cycling"],
    greeting: function () {
        return "Hello! My name is Miro.";
    },
};
// console.log(person);

// Properties access

// console.log (person.name);
// console.log (person.age);
// console.log (person.hobbies);


person.name;
person.age;
person["address"];
// console.log(person.greeting());

person.greeting();
person["greeting"]();

// Properties Redeclaration
person.age = 40;
// console.log(person);

// person = {
//    age: 30;
//    name: "Miro",
//    lastName: "Stoimenov"
// }

// Explicit Object type
const mouse: {name: string, favFood: string, age: number} = {
    name: "Jerry",
    favFood: "cheese",
    age: 2,
};

// Interfaces - optional parameters, read only and string literals

interface User {
    name: string;
    readonly email: string;
    // string literals
    role: "user" | "admin" | "superadmin" | "superuser";
    // optional parameter
    job?: string;
    password?: string | number;
    location?: string;
}

const user: User = {
    name: "Tom",
    email: "tom@mail.com",
    role: "superadmin",
    location: "Bulgaria",
    job: "QA",
    
};
user.password = 123456;
// console.log(user);

const secondUser: User = {
    name: "Tom",
    email: "tom@mail.com",
    role: "superuser",
    job: "QA",
};

interface UserPermissions extends User {
    permissions: string;

}

const thirdUser: UserPermissions = {
    name: "Tom",
    email: "tom@mail.com",
    role: "superuser",
    job: "QA",
    permissions: "denied",
};