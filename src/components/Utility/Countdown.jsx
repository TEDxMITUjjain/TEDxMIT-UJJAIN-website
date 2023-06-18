import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const eventDate = new Date(2023, 6, 15, 17, 0, 0).getTime();
    const countdownTimer = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Calculate time.
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown or a message if the event has already occurred
      if (distance >= 0) {
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        clearInterval(countdownTimer);
        setCountdown("00:00:00");
      }
    }

    return () => clearInterval(countdownTimer);
  });
};

export default Countdown;
