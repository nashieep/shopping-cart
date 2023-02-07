/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = ["strawberry", "Orange", "Cherry"];
console.log(products);
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const fruits = [
   { name: "strawberry", price: 3.99, quantity: 0, productId: 1, image: "strawberry.jpg" },
  { name: "Orange", price: 4.99, quantity: 0, productId: 2, image: "orange.jpg" },
  { name: "Cherry", price: 6.99, quantity: 0, productId: 1000, image: "cherry.jpg" }
  ];
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
/* Declare an empty array named cart to hold the items in the cart */
var cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) { 
  cart.decreaseQuantity(product1.productId);
  cart.decreaseQuantity(product1.productId);
  expect(product1.quantity).toEqual(1);
  expect(cartArr).toEqual([product1]);
};
test ('decrease quantity from 1 to 0 removes item from cart',() => {
     cart.decreaseQuantity(product1.productId);
     expect(product1.quantity).toEqual(0);
     expect(cartArr).toEqual([]);
});
test ('remove 1 item from cart updates quantity to 0 and removes from cart',() => {
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity (productId,) {
  const quantity =products.quantity;
  cart[productId] = 1;

  return (productId.quantity);
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const quantity = products.quantity;
}
  if (products.quantity == 0) {
    cart.splice(productId, 1); 
  }
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  const quantity = cart[productId];
  cart[productId] = 0;
  return(removeProductFromCart(productId));
} 

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  for (let i = 0; i < cartArr.length; i++) {
    let itemTotal = cartArr[i].quantity*cartArr[i].price;
  
  cartSum += itemTotal;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart = [];
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){
  if (amount < 0) {
  return amount;
   } else if (amount > 0) {
    return amount;
   }else {
    return(0);
  }
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter*/
  // currency
}
