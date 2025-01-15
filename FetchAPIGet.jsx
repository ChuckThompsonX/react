import React, { useState, useEffect } from 'react';

function App() {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch data here
    fetch('https://chuckthompsonx.com')
      .then((resp) => { resp.json() })
      .then((json) => { setData(json) })
      .catch((err) => { console.log(err.message) });
  }, []);

  return (
    <div>
      {data ? {JSON.stringify(data, null, 2)} : 'Data loading...'}
    </div>
  );
}

export default App;
