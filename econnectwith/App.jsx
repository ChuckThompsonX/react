import { useState } from "react";
import { useForm } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";
import api from "./api/api";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {

  // react hook form config
  const { handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  // provisions data, start as an empty array
  const [provisions, setProvisions] = useState([]);

  const addProvision = (newProvision) => {
    // create a new array with the existing items and the new item
    setProvisions([...provisions, newProvision]);
  };

  const removeProvision = (indexToRemove) => {
    // create new array excluding the item at the specified index
    setProvisions(provisions.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = () => {
    // convert the provisions array to a JSON string
    const stateString = JSON.stringify(provisions);
    // send the provisions to the server
    api.post("/posts", stateString).then((response) => {
      console.log("Post Response: ", response.data);
    });

    // reset the form and provisions array
    reset();
    setProvisions([]);
  };

  return (
    <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300 py-10">
      <Header />

      <div className="m-8 text-left">
        <label>Enter Provisions</label>
        <br />
        <input
          className="border-1 rounded-md w-lg h-10"
          type="text"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addProvision(event.target.value);
              event.target.value = "";
            }
          }}
        />
      </div>

      <div className="m-8 py-5 px-2 border-1 rounded-md w-lg h-40 text-left">
        {provisions.map((provision, index) => (
          <span key={index}>
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-10 py-2 px-4 rounded-full">
              {provision}
              <ClearIcon
                onClick={() => {
                  removeProvision(index);
                }}
              />
            </span>{" "}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-8">
          <button
            type="submit"
            className="border-1 bg-lime-800 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <button type="button" onClick={() => (reset(), setProvisions([]))}>
            Reset
          </button>
        </div>
      </form>

      <Footer />

    </div>
  );
}

export default App;
