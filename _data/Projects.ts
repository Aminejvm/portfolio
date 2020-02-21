interface Project {
  heading: string;
  description: string;
  img: string;
}

const Projects: Project[] = [
  {
    heading: "Linear Optimization techniques.",
    description:
      " implemented the Simplex optimization algorithm using C,  on a  production problem. It was my first opportunity to fully understand the power of optimization techniques, such techniques can allow us to minimize the loose cost, and be efficient with our resources.  ",
    img:
      "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    heading: "Intrusion detection System.",
    description:
      "Having no knowledge about machine learning, this was a huge challenge for me with close deadlines. I had to manage my time, into research to get a glimpse of the field, understanding the data, and building the model. Two months in I managed to get a trained model that was able to detect intrusion in the validation dataset with 89%. I’ve learned a lot in this project, had the opportunity to apply the maths I acquired from the university, and the opportunity to work with amazing people in the network security field. I was managed by AMENDIS information system product manager, this was a huge win for me to see how agile works and how things work in the corporate world. ",
    img:
      "https://images.unsplash.com/photo-1519810755548-39cd217da494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    heading: "Bookstore with CMS from scratch.",
    description:
      "This is the first freelance project I worked with a friend on, I was responsible for front-end development. I implemented a responsive application, and dashboard to manage the products in the app. I used next.js alongside Redux to get both the benefits of the flux architecture and the server-side rendering speed. The client was happy with the quality of the work we did. This was my first project after graduating and I’m proud of it. ",
    img:
      "https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    heading: "Gfree, Gluten free community.",
    description:
      "This is the flagship product that I keep delaying, I’m trying to get it perfect. We can also say this is my sandbox where I try concepts and new technologies before I add them to my personal stack. The idea behind this app is to create a community where gluten-free diet people can share their stories and ideas with the world easily. The app has two editors one for stories and one for recipes, both done. But still, I have decided on the date of publication yet.  ",
    img:
      "https://images.unsplash.com/photo-1496175723517-7dacd7a3f3c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    heading: "Local Ecommerce platform.",
    description:
      "After working on the bookstore, we noticed that they’re many clients locally that want to elevate their business to the online world. So I and my friends decided to build an accessible platform for those clients where they can sell their products.  ",
    img:
      "https://images.unsplash.com/photo-1481056447409-db8232bd2321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

export default Projects;
