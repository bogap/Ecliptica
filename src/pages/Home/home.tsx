import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from "../compoments/PlantCard";
import Grid from "../compoments/Grid";
import Text from '../compoments/Text';
import PlantSearch from "../compoments/PlantSearch";
import AppBar from '../compoments/AppBar';
// @ts-ignore
import calendarIcon from '../compoments/imgs/calendar.png';
import axios from "axios";
import './Home.css';  // Import CSS

const Home = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [userPlants, setUserPlants] = useState([]);

    // User plant list
    useEffect(() => {
        const savedPlants = JSON.parse(localStorage.getItem('userPlants') || '[]');
        setUserPlants(savedPlants);
    }, []);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get('http://localhost:3000/plants/list', {
                    params: { alias: searchTerm || 'a' }
                });
                setPlants(response.data.results);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPlants();
    }, [searchTerm]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="home-container">
            <AppBar>
                <div className="header-container">
                    {/* Title */}
                    <Text
                        color='#333333'
                        fontSize='30px'
                        className="title-text"
                    >
                        My Plants
                    </Text>

                    {/* Search Bar and Calendar */}
                    <div className="search-container">
                        {/* Search Bar */}
                        <PlantSearch
                            query={searchTerm}
                            onSearch={setSearchTerm}
                            placeholder="Search plants..."
                        />
                        {/* Calendar Button */}
                        <Link to="/ecliptica/calendar" className="calendar-link">
                            <img src={calendarIcon} className="calendar-icon" alt="Calendar" />
                        </Link>
                    </div>
                </div>
            </AppBar>

            <div className="grid-container">
                <Grid>
                    {searchTerm === '' ? (
                        userPlants.length > 0 ? (
                            userPlants.map((plant) => (
                                <Link
                                    key={plant.id}
                                    to={`/ecliptica/info/${plant.id}`}
                                    state={{ plant }}
                                    className="plant-link"
                                >
                                    <PlantCard name={plant.alias} imageUrl={plant.image_url} />
                                </Link>
                            ))
                        ) : (
                            <p>Add plants to your collection!</p>
                        )
                    ) : (
                        plants.length > 0 ? (
                            plants.map((plant) => (
                                <Link
                                    key={plant.id}
                                    to={`/ecliptica/info/${plant.id}`}
                                    state={{ plant }}
                                    className="plant-link"
                                >
                                    <PlantCard name={plant.alias} imageUrl={plant.image_url} />
                                </Link>
                            ))
                        ) : (
                            <p>No results found for "{searchTerm}". Try another search.</p>
                        )
                    )}
                </Grid>
            </div>
        </div>
    );
};

export default Home;
