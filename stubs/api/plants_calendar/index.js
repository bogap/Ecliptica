const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const plants = [
    {
        name: "Rose",
        deadline: "2024-10-09",
        image: "https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg",
    },
    {
        name: "Sunflower",
        deadline: "2024-10-05",
        image: "https://avatars.mds.yandex.net/i?id=31da587c9aabc83ad3615023f91d7284781be06c-10701700-images-thumbs&n=13",
    },
    {
        name: "Rose",
        deadline: "2024-10-11",
        image: "https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg",
    },
    {
        name: "Rose",
        deadline: "2024-10-13",
        image: "https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg",
    },
    {
        name: "Rose",
        deadline: "2024-10-16",
        image: "https://ervanarium.com.br/wp-content/uploads/2019/03/cactus-3142589_1920.jpg",
    },
];

app.get('/api/plants', (req, res) => {
    res.json(plants);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
