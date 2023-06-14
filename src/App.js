import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
// import * as obj from "./components/Header"

// obj.HeaderComponent
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
// const heading = React.createElement(
//     "h1",
//     {
//         id:"title",
//         key:"h1"
//     },
//     "Heading 1"
// );
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


// Functional Component.






// You pass in arguments and you receive parameters!!!!!!!!!
// props => properties


const AppLayout = () =>{
    return(
    <React.Fragment>
       <Header/>
       <Body/>
       <Footer/>
    </React.Fragment>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);