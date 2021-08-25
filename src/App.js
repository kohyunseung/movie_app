import React from 'react';
import PropTypes from 'prop-types';

function Food({name, image, rating}){
    
    return(
        <div>
        <h2>I Like {name}</h2>
        <h4>{rating}/5</h4>
        <img src={image} alt={name}></img>
        </div>
    );
}

const foodLike = [
    {
        "id": 1,
        "name" : "kimbap",
        "image" : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDNfNzIg%2FMDAxNjI3OTkxMTE4MzE2.o8tHGXNIWG5wmsF4W7TjtZBtEONrTvVPD7uSPzdzXhAg.FrkciiKW_TK-CtWB2sIWpvYVwNzT3Ns9PZsgbbr37oAg.JPEG.cooklhj%2FIMG_6588.JPG&type=a340"
        , "rating": 5
    },
    {
        "id": 2,
        "name" : "ramen",
        "image" : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTRfMjE1%2FMDAxNjI4OTI1MzAyNTky.UOSPvQqSvig8Q5h0rjUBdty1gOly4oRQRkrnF_8lR1og.05g0lSo6Pt2X2_Ssjo8Az348jFgF3nv_tKWouwoMahUg.JPEG.tangkwon%2F021.jpg&type=a340",
        "rating": 4.5
    },
    {
        "id": 3,
        "name" : "ttokbokki",
        "image" : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDhfOCAg%2FMDAxNjI4MzkxNzU2MjQ2.guIIVwh8hpHdpykL6p6W-WHevEaJAaYzFn8D_64U084g.HNhnI07IALlnbex5G5i2XX2iLHLLkqO6CY2e000Cb6Ag.PNG.ssayumisky%2FIMG_7003.png&type=a340",
        "rating": 4.7
    },
    {
        "id": 4,
        "name" : "curry",
        "image" : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzFfODMg%2FMDAxNjI3NjYwMzEyMjQ4.joYpi153Ipq2sSsctdJtfgQF06euddaBSqAp_DGikeYg.O-d--CuwqQ05vCYGANXaichjaMU_5eA4IxSSW0Qa-bsg.JPEG.bibi313%2F20210722_133756.jpg&type=a340",
        "rating": 3.6
    },
    {
        "id": 5,
        "name" : "meat",
        "image" : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDVfOTgg%2FMDAxNjI4MTczNzQzMjAy.zYd1zoUnnC-IdFlxAFCZ1ySljWZAgxnExexyPk0q-m0g.poBAkfv5S-UbzOXcCwF6GXf4oJVIuCAX3Fa993nbOcsg.PNG.yooonpig%2Fimage.png&type=a340",
        "rating": 4.8
    },
];

Food.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
        {foodLike.map((food) => {
            return <Food key={food.id} name={food.name} image={food.image} rating={food.rating}/>;
        })}
    </div>
  );
}

export default App;
