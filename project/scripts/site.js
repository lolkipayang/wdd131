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

// Update year and last modification time
document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModSpan = document.getElementById("full");
    if (lastModSpan) {
        const modDate = new Date(document.lastModified);
        lastModSpan.textContent = modDate.toLocaleString("en-KE", {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
});