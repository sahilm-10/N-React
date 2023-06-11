import React from "react";
import ReactDOM  from "react-dom/client";
/*
        Planning for UI layout
        Header
            -Logo
            - Nav Items (Right side)
            - Cart
        Body
         - Search Bar
          -Restro list
            - Restro card
                - Image
                - Name
                -Rating
                -Cusines
        Footer
            - links
            - Copyright
        */
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
        <a href="/">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLK3kEJcq5i7QL17xo98YIzvb7-4iD0Yaag&usqp=CAU" alt="FoodVilla"/>
        </a>
    );
};


const HeaderComponent = () =>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
    
}


const AppLayout = () =>{
    return(
       {}
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);