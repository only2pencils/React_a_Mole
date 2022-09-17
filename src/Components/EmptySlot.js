import { useEffect } from "react";
import MoleHill from "../molehill.png";

function EmptySlot(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 3000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "30vw" }} src={MoleHill} />
    </div>
  );
}

export default EmptySlot;

// useEffect and Building a Mole Timer//

// We are ready to give functionality to our EmptySlot and Mole components. Start with EmptySlot and then move onto Mole when you are finished.

// Declare a useEffect that takes a callback function, as we have done in the past.
// Within the callback function, start by defining a random number of seconds. We want each mole to exist on its own random timer. Otherwise, our game would not be much fun.
// Next, declare a variable called timer. This variable will be assigned to a setTimeout()
// The setTimeout() callback should only toggle props.displayMole to true.
// Important: Do not forget to define a cleanup for our useEffect using clearTimeout(timer)
// Once EmptySlot is built, Mole will be easy as well.
