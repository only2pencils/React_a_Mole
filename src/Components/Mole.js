import { useEffect } from "react";
import moleImg from "../mole.png";

function Mole(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 3000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={moleImg}
        onClick={props.handleClick}
      />
    </div>
  );
}

//THESE ADDITIONS WILL BE ACTIVE AS THE USERS POINTS INCREASE//
//Add levels based on reaching certain points threshold
//trying to add random color change with moles as the user progresses
//trying to add helmets and hard hats randomly to moles as the user progresses
//Hard Hat and Helmet causes user to lose points upon clicking
//Want to also add color changing moles as the user progresses

export default Mole;
