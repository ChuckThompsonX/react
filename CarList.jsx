const CarList = () => {
  const cars = ["Ford", "Chevy", "BMW", "Toyota"];

  return (
    <div>
      <h2>My Car List</h2>
      <ul>
        {cars && 
          cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
