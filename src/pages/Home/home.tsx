import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

// @ts-ignore
import aloeImage from '../images/aloe.jpg';
// @ts-ignore
import snakeImage from '../images/snake.jpg';
// @ts-ignore
import spiderPlantImage from '../images/spider-plant.jpg';
// @ts-ignore
import chineseEvergreenImage from '../images/chinese-evergreen.jpg';
// @ts-ignore
import daisyImage from '../images/daisy.jpg';
// @ts-ignore
import dracaenasImage from '../images/Dracaenas.jpg';
// @ts-ignore
import ladyPalmImage from '../images/lady-palm.jpg';
// @ts-ignore
import mumsImage from '../images/mums.jpg';
// @ts-ignore
import peaceLilyImage from '../images/peace-lily.jpg';
// @ts-ignore
import weepingFigImage from '../images/weeping-fig.jpg';

// Array of plant data with imported images
const plants = [
    { id: 1, name: 'Aloe Vera', image: aloeImage },
    { id: 2, name: 'Snake Plant', image: snakeImage },
    { id: 3, name: 'Spider Plant', image: spiderPlantImage },
    { id: 4, name: 'Chinese Evergreen', image: chineseEvergreenImage },
    { id: 5, name: 'Daisy', image: daisyImage },
    { id: 6, name: 'Dracaenas', image: dracaenasImage },
    { id: 7, name: 'Lady Palm', image: ladyPalmImage },
    { id: 8, name: 'Mums', image: mumsImage },
    { id: 9, name: 'Peace Lily', image: peaceLilyImage },
    { id: 10, name: 'Weeping Fig', image: weepingFigImage },
];

const Home = () => {
    const [selectedPlant, setSelectedPlant] = useState(null);

    return (
        <div className="home-container">
            <h1>My plants</h1>
            <div className="plant-grid">
                {plants.map((plant) => (
                    <Link key={plant.id}
                          to={`/info/${plant.id}`}
                          state={{plant}}
                          className="plant-item">
                        <img src={plant.image} alt={plant.name} className="plant-image" />
                        <p className="plant-name">{plant.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
