import desert from "./images/desert.png"
import ImageCard from "./ImageCard"
import cardData from "./data"

function Cards(){

    const cards = cardData.map((item)=>{
        return(
        <ImageCard
        props={item}
        />)
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