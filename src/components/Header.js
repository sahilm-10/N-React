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

export default HeaderComponent;