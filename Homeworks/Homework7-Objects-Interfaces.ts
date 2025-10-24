interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
};

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
};

const person1: Person = {
  name: "Miro",
  lastName: "Stoimenov",
  age: 38,
  email: "miro.stoimenov@mail.com",
  phoneNumber: +359888123456
};

const person2: PersonInfo = {
  name: "Maya",
  lastName: "Stoimenova",
  age: 37,
  email: "maya.stoimenova@mail.com",
  phoneNumber: +359888654321,
  country: "Bulgaria",
  greeting: function () {
    return `I am, ${this.name} ${this.lastName} from ${this.country}!`;
  }
};

console.log(person1);
console.log(person2.greeting?.());
