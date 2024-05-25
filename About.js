function About(){
    return(
        <div>
           
        <div className="header">
           
            <div className="lowerHeader">
                <div className="shop">
                    <h3>Shop By Category</h3>
                </div>
                {/* <!--   shop div ends here --> */}
                <div className="search">
                    <div className="user">
                        <input type="text" id="userinput" placeholder="Type here" />
                        <div className="btn">
                            <button >search</button>
                        </div>
                    </div>
                </div>
                {/* <!--   search div ends here --> */}
                <div className="login">
                    <i className="fa-solid fa-user"></i>
                    login & SignUp
                    <i className="fa-solid fa-cart-shopping" ></i>
                </div>
                {/* <!--    login div ends here --> */}
            </div>
            {/* <!--    lower header div ends here --> */}

           
        </div>
        {/* // header ends */}

        <h1>ABOUT PAGE </h1>
        <div className="banner">
            <img src="https://i.ytimg.com/vi/vz2zGfaq1ec/maxresdefault.jpg" alt="banner" />
        </div>
        </div>
    )
}
export default About;