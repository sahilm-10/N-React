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

// Config driven UI 
const restrolist =[
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "30072",
          "name": "Golden Bake & Cakes",
          "uuid": "2d7685df-ea29-4beb-9d12-9640704ee6d8",
          "city": "4",
          "area": "Dwarka",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "l3yced9vodwmvf1h2kkl",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Snacks"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 1.2999999523162842,
          "slugs": {
            "restaurant": "golden-bake-cakes-uttam-nagar-uttam-nagar",
            "city": "delhi"
          },
          "cityState": "4",
          "address": "67, Sewak Park, Near Metro Pillar 778, Dwarka Mod Metro Station, Uttam Nagar, New Delhi",
          "locality": "Sector 15",
          "parentId": 16097,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6920261~p=1~eid=00000188-afae-9eac-15ee-f44f00a60128",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "30072",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 1.2999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.8",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "28451",
          "name": "Grover Sweets & Bakers",
          "uuid": "f4787efb-89ca-4954-bf69-df8f83cec00b",
          "city": "4",
          "area": "Uttam Nagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "at6kqassx47vpnzcpvwm",
          "cuisines": [
            "North Indian",
            "Sweets",
            "Street Food",
            "Snacks",
            "Indian",
            "Tandoor",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "lastMileTravel": 1.2999999523162842,
          "slugs": {
            "restaurant": "grover-sweets-bakers-uttam-nagar-uttam-nagar",
            "city": "delhi"
          },
          "cityState": "4",
          "address": "Plot no -1, Diwan Estate, Bhagwati Garden, Near Dwarka Mod Metro Station, Uttam Nagar, New Delhi",
          "locality": "Bhagwati Garden",
          "parentId": 91011,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "28451",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "lastMileTravel": 1.2999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "36694",
          "name": "Sargam Sweets & Restaurant",
          "uuid": "17e6ee59-7045-47a1-b902-66c2b1f8546a",
          "city": "4",
          "area": "Uttam Nagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "qetsckyabfqyq3qz4opm",
          "cuisines": [
            "Sweets",
            "Snacks"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "sargam-sweets-uttam-nagar-uttam-nagar",
            "city": "delhi"
          },
          "cityState": "4",
          "address": "A 11, Mohan Garden, Near Metro Pillar 753, Peepal Wala Road, Uttam Nagar, New Delhi",
          "locality": "Pipal Wala Road",
          "parentId": 16038,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "36694",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
];


const RestroCard = ({restaurant})=>{
    // console.log(props);
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+ restaurant.data?.cloudinaryImageId} alt="BurgerKing"/>
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines.join(", ")}</h3>
            <h4>{restaurant.data.lastMileTravelString} minutes</h4>
        </div>
    )
}

// You pass in arguments and you receive parameters!!!!!!!!!
// props => properties

const Body =()=>{
    return(
        <div className="restro-list">
            <RestroCard restaurant={restrolist[0]}/>
            <RestroCard restaurant={restrolist[1]}/>
            <RestroCard restaurant={restrolist[2]}/>
            <RestroCard restaurant={restrolist[0]}/>
            <RestroCard restaurant={restrolist[1]}/>
            <RestroCard restaurant={restrolist[2]}/>
        </div>
    )
}


const Footer =()=>{
    return(
        <h4>Footer here</h4>
    )
}

const AppLayout = () =>{
    return(
    <React.Fragment>
       <HeaderComponent/>
       <Body/>
       <Footer/>
    </React.Fragment>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);