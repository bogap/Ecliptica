import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { PlantCard, Grid, Text, PlantSearch, GreenButton } from 'plant-care-ui-kit';

// Array of plant data with imported images
const plants = [
    { id: 1, name: 'Aloe Vera', image: 'https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg' },
    { id: 2, name: 'Snake Plant', image: 'https://avatars.mds.yandex.net/i?id=dec4f4f4e09120e7ede539b05ceee01177e45e269c802dae-13196350-images-thumbs&n=13' },
    { id: 3, name: 'Spider Plant', image: 'https://cdn0.youla.io/files/images/720_720_out/61/cb/61cb29af9d4a2e36f52d9b4c-1.jpg' },
    { id: 4, name: 'Chinese Evergreen', image: 'https://avatars.mds.yandex.net/i?id=dbb977ce62ff1cc56fa8e93787ffd802a84503e6-7333143-images-thumbs&n=13' },
    { id: 5, name: 'Daisy', image: 'https://avatars.mds.yandex.net/i?id=4315b57ccac085934430a4840b154fd7558ba55d-7552222-images-thumbs&n=13' },
    { id: 6, name: 'Dracaenas', image: 'https://avatars.mds.yandex.net/i?id=4052bab5bbbf415a8e813bf7a8632af15382dbff-11404303-images-thumbs&n=13' },
    { id: 7, name: 'Lady Palm', image: 'https://avatars.mds.yandex.net/i?id=801234354df0f911a66d82efa1512795589952ea-9056327-images-thumbs&n=13' },
    { id: 8, name: 'Mums', image: 'https://avatars.mds.yandex.net/i?id=31da587c9aabc83ad3615023f91d7284781be06c-10701700-images-thumbs&n=13' },
    { id: 9, name: 'Peace Lily', image: 'https://avatars.mds.yandex.net/i?id=a2af25f4a45e6b9b77b2e0676925f0e9_l-4285148-images-thumbs&n=13' },
    { id: 10, name: 'Weeping Fig', image: 'https://avatars.mds.yandex.net/i?id=2d93f5d2bedff85c6bea47f8aca54a7be467e14a-6323519-images-thumbs&n=13' },
];

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-container" style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                {/* Title */}
                <Text
                    color='#333333'
                    fontSize='30px'
                    style={{textAlign: 'left', margin: '0'}}
                >
                    My Plants
                </Text>

                {/* Search Bar */}
                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '20px'}}>
                    {/* Calendar Button */}
                    <Link to="/ecliptica/calendar" style={{ margin: '10px' }}>
                        <GreenButton size="small" label="Go to Calendar" />
                    </Link>

                    {/* Search */}
                    <PlantSearch
                        query={searchTerm}
                        onSearch={setSearchTerm}
                        placeholder="Search plants..."
                    />
                </div>
            </div>

            {/* Plant Grid */}
            <Grid>
                {filteredPlants.map((plant) => (
                    <Link
                        key={plant.id}
                        to={`/ecliptica/info/${plant.id}`}
                        state={{plant}}
                        style={{textDecoration: 'none'}}
                    >
                        <PlantCard name={plant.name} imageUrl={plant.image}/>
                    </Link>
                ))}
            </Grid>
        </div>
    );
};
export default Home;
