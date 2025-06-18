
    const products = [
    {id: 1, name: "Product Alpha" },
    {id: 2, name: "Product Beta" },
    {id: 3, name: "Product Gamma" }
    ];

    const select = document.getElementById("productName");
        products.forEach(product => {
            const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
        });

    function submitReview(event) {
        event.preventDefault();
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    alert("Thank you! Review submitted. Total reviews: " + count);
    document.getElementById("reviewForm").reset();
}
        
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