import Luggage from "@mui/icons-material/Luggage";

const Item = ({ name, isPacked }) => {
  return (
    <div>
      {isPacked ? (<strong>{name} <Luggage /></strong>) : (name)}
    </div>
  );
}

const Notification = ({ hasNotifications }) =>{
  return (
    <div>
      {hasNotifications && 
        <h3>You have new notifications!</h3>
      }
    </div>
  );
}

const StatusMessage = ({ status }) =>{
  switch (status) {
    case "SUCCESS":
      return <h3>Successful data load!</h3>;
    case "LOADING":
      return <h3>Loading...</h3>;
    case "ERROR":
      return <h3>Error loading data.</h3>;
    default:
      return <h3>Unknown status.</h3>;
  }
}

const Fruits = () => {
  const fruits = ["Apple", "Banana", "Tomato", "Orange", "Grapes"];
  const fruitList = fruits.map((fruit, index) =>
    fruit.length == 5 ? <p key={index}>{fruit}</p> : null
  );

  return (
    <div>
      {fruitList}
    </div>
  );
}  

const Conditionals = () => {
  const isPacked = true;
  const hasNotifications = true;
  const name = "Packed";
  const status = "SUCCESS";

  return (
    <div>
      <Item name={name} isPacked={isPacked} />
      <Notification hasNotifications={hasNotifications} />
      <StatusMessage status={status} />
      <Fruits />
    </div>
  );
}

export default Conditionals;
