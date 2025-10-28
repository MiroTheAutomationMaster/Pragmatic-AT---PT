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

const products: Product[] = [apple, tShirt];

const customer: Customer = {
    name: "Miro Stoimenov",
    email: "miro@email.com",
    cart: products,
};
// add second customer with custom array and add more products

// add function displayCart - display cart customer name and products
// add function filterByCategory - receive products and category as parameters and filter the product by given category
// add function calculateTotalPrice - receive customer data and combine all product price
// hint - customer.cart[0].price
// hint - customer.cart[0].price
// ...
// hint - total=

export{};