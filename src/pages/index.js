import React, { useState, useEffect } from "react"
import { usePosition } from '../components/usePosition';
import postData from '../utils/postData';
import Swipeable from "react-swipy";

import Card from "../components/Card";
import {PrimaryButton, SecondaryButton} from "../components/Button";
import appStyles from "./style.module.css";
import './globalStyles.css';
import LoadingSpinner from "../components/LoadingSpinner";
import SingleCard from '../components/SingleCard';

export default () => {
  const {latitude, longitude, error} = usePosition();
  const [cards, setCards] = useState([]);
  const [offset, setoffset] = useState(0)


  const fetchMyAPI = async () => {
    const data = await postData('http://localhost:3000/yelp/business/search', {
      latitude: latitude,
      longitude: longitude,
      offset
    });
    setCards(data.search.business);
  }

  const remove = () => {
    if (cards.length > 0) {
      setCards(cards.slice(1, cards.length));
      if (cards.length === 1) {
        setoffset((offset + 1) + 20);
      }
    }
  }


  useEffect(() => {
    fetchMyAPI();
  }, [latitude, longitude, offset]);

  if (error) return <p>Position not allowed!</p>;
  if (!cards || cards.length === 0) return <LoadingSpinner />;

  return (
    <div className={appStyles.appStyles}>
      <div className={appStyles.wrapperStyles}>
        {cards.length > 0 && (
          <div className={appStyles.wrapperStyles}>
          <Swipeable
          buttons={({ right, left }) => (
            <div className={appStyles.buttonContainer}>
                <SecondaryButton onClick={left}>Reject</SecondaryButton>
                <PrimaryButton onClick={right}>Accept</PrimaryButton>
                </div>
              )}
              onAfterSwipe={remove}
              >
              <Card cards={cards}>test</Card>
            </Swipeable>
            {cards.length > 1 && <SingleCard zIndex={-1} cards={cards}></SingleCard>}
          </div>
        )}
        {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
      </div>
    </div>
  )
  };