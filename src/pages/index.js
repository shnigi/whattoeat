import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { usePosition } from '../components/usePosition';
import postData from '../utils/postData';
import Swipeable from "react-swipy";

import Card from "../components/Card";
import Button from "../components/Button";


const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = {
  position: "relative",
  width: "800px",
  height: "800px",
};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

export default () => {
  const {latitude, longitude, error} = usePosition();
  const [cards, setCards] = useState([]);
  const remove = () => {
    if (cards.length > 0) {
      setCards(cards.slice(1, cards.length));
    }
  }

  useEffect(() => {
    async function fetchMyAPI() {
      const data = await postData('http://localhost:3000/yelp/business/search', {
        latitude: latitude,
        longitude: longitude
      });
      setCards(data.search.business);
      console.log('data', data);
    }
    fetchMyAPI();
  }, [latitude, longitude]);
  return (
    <div style={appStyles}>
      <div style={wrapperStyles}>
        {cards.length > 0 && (
          <div style={wrapperStyles}>
            <Swipeable
              buttons={({ right, left }) => (
                <div style={actionsStyles}>
                  <Button onClick={left}>Reject</Button>
                  <Button onClick={right}>Accept</Button>
                </div>
              )}
              onAfterSwipe={remove}
            >
              <Card cards={cards} length={cards.length}>test</Card>
            </Swipeable>
            {/* {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>} */}
          </div>
        )}
        {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
      </div>
    </div>
  )
  };