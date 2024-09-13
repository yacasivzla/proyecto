function createCountdown(endDateUTC) {
    // Convert the end date to milliseconds in UTC
    const endDateMs = Date.parse(endDateUTC);
  
    // Function to update the countdown
    const updateCountdown = () => {
      const now = Date.now();
      const distance = endDateMs - now;
  
      // Calculate the remaining time
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Format the remaining time using the user's preferred time zone
      const formatter = new Intl.DateTimeFormat([], {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        hour12: false, // Use 24-hour format for global consistency
        year: 'numeric', // Include year for clarity
        month: '2-digit', // Pad month with leading zero if necessary (e.g., 09 for September)
        day: '2-digit', // Pad day with leading zero if necessary (e.g., 16 for September 16th)
        hour: '2-digit', // Pad hour with leading zero if necessary (e.g., 20 for 8:00 PM)
        minute: '2-digit', // Pad minute with leading zero if necessary (e.g., 59)
        second: '2-digit' // Pad second with leading zero if necessary (e.g., 59)
      });
  
      const formattedTime = formatter.format(new Date(distance));
  
      // Update the display
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
      document.getElementById("formattedTime").innerText = formattedTime;
  
      // Check if the countdown has finished
      if (distance <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerText = "¡EL MOMENTO ES AHORA!";
      }
    };
  
    // Start the interval to update the countdown every second
    const interval = setInterval(updateCountdown, 1000);
  
    // Call the update function initially to display the starting countdown
    updateCountdown();
  }
  
  // Call the function with the end date in UTC format
  createCountdown('2024-09-17T00:00:00Z'); // September 17th, 2024 at 12:00AM UTC