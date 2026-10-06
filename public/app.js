const form = document.getElementById('guestForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const guest = Object.fromEntries(new FormData(form));
    guest.guests = Number(guest.guests);

    try {
        const response = await fetch('/guests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(guest)
        });

        const result = await response.json();
        message.textContent = result.message;
    } catch (error) {
        message.textContent = 'Could not submit the registration. Please try again.';
        console.error(error);
    }
});
