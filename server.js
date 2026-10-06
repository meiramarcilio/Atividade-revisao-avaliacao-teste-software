const express = require('express');

const { validateGuest } = require('./src/validation');
const {
    addGuest,
    getGuests
} = require('./src/guestService');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/guests', (req, res) => {

    const guest = req.body;

    if (!validateGuest(guest)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid guest data'
        });
    }

    const registeredGuest = addGuest(guest);

    return res.status(201).json({
        success: true,
        message: 'Guest successfully registered!',
        guest: registeredGuest
    });
});

app.get('/guests', (req, res) => {
    res.json(getGuests());
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;