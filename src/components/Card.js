import React from "react";
import cardStyles from "./card.module.css"

const Card = ({ zIndex = 0, cards }) => {
    const backgroundImage = cards && cards[0].photos[0];

if (!cards) return null;
return (
    <div className={cardStyles.card} style={{ zIndex, backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.25) 20%), url(${backgroundImage})` }}>
        <h1>{cards[0].name}</h1>
        <h3>Style:</h3>
        <ul>
        {cards[0].categories.map((category, index) => <li key={index}>{category.title}</li>)}
        </ul>
    </div>
)};

export default Card;
