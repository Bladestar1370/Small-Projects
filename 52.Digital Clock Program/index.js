

// DIGITAL CLOCK PROGRAM

 
// button
const modeBtn = document.getElementById('mode-btn');
let isDarkMode = false; // default is light (morning)

modeBtn.addEventListener('click', () => {
    if (!isDarkMode) {
        document.body.style.backgroundImage = "url('night.png')";
        isDarkMode = true;
    } else {
        document.body.style.backgroundImage = "url('sun.png')";
        isDarkMode = false;
    }
});


// clock funciton

// Function to update the clock every second
function updateClock() {

    // Create a new Date object that gives the current date & time
    const now = new Date();

    let hours = now.getHours();                                  // Get the current hour in 24-hour format (0 - 23)
    const meridiem = hours >= 12 ? "PM" : "AM";                  // Decide AM or PM (if hours >= 12, it's PM; otherwise AM)

    // Convert 24-hour format to 12-hour format
    // (0 becomes 12, so we use "hours % 12 || 12")
    hours = hours % 12 || 12;

    // Convert hours into a string and add leading zero if needed
    // Example: 7 → "07"
    hours = hours.toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2, 0);         // Get minutes and format with leading zero
    const seconds = now.getSeconds().toString().padStart(2, 0);         // Get seconds and format with leading zero

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;    // Create the final time string in the format HH:MM:SS AM/PM

    // Update the HTML element with id="clock" to show the time
    document.getElementById("clock").textContent = timeString;
}

// Call the function once immediately (so clock shows without delay)
updateClock();

// Call the function every 1000 milliseconds (1 second) to keep clock running
setInterval(updateClock, 1000);
