import { useState } from "react";

const colors = ['red','green','blue','yellow','purple','orange'];

const ChangeColor = () => {
  // one state with an object
  const [selectedColor, setSelectedColor] = useState({
    color: "blue",
    style: "blue",
    intensity: "bold",
  });

  const changeColor = () => {
    // randomly select a color and set the selected color state
    if (colors.length > 0) {
      const index = Math.floor(Math.random() * colors.length);

      setSelectedColor(previousState => {
        // spread operator to update only relavent values
        return { ...previousState, color: colors[index], style: colors[index] };
      });
    }
  };

  return (
    <>
      <h3>My favorite color is <span style={{color:selectedColor.style}}>{selectedColor.color}</span>!</h3>
      <button onClick={() => changeColor()}>Change Color</button>
    </>
  );
};

export default ChangeColor;

/*
useState hook enables functional components to manage state. 
It provides a way to declare state variables and update them, 
triggering re-renders of the component when the state changes
*/
