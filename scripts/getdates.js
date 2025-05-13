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