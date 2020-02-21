---
title: Pure Functions with Typescript
description: How Typescript helps us write better functions.
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/kzb9ybqc90dx64je6xzz.png
---

I’ll use this article to illustrate how Typescript can hold us accountable for writing pure functions.
for this purpose Let’s introduce the following types for a small cart system:
```typescript
type Product = {
 title: string;
 quantity: number;
 price: number;
}
type Cart = {
 totalPrice: number;
 products: Product[];
}
```
# What is a function
In programming, a function encapsulates a chunk of code to do a specific task. when a function is called, the javascript engine creates a new execution context and starts to execute any code inside, Thus a function is a mini-program. 
Why we need pure functions?
so we know that functions are mini-programs, wouldn’t it be nice if our programs were reliable, always working as intended. Pure functions give us these benefits, they assure consistency across the program, also since for the same inputs it will return the same outputs, this allows easily to memoize them. If you want to learn more about its benefits I highly recommend you checking [Alvin Alexandr post](https://alvinalexander.com/scala/fp-book/benefits-of-pure-functions).
## Pure Functions must return a value
Our pure function should always return a value, this includes ‘undefined’, other ways it will be a procedure. let’s use an example to better understand
```typescript
function checkQuantity(product:Product):void{
 if(product.quantity > 0){
   console.log(true)
 }else{
   console.log(false)
 }
}
```
This a function that takes product as an argument and returns nothing, but it logs to console the value. 
To make this function pure, we need to return a value Typescript will help us make sure we do that.
Immediately after changing the return value to “boolean” Typescript is angry at us that we didn’t return anything. so Let’s fix it

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/7wzkeljnl2kan7kkqvb6.PNG)

Even after returning in the first condition, Typescript doesn’t take that for an answer so w need to make sure it returns a value in every condition.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/q6cuzgx7e4q6ny2a3mar.PNG)

now that we fixed it, Typescript is happy, and we good our function is pure but still, something is missing.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/qvp7cduk35a2vhwzu08n.PNG)

## Function Naming Semantics
To make our function comprehensible, it should have a name that describes its purpose, for our function checkQuantity doesn’t really mean anything, the purpose of our function is to see if a product has any quantity left. A proper name is to check would be isQuantityNotEmpty but that’s too specific it would be nice if we adjust our function and name it isQuantityEmpty. Okay, let’s clean our function.

```typescript
  const isQuantityEmpty = ( product:Product ):boolean => product.quantity === 0
```

Our function now is now and pure, and Typescript makes using it even more fun, it describes the input and output.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/i2dp8ftcsbaw2bgitiap.PNG)

## Side Effects
To make it clear side effects are cool, to make a program actually usable there has to be a side-effect. As cool as it is, it’s hard to track its behavior, and we said pure functions got consistent behavior, first, we need to understand what is a side-effect.
A side-effect is a function that interacts with the external world, writing to a database, changing the value of variable outside of its context, logging to console, changing the dom…
But using a constant outside of a function is not a side-effect, since a constant is a value that won’t change, and constant are used all over the place in math, so why can’t we use them.
We can use the keyword const to assure that primitives won’t change its value, but an object can change and that’s a problem, we need to find a way to make sure it never changes and this is where Typescript shine again, let’s see how to make objects constants.

Using const assertions, we can make sure that the const won’t ever change no matter what its value is.
```typescript 
//Objects
const product: Product = {
	title: “Awesome Car”,
	quantity: 32,
	price: 2990
} as const
product.title = "Awesome Camera"
/**
* Following error is printed
* Cannot assign to 'title' because it is a read-only property.
*/

product.currency = "USD"
/**
* Property 'currency' does not exist on type 'Product'
*/
```
This can also apply to arrays as well.
The takeaway from this section is our pure function shouldn’t have side-effects otherwise, it’s not pure anymore.
