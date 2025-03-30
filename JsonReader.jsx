import React, { useState, useEffect } from "react";

function JsonReader() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("data.json");
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        const json = await resp.json();
        
        setData(json);
        setLoading(false);
      } 
      catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Data loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {Array.isArray(data) && 
        data.map((item) => (
        <li key={item.id}>{item.name} {item.type} {item.image.url}</li>
      ))}
    </ul>
  );
}

export default JsonReader;
