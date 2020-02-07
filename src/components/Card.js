import React from "react";

const cardStyles = {
    borderRadius: 3,
    width: "100%",
    height: "100%",
    cursor: "pointer",
    userSelect: "none",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    color: "white",
    textShadow: "2px 2px 2px #000000",
    top: 0
};

const Card = ({ zIndex = 0, cards }) => {
    console.log('cards', cards);
    const backgroundImage = cards && cards[0].photos[0];
    console.log('backgroundImage', backgroundImage);

if (!cards) return null;
return (
    <div style={{ ...cardStyles, zIndex, backgroundImage: `url(${backgroundImage})` }}>
        <h1>{cards[0].name}</h1>
        <h3>Style:</h3>
        <ul>
        {cards[0].categories.map((category) => <li>{category.title}</li>)}
        </ul>
    </div>
)};

export default Card;
