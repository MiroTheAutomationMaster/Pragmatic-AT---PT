// class declaration
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduction (): void {
       // console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
    }
}

const person1 = new Person("Miro", 38);
person1.introduction(); // Hi, I am Miro and I am 38 years old.
person1.name;
// console.log("person1.name", person1.name)
person1.age;

// readonly access modifier
class ReadonlyPersonData {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    intro(): void {
        // console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
    }
}

const person2 = new ReadonlyPersonData("Miro 2", 25);
// console.log("person2.age", person2.age);
// console.log("person2.name", person2.name);
// person2.age = 20; Cannot assign to 'age' because it is a read-only property.ts(2540)
// person2.name = 'Miro 3'; Cannot assign to 'name' because it is a read-only property.ts(2540)

// private access modifier
class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private displaySecretMssg(): string {
        return "This is a message from private method."

    }

    intro(): void {
        // console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
        // console.log(this.displaySecretMssg());
    }
}

const person3 = new PrivatePersonData("Miro 4", 25);
// person3.name; Property 'name' is private and only accessible within class 'PrivatePersonData'.ts(2341)
// person3.age; Property 'age' is private and only accessible within class 'PrivatePersonData'.ts(2341)
// console.log(person3.intro());
// person3.displaySecretMssg; Property 'displaySecretMssg' is private and only accessible within class 'PrivatePersonData'.ts(2341)

// Class Inheritance
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    intro(): void {
        console.log('Nice to meet you!')
    }

}

class UserDetails extends User {

    constructor(name: string) {
        super(name)
    }

    showDetails(): void {
    console.log(`My name is ${this.name}`)
 }
}

const user = new UserDetails('Miro 5');
console.log("<----->");
console.log(user.name);
user.showDetails();
user.intro();

// protected access modifier

class ProtectedPerson {
//    protected name: string;
//    protected age: number;

   constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
   }

  protected getProtectedData(): string {
    return `Protected name ${this.name} and protected age ${this.age}`
   }
}

const protectedPerson = new ProtectedPerson('Protected Miro', 38)
// protectedPerson.name Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.ts(2445)
// protectedPerson.getProtectedData() Property 'getProtectedData' is protected and only accessible within class 'ProtectedPerson' and its subclasses.ts(2445)

class Student extends ProtectedPerson {

    private grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age)
        this.grade = grade;
    }

    studentIntro(): void {
        console.log(this.getProtectedData());
        console.log(`${this.name} is ${this.age} years old with grade ${this.grade}.`);
    }
}

const student = new Student('Miro 6', 25, 6)
console.log("<--->");
student.studentIntro();
// student.grade Property 'grade' is private and only accessible within class 'Student'.ts(2341)


export {};