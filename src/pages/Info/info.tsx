import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import './info.css';
import AppBar from '../compoments/AppBar';
import {Text} from "plant-care-ui-kit";
import addIcon from '../compoments/imgs/add.png';

const Info = () => {
    const location = useLocation();
    const { plant } = location.state;

    if (!plant) {
        return <div>Plant not found</div>;
    }

    return (
        <div>
            <AppBar>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Link to="/ecliptica/" style={{ textDecoration: 'none' }}>
                        <Text
                            color='#333333'
                            fontSize='30px'
                            style={{ textAlign: 'left', margin: '0', cursor: 'pointer' }}
                        >
                            My Plants
                        </Text>
                    </Link>
                    {/* Calendar Button */}
                    <Link to="/ecliptica/" style={{marginLeft: '1000px', justifyContent: 'flex-end'}}>
                        {<img src={addIcon} style={{ width: '50px', height: '50px'}} />}
                    </Link>
                </div>
            </AppBar>
            <div className="info-container">
                <h1>{plant.name}</h1>
                <img src={plant.image_url} alt={plant.id} className="info-image"/>
                <p><strong>Alias:</strong> {plant.alias}</p>
                <p><strong>Temperature Range:</strong> {plant.min_temp} - {plant.max_temp} °C</p>
                <p><strong>Humidity Range:</strong> {plant.min_env_humid} - {plant.max_env_humid} %</p>
                <p><strong>Soil Moisture Range:</strong> {plant.min_soil_moist} - {plant.max_soil_moist}</p>
            <p><strong>Soil EC Range:</strong> {plant.min_soil_ec} - {plant.max_soil_ec} dS/m</p>
        </div>
        </div>
    );
};

export default Info;
