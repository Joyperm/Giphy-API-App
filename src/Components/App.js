import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

import SearchForm from "./SearchForm";
import GifList from "./GifList";

// function App() {
//   const [data, setData] =useState([]);
//   const [query, setQuery] = useState('cats');
//   const [isLoading, setIsLoading] = useState(true);
//   const performSearch = (value) => setQuery(value);

//   useEffect(()=>{
//     fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_k
// ey=dc6zaTOxFJmzC`) 
// .then(response => response.json())
// .then(data => setData(data.data))
// .catch(error => console.log('Error fetching and paring data',
//   error))
//   }, [query]);

//   return (
//     <>
//       <div className="main-header">
//         <div className="inner">
//           <h1 className="main-title">GifSearch</h1>
//           <SearchForm />
//         </div>
//       </div>
//       <div className="main-content">
//         <GifList data={data}/> {/* passdown data state */}

//       </div>
//     </>
//   );
// }

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("disney");
  const [isLoading, setIsLoading] = useState(true);

  // update query state
  const performSearch = (value) => setQuery(value);

  useEffect(() => {
    axios(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key={YourKey}`
    )
      .then((response) => setData(response.data.data))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, [query]); // add dependency

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {
          isLoading ? <p>Loading...</p> : <GifList data={data} /> // passdown data state
        }
      </div>
    </>
  );
}

export default App;
