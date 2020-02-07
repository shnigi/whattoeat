import React from "react"

const Business = ({data}) => {
    console.log('data', data);
    const {name, url, price, location, photos} = data;
    console.log('name', name);
    return (
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <p>{name}</p>
            <img src={photos[0]} />
        </div>
)
}

export default Business
