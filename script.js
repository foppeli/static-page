// Set launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2>We\'re Live!</h2>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Handle form submission
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('emailInput').value;
    const instagram = document.getElementById('instagramInput').value;

    // Store data in localStorage (in production, send to backend)
    const subscribers = JSON.parse(localStorage.getItem('foppeliSubscribers') || '[]');
    subscribers.push({
        email: email,
        instagram: instagram,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('foppeliSubscribers', JSON.stringify(subscribers));

    // Show success message
    document.getElementById('successMessage').classList.add('show');

    // Reset form
    this.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successMessage').classList.remove('show');
    }, 5000);

    console.log('Subscriber added:', { email, instagram });
});
