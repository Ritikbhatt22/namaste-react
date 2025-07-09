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
*/

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ])
]);


const heading = React.createElement(
    "h1", 
    {id:"heading"}, // it gives attribute to the tag 
    "Hello World from react!"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);