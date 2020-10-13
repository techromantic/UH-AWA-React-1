# A Reactive World: Advanced Web Applications 2020 

React is a front-end library that helps developers create awesome User Interfaces.

- It is faster than changing the DOM manually using something like JQuery \$(container).append(moreContent) - React renders the DOM based of its own internal representation of page content
- It is component based and composable. An application can manage state at multiple levels, and pass down relevant data to pieces of UI, which can manage their own state.
- Data flows down from parent to children making it hard to create side-effect bugs in the code (where separate or unrelated code effects affects application data) .

## Our Mission Today

Today we'll be sprinting into React, creating a React web application from scratch and integrating it with existing APIs! 

## Prerequistes

It would be very helpful if you knew HTML & JavaScript. You should have a decent idea of how the following programming concepts work.

- Functions
- Objects
- Arrays
- Classes (kind of)

## Lets Get Started

Launch the [project](https://repl.it/@techromantic/DaringUsedModel-1#src/App.js). Create a fork of this project by clicking the project name dropdown at the top left, then clicking fork project. This will allow you to edit the code! Click Run at the top of the screen to launch the example.

## Our AppliCATion

What we want to do is to create a simple application that lists the data out for us to view. I've created a meowing example that you can follow. It uses two data services - a cat facts service, and a cat pictures service. After getting a set of cat facts, it picks a random set, and then renders a cat card for each fact. Each cat card is given a cat fact. The cards are also responsible for retrieving a picture from the cat picture data service which it renders within it!

Click 'Run' at the top of the screen to launch the example. 

By the end of this lesson, you'll be able to create an application that displays data from any of these [sources](https://github.com/public-apis/public-apis)

### Lesson 1: Create React App 

We will now travel back in time so we can see how the application was built from scratch. 
On the left-hand bar, find the 'Version Control' icon and click it. In the list of commits, scroll to the bottom and click 'Revert' - this will allow you to follow along with all the changes. 

You should only be able to see the README.md file - if you haven't, then follow the instructions in 'Lets Get Started'. 

You can either follow the instructions and create the application from scratch yourself, or jump to the next commits in the project to see what files changed. 

Remember, if you jump to commits in the project, any code changes you've made may get lost. If you decide to follow along and build the application from scratch, then make new commits as needed. 

Ask for help if you need it! 

[Create React App]() is an easy way to create a new React application from the command line so you don't have to worry about installing the correct packages and configuring the project, it does it all for you. 

Open up the integrated terminal and run the following commands (read the comments for explanations)

```
    # Tell our package runner to create a react app named "my-app" 
    npx create-react-app my-app
    # Move (cd) into the new directory "my-app" that was created,
    cd my-app
```

You'll see the create-react-app tool create a bunch of files. Let's take a look at the project directory. 

```
    # Folder containing npm packages (react libraries + other stuff)
    > node_modules 
    # Folder containing the webpage (index.html) and other assets 
    > public 
    # Folder containing the React application code 
    > src
    # npm configuration 
    - package.json 
```

We'll be doing most of our work out of the src folder so that'll be the most important. 

Let's look at the files in there. 

There's a few JavaScript files in here
- index.js (Where it all starts)
- App.js (main application)

There's also a few .css files which style the application. 

Don't worry about the other files for now. 

### Exercise 1: Where It All Starts 

Look at the code in index.js 

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

What is index.js doing? 
- Its importing the React libraries & React code (App from './App') (the *.js extension is implied)
- Its using ReactDOM.render method to render the application at the appropriate HTML node

[ReactDOM](https://reactjs.org/docs/react-dom.html#render) is a package included with React that provides DOM specific methods. Its usually only used to attach your React application to an existing wqebpage. 

The ReactDOM.render method has two parameters, first some tags that look like HTML or XML, and secondly the root element selected from the DOM. 

This is the starting point of the application. By telling ReactDOM to render a react component (in this case App.js) in the container, we've created the root ReactComponent instance. 

Open up /public/index.html and look around. 

Do you see where in the HTML our React application is being rendered? 

### Exercise 2: JSX In Action  

Let's open up the React component App.js 

Again we have our imports! The './' signifies we are importing the file in relation to the current file.
```
import React from 'react';
import logo from './logo.svg';
import './App.css';
```

And here's the first React component you'll see. 

```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Its a simple function named App, that returns more of that HTML looking markup. 

This is a React component at its simplest. A React component can be a simple function, and the only requirement is for it to return JSX. 

What is JSX? 

JSX is JavaScriptXML, its what gets rendered, and it allows us to write dynamic markup.

You can write valid HTML in a JSX block and it will be rendered.

This works because React at its core transforms JSX tags to its own representation of the DOM, which allows React to efficiently update the webpage itself. 

Let's see how it look in the browser. 

In your developer console run the following command. 

` npm run start` 

This tells npm to run our build scripts located in package.json  

You'll see that you can visit the application in your browser, check it out. 

Okay now, let's try editing the JSX within App.js 

Try changing some of the text within the tags. Or adding another HTML tag like div and hit save.

What happens? 


### App.css

This is our CSS for the entire project. Anytime we want to use a CSS class, we specify it using the 'className' attribute for the corresponding JSX tag.

### App.js

```sh
import React, {useState, useEffect} from 'react';
import './App.css';
import CatCard from './CatCard';
```

- At the top of the file we'll import everything we need to work with react. Notice we grab React, and two helper hooks from the React library. We also grab a style file, and the cat card file. Simple right? The './' signifies we are importing the file in relation to the current file.

```
function App() {
    ...
    return('<p>whats this?</p>')
}
export default App;
```

- Notice that the entire application is a function. The app function does a whole bunch of stuff, then eventually returns something. That something is what gets rendered. Every React component will render what looks like HTML Markup. This markup is called JSX - JavaScriptXML and allows us to write dynamic markup.

```
  const [catFacts, setCatFacts] = useState([]);
```

- Here's an interesting looking line of logic. This sets up 'state' for our app which is a snapshot of the data. We're usiug a React Hook - which you don't need to understand right now. Just know that the first variable in the array refers to the current piece of state (catFacts), and the second is a function that allows you to change that piece of state by passing in a argument to it.
-

```
  const getCatFacts = () => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          var startIndex = Math.random() * 200;
          setCatFacts(result.all.slice(startIndex,startIndex+5));
        },
        (error) => {
          setCatFacts([]);
        }
      )
  }
```

- We created a function called getCatFacts, which uses fetch (all it does is get data from an API), and after getting the data, it converts it to JSON, and then updates our local state using that state method we just mentioned setCatFacts

```
  useEffect(() => {
    if (catFacts.length == 0) getCatFacts();
  })
```

- Here's another one of those weird 'use' things, this is another hook that allows you to to change local data AFTER the component has rendered. There is a component lifecycle in React, and its important to understand WHEN things are happening. Before or after render? useEffect allows the component to render once and then making changes to the state. When react notices the state has changed, it checks to see if any of the JSX depends on the state - and if it does, it rerenders the component. This allows our application to become interactive. In our case, we allow the component to render, and if catFacts is empty, we call the function which gets AND sets the catFacts.

```
    <div className="App">
      <h3> Welcome to Cat Facts! </h3>
      <div className="cat-facts-container">

          { (catFacts.length == 0) &&
            <p> The cats are sleeping right now... </p>
          }
          { (catFacts.length > 0) &&
            catFacts.map((fact) => <CatCard catFact={fact}/>)
          }
      </div>
    </div>
```

- Here is what is returned by our rendered functions. A few things going on here. Notice the blocks that look suspiciously like if statements, with the &&'s. These blocks can refer to our local state (catFacts) and conditionally render JSX based upon it. We check whether there are cat Facts, if there aren't - we render a simple message, OTHERWISE:
- If there are cat facts, we use our catFacts variable and map over it. map allows us to run a function for every element in an arry. For every fact, we render a CatCard, passing in that fact to each specific card. This value we pass in is called a 'prop'.

### CatCard.js

- A lot of the same things are happening here. Let's explain the new stuff, and I'm sure you can figure out the rest.

```
const CatCard = ({catFact}) => {
```

- Don't be scared of the arrow syntax. This is just another way of writing a function. Notice that an object should be passed in as the only parameter. This object should have a single property called catFact. Remember in the render method of App.js we passed in a catFact property? This refers to that. For the specific case of this data, this catFact happens to be another object. You can console.log() the object to understand its structure.

```
  return (
    <div className="cat-card-root">

      <img className="cat-card-img" src={(catPic) ? catPic : 'https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif'}/>
      <p> {catFact.text} </p>

    </div>
  )
```

- Okay so here's the final part. We're rendering a cat-card here. You can see we make references to the catPic. What is catPic referring to? Where do we set it? It looks like we're using a ternary to either render the catPic, or something else. Maybe a cat loading gif? Also within the p tag we're rendering the text property of the cat fact. What could this be?

# Your Assignment

Now you have enough to go off of to create your own data-drive applications. Here is your assignment.

- Create an application which uses **2** APIs to retrieve data, and then find a way to display them together. You will need to work with arrays, objects, and functions that manipulate those structures to get something working. Use the list of public APIs, and find an API that doesn't need an API key to make it easier.
