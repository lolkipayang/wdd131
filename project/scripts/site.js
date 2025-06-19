// LocalStorage and dynamic UI
document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.querySelector("#bookingForm");
    const toursList = document.querySelector("#tours");

    const tours = [
        { id: 1, name: "Savannah Sunrise", price: 300 },
        { id: 2, name: "Big Five Expedition", price: 450 },
        { id: 3, name: "Night Safari", price: 200 }
    ];

    if (toursList) {
        tours.forEach(tour => {
            const item = document.createElement("li");
            item.innerHTML = `<strong>${tour.name}</strong> - $${tour.price}`;
            toursList.appendChild(item);
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = bookingForm.name.value.trim();
            const selectedTour = bookingForm.tour.value;

            if (!name || !selectedTour) {
                alert("Please fill all fields.");
                return;
            }

            const booking = {
                name,
                tour: selectedTour,
                date: new Date().toISOString()
            };

            localStorage.setItem("lastBooking", JSON.stringify(booking));
            alert(`Thanks, ${name}! Your safari is booked.`);
            bookingForm.reset();
        });
    }
});
const today = new Date();
const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short' // Added for timezone
};

full.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    options
).format(today)}</span>`;
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;