const guests = [];

function addGuest(guest) {
    const newGuest = {
        id: guests.length + 1,
        ...guest
    };
    guests.push(newGuest);

    return newGuest;
}

function getGuests() {
    return guests;
}

function clearGuests() {
    guests.length = 0;
}

module.exports = {
    addGuest,
    getGuests,
    clearGuests
};