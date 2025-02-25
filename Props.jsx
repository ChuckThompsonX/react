// parent component contains child component
const ParentComponent = (message) => {
  return (
    <>PARENT <ChildComponent text={message.text} /></>
  );
};

// child component
const ChildComponent = (message) => {
  return <>CHILD {message.text}</>;
};

// profile object data
const chuckProfile = {
  name: "Chuck",
  age: 35,
  isMember: true,
  hobbies: ["Coding", "Baseball"],
};

// Profile function or component
const Profile = (props) => {
  return (
    <>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Is member: {props.isMember ? "Active" : "Guest"}</h3>
      {props.hobbies.map((hobby, index) => (
        <p key={index}>{hobby}</p>
      ))}
    </>
  );
};

const Props = () => {
  const message = "Props!";
  return (
    <>
      <h2>Prop Page</h2>
      <ParentComponent text={message} />
      {/* spread operator (...) expands an iterable (like an array or object) into individual elements */}
      <Profile {...chuckProfile} />
    </>
  );
};

export default Props;

/*
Props facilitate the creation of reusable and dynamic components. 
They are a mechanism for passing data from parent components to their child components. 
They are similar to HTML attributes and function arguments. 
Props are read-only within the child component, ensuring a unidirectional data flow and preventing unintended side effects.
By accepting different props, a single component can render various outputs or behaviors, 
adapting to the specific needs of its parent component. 
*/
