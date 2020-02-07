import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { usePosition } from '../components/usePosition';
import postData from '../utils/postData';
import Business from '../components/business';
import Cards, { Card } from 'react-swipe-card'

export default () => {
  const [data, setData] = useState(undefined);
  const {latitude, longitude, error} = usePosition();

  useEffect(() => {
    async function fetchMyAPI() {
      const data = await postData('http://localhost:3000/yelp/business/search', {
        latitude: latitude,
        longitude: longitude
      });
      setData(data);
      console.log('data', data);
    }
    fetchMyAPI();
  }, [latitude, longitude]);
  return (
    <Layout>
      <SEO title="Home" />
       <code>
        latitude: {latitude}<br />
        longitude: {longitude}<br />
        error: {error}
      </code>
      { data && data.search.business.map((item, key) =>
        <Business data={item} key={key}/>
      )}
    </Layout>
  )
  };