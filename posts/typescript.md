---
title: Typescript is actually amazing.
description: My understanding of typescript and how cool it is.
cover_image: https://miro.medium.com/max/4000/1*9eMyWLYOqU5aqBtVoFoi3Q.jpeg
---

For the past few months after graduating, I spent most of the time coding with javascript. I had a lot of fun and learned a lot during the process, and there were downs too, don’t get me wrong, one of those are type errors. They produce an immense amount of frustration and takes time to be fixed.

## TypeScript to the rescue
I heard about typescript a long time ago honestly, and I kept ignoring it. I had lot of misconceptions about it. I thought it was a language on its own, more oriented towards OOP, and it’s like java but for web devs. After watching [Jake Ginnivan](https://www.youtube.com/watch?v=WjQVJssSpt8) talk about how amazing modern typescript is, I was sold and started learning about it immediately. Today I’ll share with you some of the concepts I liked about it.

All that said, I may be off on something and would highly appreciate any criticism. This is my first time deciding to share something with the world, so your help will allow me to improve, Thank you, now let’s move on to the real business.

### What is it tho?
I like to think of typescript as a shield for javascript, you add types and you can capture early those errors in the editor ( I use Vscode. ) and you get also free IntelliSense which boosts your productivity, and It makes working with high-level APIs more efficient.

![Typescript function](https://thepracticaldev.s3.amazonaws.com/i/iqtn5zjjnh1bufl08el9.png)

Here we have a function that takes id as a number and returns the home address as a string. Typescript will make sure you’re respecting the rules each time you call this function. 
This rule applies to variables and classes too.
One sidenote, Typescript infers the types correctly most of the time, so you don’t need to write types for obvious types.
you can learn more about type inference [here](https://www.typescriptlang.org/docs/handbook/type-inference.html).

## Magical features:
### Type Queries:
We know the typeof operator is used in javascript to return the type of its operand, in Typescript the keyword typeof is very different, let’s see how:

```javascript
 const house = { id: 34345, address: " 3B Col, 90000 ",members: 4 }
```
Copy and paste this code in .ts file, you will see that typescript inferred { number, string, number } as the type of the house, and that’s what I want, we can easily get that type with the typeof keyword.

```typescript
const house =  { id: 34345, address: " 3B Col, 90000 ",members: 4 };
type House = typeof house;
```
Nice! now we have a house type that we can use in our code.

### Type Lookups
We all work with objects a lot, let’s say we want to write a function that we pass in an object and key to get a value:

```typescript
function getProp<T>(obj: T ,key: string){
  return obj[key]
}	
```
but the problem with this is typescript can’t figure out the returned value, it will be a type of any and we don’t want that, but there is a way we can use to make sure typescript knows the returned value as well as what type of keys can we pass in.

#### The keyof operator
Let’s stick with the house object and build upon it.

```typescript
const house = { id: 34345, address: " 3B Col, 90000 ",members: 4 }
type House = typeof house;
```

we can type the the keys of an object using keyof

```typescript 
type HouseKeys = keyof House;  // "id" | "address"| "members"
```
if you still find yourself confused by my explanation I highly recommend you to check [Marius Schulz blog about it](https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript).

Let’s rewrite our function now,
```typescript
function getProp<T, P extends keyof T >(obj: T ,key:P ){
  return obj[key]
}	
```
we can pass T\[P\] as returned type but typescript is clever enough to figure that out. Now our returned value type, our key is also typed and we can get sweet IntelliSense as a bonus.

I hope this article helped you in any way, and please leave your opinion about what I should improve on, I’m a little bit anxious about its structure, but I promise I’ll get better at it.

## Learn more about Typescript

[TypeScript Evolution by Marius Schulz](https://mariusschulz.com/blog/series/typescript-evolution).

[TYPESCRIPT: How I Learned To Stop Worrying And Trust The Compiler
](https://www.youtube.com/watch?v=mgTenYbX2Kw)

I'll share more resources once I find them.

