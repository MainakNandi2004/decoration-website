// server.js
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/order', (req, res) => {
    const order = req.body;
    console.log("Received order:", order);

    // TODO: Save to file or database
    res.json({ message: "Order received successfully!" });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
