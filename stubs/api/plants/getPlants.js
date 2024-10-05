const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const plantsRouter = express.Router();
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

async function getAccessToken() {
    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', 'kD2JXj1faSCYAWdT4B069wQAx89CZAkXmzTinRvH');
    formData.append('client_secret', 'bJq7Uiwua52tHiLP80N60hALNtQX2wcE4Mj6yNA9OzG2iZbgHuqyeAs6WSWX6MNJdfv0Nqzb7OHta8qPZr4zxWBLTauleaMfraln3xFEvbXLDpi1Lcrwe7DxfgsQQ1E4');

    try {
        const response = await axios.post('https://open.plantbook.io/api/v1/token/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (response.data && response.data.access_token) {
            console.log('Access token retrieved:', response.data.access_token);
            return response.data.access_token;
        } else {
            console.error('Error: access_token not found in response');
            return null;
        }

    } catch (error) {
        console.error('Error fetching access token:', error.response ? error.response.data : error.message);
        return null;
    }
}

async function fetchPlantData(plantId) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        return null;
    }
    try {
        const response = await axios.get(`https://open.plantbook.io/api/v1/plant/detail/${encodeURIComponent(plantId)}/`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching plant data:', error.response ? error.response.data : error.message);
        return null;
    }
}

plantsRouter.get('/list', async (req, res) => {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        res.status(500).send({ message: 'Error obtaining access token' });
        return;
    }
    try {
        const alias = req.query.alias || 'monstera';
        const response = await axios.get('https://open.plantbook.io/api/v1/plant/search', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                alias: alias
            }
        });

        const plantsList = response.data.results;

        const plants = await Promise.all(plantsList.map(async (plant) => {
            const plantDetails = await fetchPlantData(plant.pid);
            return {
                id: plant.pid,
                alias: plant.alias,
                display_name: plant.display_name,
                image_url: plantDetails ? plantDetails.image_url : null,
                max_light: plantDetails ? plantDetails.max_light : null,
                min_light: plantDetails ? plantDetails.min_light : null,
                max_temp: plantDetails ? plantDetails.max_temp : null,
                min_temp: plantDetails ? plantDetails.min_temp : null,
                max_env_humid: plantDetails ? plantDetails.max_env_humid : null,
                min_env_humid: plantDetails ? plantDetails.min_env_humid : null,
                max_soil_moist: plantDetails ? plantDetails.max_soil_moist : null,
                min_soil_moist: plantDetails ? plantDetails.min_soil_moist : null,
                max_soil_ec: plantDetails ? plantDetails.max_soil_ec : null,
                min_soil_ec: plantDetails ? plantDetails.min_soil_ec : null,
            };
        }));

        res.send({ results: plants });
    } catch (error) {
        console.error('Error fetching plant list:', error.response ? error.response.data : error.message);
        res.status(500).send({ message: 'Error fetching plant list' });
    }
});

plantsRouter.get('/:id', async (req, res) => {
    const plantId = req.params.id;
    const plantData = await fetchPlantData(plantId);

    if (plantData) {
        // Construct a response based on the plantData structure
        const detailedPlantData = {
            id: plantData.pid,
            display_name: plantData.display_name,
            alias: plantData.alias,
            max_light: plantData.max_light,
            min_light: plantData.min_light,
            max_temperature: plantData.max_temp,
            min_temperature: plantData.min_temp,
            max_humidity: plantData.max_env_humid,
            min_humidity: plantData.min_env_humid,
            max_soil_moisture: plantData.max_soil_moist,
            min_soil_moisture: plantData.min_soil_moist,
            max_soil_ec: plantData.max_soil_ec,
            min_soil_ec: plantData.min_soil_ec,
            image_url: plantData.image_url
        };

        res.send(detailedPlantData);
    } else {
        res.status(404).send({ message: 'Plant not found' });
    }
});

app.use('/plants', plantsRouter);
