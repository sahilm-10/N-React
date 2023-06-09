import React from "react";
import ReactDOM  from "react-dom/client";
const heading = React.createElement(
    "h1",
    {
        id:"title",
        key:"h1"
    },
    "Heading 1"
);
// const heading2 = React.createElement(
//     "h2",
//     {
//         id:"title2",
//         key:"h2"
//     },
//     "Heading 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id:"container"
//     },
//     [heading,heading2]
// );

const heading2 = <h1 id="heading2" key="h2">Heading 2</h1>

// Functional Component.

const Title = () =>{
    return(
        <div>
            {heading2}
            <h1>This is a h1</h1>
        </div>
    );
};

const Title2 =()=>(
    <div>
        <h2>This is a h2</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title/>);