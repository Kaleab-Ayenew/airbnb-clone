import desert from "./images/desert.png"
import ImageCard from "./ImageCard"
import cardData from "./data"

function Cards(){

    const cards = cardData.map((item)=>{
        return(
        <ImageCard 
        openSpot ={item.openSpot}
        imgSrc={item.imgSrc}
        rating={item.rating} 
        country={item.country} 
        description={item.description} 
        price={item.price}/>)
    });

    console.log(cards)
    return (
        <div className="cards-container">

            <h1>Plan Your Trips Here</h1>

            <div className="card-photos-container">
                {cards}
            </div>

        </div>
    )
}

export default Cards