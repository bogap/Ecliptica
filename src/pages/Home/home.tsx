import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
//import { PlantCard, Grid, Text, PlantSearch, GreenButton } from 'plant-care-ui-kit';

//import { PlantCard, Grid, Text, PlantSearch, GreenButton } from '../compoments/PlantSearch';
import PlantCard from "../compoments/PlantCard";
import Grid from "../compoments/Grid";
import Text from '../compoments/Text';
import PlantSearch from "../compoments/PlantSearch";
import GreenButton from "../compoments/Button";
import AppBar from '../compoments/AppBar';
// @ts-ignore
import calendarIcon from '../compoments/imgs/calendar.png';
import axios from "axios";


const Home = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get('http://localhost:3000/plants/list',
                    {
                        params: {alias: searchTerm || 'monstera'}
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
        <div className="home-container" style={{padding: '0', margin: '0 auto'}}>
            <AppBar>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    {/* Title */}
                    <Text
                        color='#333333'
                        fontSize='30px'
                        style={{textAlign: 'left', margin: '0'}}
                    >
                        My Plants
                    </Text>

                    {/* Search Bar */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        padding: '0px 0px 0px 800px',
                    }}>
                            {/* Search Bar */}
                            <PlantSearch
                                query={searchTerm}
                                onSearch={setSearchTerm}
                                placeholder="Search plants..."
                            />
                            {/* Calendar Button */}
                            <Link to="/ecliptica/calendar" style={{marginLeft: '10px'}}>
                                {<img src={calendarIcon} style={{ width: '50px', height: '50px'}} />}
                            </Link>
                    </div>
                </div>
            </AppBar>

            {/* Plant Grid */}
            <div className="grid-container" style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
                <Grid>
                    {plants.map((plant) => (
                        <Link
                            key={plant.id}
                            to={`/ecliptica/info/${plant.id}`}
                            state={{plant}}
                            style={{textDecoration: 'none'}}
                        >
                        <PlantCard name={plant.alias} imageUrl={plant.image_url}/>
                        </Link>
                    ))}
                </Grid>
            </div>
            </div>
            );
            };

            export default Home;
