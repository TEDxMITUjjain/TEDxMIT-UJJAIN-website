import React, { useEffect, useState } from "react";

function Countdown() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Updated target date to July 12, 2024, at 5 PM
    const eventDate = new Date(2024, 6, 12, 17, 0, 0).getTime(); // Month is 6 because July is the 7th month
    const countdownTimer = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        clearInterval(countdownTimer);
        setCountdown("00:00:00");
      }
    }

    return () => clearInterval(countdownTimer);
  }, []);

  return <div id="countdown">{countdown}</div>;
}

export default Countdown;
