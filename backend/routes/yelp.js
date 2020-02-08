const express = require("express");
const router = express.Router();
const yelpApiUrl = "https://api.yelp.com/v3/graphql";
import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient(yelpApiUrl, {
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
});

router.post("/business/search", async (req, res, next) => {
  const query = `
    query search($latitude: Float!, $longitude: Float!, $offset: Int!) {
      search(
        latitude: $latitude,
        longitude: $longitude,
        offset: $offset
      ) {
      total
      business {
        name
        rating
        url
        review_count
        price
        photos
        categories {
          title
        }
        hours {
          is_open_now
          open {
            start
            end
            day
          }
        }
        location {
          address1
          city
          state
          country
        }
      }
    }
  }`;

  const data = await client.request(query, req.body);
  res.json(data);
});
module.exports = router;