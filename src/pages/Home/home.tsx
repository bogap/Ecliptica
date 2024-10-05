import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { PlantCard, Grid, Text, PlantSearch, GreenButton } from 'plant-care-ui-kit';
import AppBar from '../compoments/AppBar';
import axios from "axios";


const Home = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get('http://localhost:5000/plants/list',
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
                    marginBottom: '20px'
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
                        marginBottom: '20px'
                    }}>
                        {/* Calendar Button */}
                        <Link to="/ecliptica/calendar" style={{margin: '10px'}}>
                            <GreenButton size="small" label="Go to Calendar"/>
                        </Link>

                        {/* Search */}
                        {/*<PlantSearch*/}
                        {/*    query={searchTerm}*/}
                        {/*    onSearch={setSearchTerm}*/}
                        {/*    placeholder="Search plants..."*/}
                        {/*/>*/}
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {/* Search Bar */}
                    <PlantSearch
                        query={searchTerm}
                        onSearch={setSearchTerm}
                        placeholder="Search plants..."
                    />
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
