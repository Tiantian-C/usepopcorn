import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
//       <p>The Rating is {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating message={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating maxRating={10} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
