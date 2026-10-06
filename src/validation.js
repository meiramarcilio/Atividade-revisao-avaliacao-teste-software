function validateGuest(guest) {
    if (!guest) {
        return false;
    }

    if (!guest.name || guest.name.trim().length < 3) {
        return false;
    }

    if (!guest.email) {
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(guest.email)) {
        return false;
    }
    if (!guest.phone) {
        return false;
    }

    if (!guest.checkIn || !guest.checkOut) {
        return false;
    }

    const checkIn = new Date(guest.checkIn);
    const checkOut = new Date(guest.checkOut);

    if (checkOut <= checkIn) {
        return false;
    }

    if (!Number.isInteger(Number(guest.guests))) {
        return false;
    }

    if (Number(guest.guests) <= 0) {
        return false;
    }

    return true;
}

module.exports = {
    validateGuest
};