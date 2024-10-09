const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const plants = [
    {
        name: "Rose",
        image: "https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg",
        frequency: 3,
        startDate: "2024-10-09",
    },
    {
        name: "Sunflower",
        image: "https://avatars.mds.yandex.net/i?id=31da587c9aabc83ad3615023f91d7284781be06c-10701700-images-thumbs&n=13",
        frequency: 3,
        startDate: "2024-10-05",
    },
];


const calculateWateringDates = (startDate, frequency) => {
    const dates = [];
    const start = new Date(startDate);

    for (let i = 0; i < 30; i += frequency) {
        const nextWateringDate = new Date(start);
        nextWateringDate.setDate(start.getDate() + i);
        dates.push(nextWateringDate.toISOString().split('T')[0]);
    }
    return dates;
};

const plantsWithDates = plants.map(plant => ({
    ...plant,
    wateringDates: calculateWateringDates(plant.startDate, plant.frequency),
}));

app.get('/api/plants', (req, res) => {
    res.json(plantsWithDates);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});