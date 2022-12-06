import React from "react"
import airbLogo from "./images/airbnb_logo.png"
import desert from "./images/desert.png"
function NavBar(){

    return (
        <div className="nav-container">
        
            <nav className="nav-bar">
                <img src={airbLogo}
                    alt="Aribnb-logo"
                    width="80px"
                />
            </nav>

            <div className="photos-container">
                <h2 className="photo-title">New This Week</h2>
                <div className="image-container">
                    <img src={desert}
                    alt="desert"
                    ></img>
                    <small className="small-text">
                        Collection
                    </small>
                    <h3 className="image-title">
                        Most Popular Around the World
                    </h3>
                    <button>
                        Show All
                    </button>
                </div>

                

                

            </div>
        </div>
    )

}

export default NavBar;