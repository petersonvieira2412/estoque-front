import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api')
        .then(response => response.json())
        .then(data => setData(data.message));
  }, []);

  return (
      <div>
        <h1>{data ? data : "Loading..."}</h1>
      </div>
  );
}

export default App;
