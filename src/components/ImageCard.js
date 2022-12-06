import React from "react"


export default function ImageCard(props){
    return(
        <div className="image-container">
                        {props.openSpot == 0 && 
                        <div className="card-badge">Sold Out</div>
                        }
                        
                        <img src={props.imgSrc}
                        alt="desert"
                        ></img>
                        <div className="card-info">
                            <div className="rating-country">
                                {props.rating} - {props.country}
                            </div>

                            <div className="description">
                                {props.description}
                            </div>

                            <div className="price">
                                From {props.price}$/Person
                            </div>
                        </div>
                </div>
    )
}