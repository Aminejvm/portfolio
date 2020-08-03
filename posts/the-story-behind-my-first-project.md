---
title: The Story Behind My First Project.
description: A story of how I and my friends built a community.
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/kbvta4uv97melxed1207.jpg
---
Building a project is great. You learn a lot, you make friends, and hopefully, it helps to solve a certain problem for certain people. But behind every project, there is a story of how it comes to reality. Today I'll tell you a story of Gfree ( a gluten-free community ) I built with my friends.
Back in the spring of 2018, we started learning web at my university, it was a fresh air from the algorithms and math. I started experimenting with CSS, a lot of it, my friend noticed my passion and suggested maybe we should do a project together.
Fast forward to the beginning of summer, things weren't going well for me, I had a breakdown over some health issues (till this article only my family knew about it). I was diagnosed with chronic depression, those were sad days. During the first days of recovery, I had a huge urge to learn something, add to that a happy accident happened when [video of Sarah Drasner](https://www.youtube.com/watch?v=ADXX4fmWHbo) popped in my recommendation. I was hooked, that's it web development is my new adventure. I spend July of that year searching for what the big boys in web development using. I came across web frameworks, I almost started Angular but the React framework popularity was so huge to ignore so that's it, React it is. While hanging out with my friend, we agreed that we should start a project. There were a lot of ideas but since I have celiac disease, I convinced him that it has to be something related to the gluten-free world, he agreed.

# First Try

With a bad degree in the design course, and web fundamentals (HTML, CSS, Jquery) and the ambition to learn React and a friend, it was time to build a project. I assigned to my friend to learn firebase. I first started prototyping some interfaces I mean it can't be hard right, little did I know that designing a good interface is a whole another world. It wasn't easy to satisfy my taste when it was influenced by Dribbble designs. So let me show you the first prototypes.

![First Prototype of Home page](https://dev-to-uploads.s3.amazonaws.com/i/whvyzx5sgbja9k3bbnbt.png)

![First Prototype of Recipe Page](https://dev-to-uploads.s3.amazonaws.com/i/fdl53dwckgouyif6o4sn.png)

![First Prototype of Content Page](https://dev-to-uploads.s3.amazonaws.com/i/6h9xpdkbgibeuw9musyw.png)

Everything is screaming for attention, there is no emphasis, colors are so strong for such a community. It's a mess, I realized that summer that I needed to improve my design knowledge and that's exactly what happened. I spent that summer learning the design principals and experimenting. Also, my mental health improved a lot during this time. The medication helped me remove the anxiety and void I felt, it ignited my desire for learning. Gfree has been in the shadows for a few months due to university.

# University.

2018/2019 is my bachelor year, since I'm doing better I had to focus on my studies. I improved a lot, all the stuff I learned during summer gave me huge confidence. Actually it was overconfident. We still discussed Gfree, we decided we should also make users write their stories, their experience. During the end of the first semester holidays, we made another try. This time we decided to jump into code directly. How hard can it be? it's an interface and some dynamic content. [Here is the result.](http://editorbeta101.surge.sh/)

Since I didn't design, things got out of control, it was hard to keep things consistent. Also my overconfident in my React skills drove me blind, there is more to the Javascript world than React.

![Dunning-Kruger effect](https://dev-to-uploads.s3.amazonaws.com/i/224m0lfzcj9ezdmn5vjt.png)

The code became very complex, this was an eye-opening, front-end work isn't easy. It still requires all cs things I learned. It's not just HTML and CSS.

We learned that we need to design the interface, design the system. Create a management framework to follow. It was a lot of work we decided to delay it till we finish university.

During that year I meet a new friend, he's was interested in working with us, and so it was. Also, we all got our computer science bachelor's, good times.

# The building of Gfree.

2020 has been such a year, fortunately, we managed to get a freelance job. We learned a lot and we finally were ready to work on Gfree fulltime.

We designed the system behind Gfree, we made sure we have concise requirements, and the same shared model between the frontend and backend. This wiki came handy in keeping the project consistent.

![Design system index](https://dev-to-uploads.s3.amazonaws.com/i/i0mza2ph53dnr0qrslb4.png)

## UI/UX Design

I and [@dinasso1](https://twitter.com/dinasso1) worked on the UI/UX design. We first started by choosing a color palette. It has to convey calmness for users, that was our main goal.

![Color system](https://dev-to-uploads.s3.amazonaws.com/i/dojc5dsdd2vozgknnnah.png)
In Figma, as naming convention, we chose color+shade so for primary color, we had primary100 -> primary900 and primary is the darkest variation of the color. This came very handy in the development.

For Typography we built a system with [Inter font.](https://fonts.google.com/specimen/Inter)

![Font system](https://dev-to-uploads.s3.amazonaws.com/i/ww6mwvm7e9aqmy1cxl2w.png)

The naming convention in the typography system also came very handy. It made the development of the UI more robust.

This is how the design file made by two newbie designers

![Design file screenshot](https://dev-to-uploads.s3.amazonaws.com/i/88x9put0klu3pqohjg83.png)

I'm proud of the job we have done, it's not perfect and probably never will be. This how we learn, from our imperfections amiright ?

## Stack used

- NextJs
- Styled-components/xstyled
- Typescript
- Redux
- Formik
- SlateJs

## Frontend

One of our website requirements was SEO, and client-side react isn't suitable for that case. We also need Opengraph previews. ***NextJs*** solved those issues, and its routing system made everything super intuitive. NextJs is so awesome it requires its own article ( maybe next one ?).

When it comes to CSS, it depends on preference, we like ***styled-components*** so we used it. On top of it, we used ***xstyled***. It made our life 10 times easier. Remember the naming conventions we had in Design. We could use it directly in styled syntax with ***xstyled***.

```tsx
import {styled} from '@x-styled/styled-components'
const Button = styled.button`
	background-color: primary100; /* This is awesome */
	${h100} /* This how we used our typography system*/
`
```

### State management

For state management, we went with Redux. But if you have used it before, you'll know it has a lot of boilerplate. More code, more things to maintain. Fortunately for us, I've experimented with Rekit before and I loved the way they architected their redux code. A bit of googling led me to the Ducks pattern.

Ducks pattern is a modular way to organize your redux code, it has a few rules.

> *1. MUST export default a function called reducer()
2. MUST export its action creators as functions
3. MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
4. MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library*

You can learn more about it [here](https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7).

While this pattern made reading and managing the code easier, we still needed a way to generate the code as Rekit did.

We tried a code generation tool called Hygen. It did work fine for generating code. But when it comes to updating code, it didn't work. Hygen relies on regular expressions to update the code, it's hard to work with it when you format your code with prettier. It was unpredictable.

So I searched for a way to update the code using AST, here I come across Babel. Babel is huge, I used [this awesome handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md) to get familiar with it. It took a while but I'm proud of learning it.

Learning AST unlocked a lot of new doors for me. I can write a Babel plugin. I can even create my own custom Eslint plugins if needed.

{% github Aminejvm/typescript-redux-generator %}

### Components architecture

Our solution is a bit hybrid, we took what we liked from different concepts.

Atoms define the components that have one and only one task. (Button, Headings, Fields...).

I've made this concept explaining each Layout component.

![Layout components](https://dev-to-uploads.s3.amazonaws.com/i/5vca01z1rkwwyks92yrx.png)
I noticed repeated layouts across many components, I think we could add Patterns (the composition of layouts components ). That for sure will reduce some of the boilerplate.

We try our best to not use margins within non-layout component styles. We only use margin in the Layout components. What may look like a small non-significant change to you, actually removed many undesired CSS bugs.

## Backend

![Backend](https://dev-to-uploads.s3.amazonaws.com/i/lwuc5iv77qgruta9s9bc.png)

Things in the backend were straight forward. Controllers handling database queries. Authorization middleware to handle signing and signup operations. Endpoints handling requests from the frontend.

Stack used in the backend

- NodeJs
- ExpressJs
- PassportJs
- MongoDb
- Jest → For testing.
For DevOps, my friend took care of hosting and file storage solution.

# Lessons Learned

Building a project is no easy task, it requires thoughtful and consistent execution. Trying to cut things off just to speed up has the complete opposite effect, it slows the project drastically. It also leads to technical debt, we learned this the hard way. Hacky solution may meet the requirements now but for sure will introduce many challenges in the future.

Going slow and smooth increase the project speed and reduce the bugs anxiety.

{% twitter 1285990487736725504%}

# What's next for the project and us as developers.

For the project, we need to discuss marketing strategies, we also have many features in mind. This is our learning playground. We will experiment with new features regularly.

For me and my friends, this project allowed us to prove that we can build things. Getting a job after graduation as a junior developer is a hard task, and this pandemic made it even. Hopefully, this project shows our competence and enthusiasm. SOOOO if your company is hiring a React developer I would love to be part of it.

So here is [Gfree](http://gfree.co/). I would love to hear your feedback.