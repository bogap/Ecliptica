import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import './info.css';

// plant details
const plants = [
    { id: 1, name: 'Aloe Vera', description: 'Aloe Vera is known for its medicinal properties.' },
    { id: 2, name: 'Snake Plant', description: 'Snake Plant is known for its air-purifying qualities.' },
    { id: 3, name: 'Spider Plant', description: 'Spider Plant is a popular houseplant.' },
    { id: 4, name: 'Chinese Evergreen',  description: 'Chinese Evergreen is a hardy indoor plant.' },
    { id: 5, name: 'Daisy', description: 'Daisy is a common flower found in gardens.' },
    { id: 6, name: 'Dracaenas',  description: 'Dracaenas are popular houseplants with long leaves.' },
    { id: 7, name: 'Lady Palm',  description: 'Lady Palm is a fan-leafed palm often used indoors.' },
    { id: 8, name: 'Mums', description: 'Mums are beautiful flowering plants for autumn.' },
    { id: 9, name: 'Peace Lily', description: 'Peace Lily is known for its white blooms and air-purifying qualities.' },
    { id: 10, name: 'Weeping Fig', description: 'Weeping Fig is a graceful tree-like houseplant.' },
];

const Info = () => {
    const location = useLocation();
    const { plant } = location.state;
    const { id } = useParams<{ id: string }>();
    const description = plants.find(plant => plant.id === parseInt(id || '0')).description;

    if (!plant) {
        return <div>Plant not found</div>;
    }

    return (
        <div className="info-container">
            <h1>{plant.name}</h1>
            <img src={plant.image} alt={plant.name} className="info-image"/>
            <p>{description}</p>
        </div>
    );
};

export default Info;
