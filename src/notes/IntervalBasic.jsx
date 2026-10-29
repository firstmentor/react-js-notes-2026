import { useEffect } from "react";

function IntervalBasic() {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Hello PNINFOSYS");
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>Interval Example</h2>
      <p>Browser console check karein.</p>
    </div>
  );
}

export default IntervalBasic;

// Kisi function ko har fixed time ke baad baar-baar chalane ke liye setInterval() use karte hain.
// 1000 milliseconds = 1 second
// 2000 milliseconds = 2 seconds
// 5000 milliseconds = 5 seconds

// setInterval() har second message print karega.
// timerId interval ki ID store karta hai.
// clearInterval(timerId) interval ko stop karta hai.
// return () => { ... } cleanup function hai.


// Cleanup Function kya hai?
// Jab component ko timer ya kisi ongoing task ki zarurat nahi rehti, tab cleanup function us task ko band karta hai.
// Yahan return ke andar diya gaya function cleanup hai.
// Cleanup kab run hota hai?
// - Component unmount hone par.
// - Effect dobara run hone se pehle, jab dependencies change hoti hain.
// - Development mein React StrictMode ke extra setup-and-cleanup cycle ke dauran.
// Important: Timer ko clear nahi karenge, to unwanted background intervals chal sakte hain aur multiple timers create ho sakte hain.