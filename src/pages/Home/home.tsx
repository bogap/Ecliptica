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
import './Home.css';

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
                const response = await axios.get('http://localhost:3000/plants/list',
                    {
                        params: { alias: searchTerm || 'a' }
                    }
                );
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
        <div className="home-container" style={{ padding: '0', margin: '0 auto' }}>
            <AppBar>
                <div className="header-container"> {/* Added CSS class for styling */}
                    {/* Title */}
                    <Text
                        color='#333333'
                        fontSize='30px'
                        style={{ textAlign: 'left', margin: '0' }}
                    >
                        My Plants
                    </Text>

                    {/* Search Bar */}
                    <div className="search-container"> {/* Added CSS class for styling */}
                        {/* Search Bar */}
                        <PlantSearch
                            query={searchTerm}
                            onSearch={setSearchTerm}
                            placeholder="Search plants..."
                        />
                        {/* Calendar Button */}
                        <Link to="/ecliptica/calendar" style={{ marginLeft: '10px' }}>
                            {<img src={calendarIcon} style={{ width: '50px', height: '50px' }} />}
                        </Link>
                    </div>
                </div>
            </AppBar>

            <div className="grid-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                <Grid>
                    {searchTerm === '' ? (
                        // Saved plants
                        userPlants.length > 0 ? (
                            userPlants.map((plant) => (
                                <Link
                                    key={plant.id}
                                    to={`/ecliptica/info/${plant.id}`}
                                    state={{ plant }} // Pass the plant object to the Info page
                                    style={{ textDecoration: 'none' }}
                                >
                                    <PlantCard name={plant.alias} imageUrl={plant.image_url} />
                                </Link>
                            ))
                        ) : (
                            <p>Add plants to your collection!</p>
                        )
                    ) : (
                        // Search results
                        plants.length > 0 ? (
                            plants.map((plant) => (
                                <Link
                                    key={plant.id}
                                    to={`/ecliptica/info/${plant.id}`}
                                    state={{ plant }}
                                    style={{ textDecoration: 'none' }}
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
