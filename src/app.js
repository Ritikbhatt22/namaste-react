/*
    <div>
        <div id ="child1">
            <h1></h1>
            <h2></h2>
        </div>
        <div id= "child2">
            <h1></h1>
            <h2></h2>
        </div>
    </div>
import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "I am an h1 tag"),
    React.createElement("h2", { key: "h2-1" }, "I am an h2 tag")
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I am an h1 tag"),
    React.createElement("h2", { key: "h2-2" }, "I am an h2 tag")
  ])
]);


// const heading = React.createElement(
//     "h1", 
//     {id:"heading"}, // it gives attribute to the tag 
//     "Hello World from react!"
// );
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/
/*
import React from 'react';
import ReactDOM from 'react-dom/client';


// const heading = React.createElement("h1", {id:"parent"}, "Hello from react People animals ");
const heading = (<h1 className = "parent" 
tabIndex="1">Hello from react</h1>);

const Title = () => {
    return <div id ="container-1">
                <h1>Hello My Dear fellas </h1>
            </div>
}

const number = 1000;
const HeadingComponent = () =>{
    return <div id ="container">
                <Title/>
                {Title()}
                <h1>{number}</h1>
                <h1>This is functional component </h1>
            </div>
}

*/



/*
------------------------------Actual Implementation -------------------------------------------
------------------------------Upper Version Learning ------------------------------------------
Header
-logo
-Nav items


Body
-Search
-Resturant Container
--Resturent Card
---image,ResturantName, Rating,Cusines, deliveryTime
Footer
- Copyrithy
-Adreess
-Contact
*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Outlet   } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
const AppLayout = () =>{
    return (
        <div className = "app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
       {
          path : '/',
          element : <Body />
        },
        {
          path : '/about',
          element : <About />
        },
        {
          path : '/contact',
          element : <Contact />
        },
        {
          path : '/resturant/:resID',
          element : <ResturantMenu />
        },
    ],
    errorElement : <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


