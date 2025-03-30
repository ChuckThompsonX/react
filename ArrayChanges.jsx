import React, { useState } from "react";

function ArrayChanges() {
  
  // initialize elements state with array of objects
  const [elements, setElements] = useState([
    { id: 1, name: "Element 1" },
    { id: 2, name: "Element 2" },
  ]);

  // add element to array with max id value
  const addElement= () => {
    const maxId = elements.reduce((max, obj) => Math.max(max, obj.id), 0);
    setElements([...elements, { id: maxId + 1, name: `Element ${maxId + 1}` }]);
  };

  // remove id element from array
  const removeElement = (id) => {
    setElements(elements.filter((element) => element.id !== id));
  };

  return (
    <div>
      <button onClick={addElement}>Add Element</button>
      <ul>
        {elements.map((element) => (
          <li key={element.id}>
            {element.name}
            <button onClick={() => removeElement(element.id)}>Remove Element</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayChanges;
