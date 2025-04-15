import { useState } from "react";

const CarUseState = () => {
  const [car, setCar] = useState({
    make: "Chevy",
    model: "Camaro",
    color: "red",
  });

  const changeColor = () => {
    // typically when the state is updated, the entire state gets overwritten
    // for instance, if we only changed the color it will remove the make and model from the state
    // pass a function into the setCar call which receives the entire current car state 
    // by spreading the carState object and overwriting only color
    setCar((carState) => {
      return { ...carState, color: "blue" };
    });
  };

  return (
    <>
      <p>My {car.make} {car.model} is {car.color}.</p>
      <button type="button" onClick={changeColor}>Change Car Color</button>
    </>
  );
}

export default CarUseState;
