const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://backend-service:5000/'); // Call the backend
        res.send(`<h1>Frontend Application</h1><p>${response.data}</p>`);
    } catch (error) {
        res.status(500).send('Error connecting to backend');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});