import { useEffect, useState } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock-container">
      <h2>PNINFOSYS Digital Clock</h2>

      <div className="clock">
        {time.toLocaleTimeString()}
      </div>

      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

export default DigitalClock;



// useState(new Date()) initial current date aur time store karta hai.
// setInterval() har 1000 milliseconds par current time update karta hai.
// setTime(new Date()) state update karta hai, jisse component dobara render hota hai.
// toLocaleTimeString() local time display karta hai.
// toLocaleDateString() local date display karta hai.
// Cleanup function component unmount hone par timer band kar deta hai.


// Function	Kaam
// setInterval()	Function ko baar-baar chalata hai
// clearInterval()	Interval ko stop karta hai
// useEffect()	Effect setup aur cleanup manage karta hai
// return () => {}	Cleanup function define karta hai
// setTimeout()	Function ko ek baar delay ke baad chalata hai