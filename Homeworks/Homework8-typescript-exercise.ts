// We are going to build a small TypeScript program that describes a mini online shop. 
// The goal is to represent a customer, their shopping cart, and calculate the total price. 
 
// Steps 
// 1.Create an interface Product with the following fields: 
// name: string  
// price: number  
// category: "food" | "clothes" | "electronics" 
// 2.Create a type Category with the possible categories (food, clothes, electronics) 
// 3.Create an interface Customer with the following fields: 
// name: string   
// email: string 
// cart: Product[] — an array containing the products in the customer’s cart 
// 4. Create two example products (e.g., an apple and a T-shirt). 
// 5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
    name: string;
    price: number;
    category: "food" | "clothes" | "electronics"
}

interface Customer {
    name: string;
    email: string;
    cart: Product[];
}

const apple: Product = {name: "Apple", price: 2, category: "food"};
const tShirt: Product = {name: "T-Shirt", price: 20, category: "clothes" };

// add more products, especially for electronics
const laptop: Product = { name: "Laptop", price: 1200, category: "electronics" };
const mouse: Product = { name: "Mouse", price: 10, category: "electronics" };
const headphones: Product = { name: "Headphones", price: 100, category: "electronics" };
const sandwich: Product = { name: "Sandwich", price: 5, category: "food" };
const hoodie: Product = { name: "Hoodie", price: 75, category: "clothes" };

const products: Product[] = [apple, tShirt];

const customer1: Customer = {
  name: "Miro Stoimenov",
  email: "miro@email.com",
  cart: [apple, tShirt, laptop],
};

// add second customer with custom array and add more products
const customer2: Customer = {
  name: "Maya Stoimenova",
  email: "maya@email.com",
  cart: [sandwich, headphones],
};

// add function displayCart - display cart customer name and products
function displayCart(customer: Customer): void {
  console.log(`${customer.name}'s Cart:`);
  customer.cart.forEach((product) => {
    console.log(`- ${product.name} (${product.category}): $${product.price}`);
  });
}

// add function filterByCategory - receive products and category as parameters and filter the product by given category
function filterByCategory(products: Product[], category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

// add function calculateTotalPrice - receive customer data and combine all product price
function calculateTotalPrice(customer: Customer): number {
  return customer.cart.reduce((total, product) => total + product.price, 0);
}

// hint - customer.cart[0].price
// hint - customer.cart[0].price
// ...
// hint - total=
displayCart(customer1);
console.log(`Total price: $${calculateTotalPrice(customer1)}`);

displayCart(customer2);
console.log(`Total price: $${calculateTotalPrice(customer2)}`);

export{};