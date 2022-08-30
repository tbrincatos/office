import React, { useState } from "react";

import axios from "axios";
import "./App.css";

export default function App() {
  let [content, setContent] = useState("");
  function handleResponse(response) {
    setContent({
      quote: response.data.data.content,
      firstname: response.data.data.character.firstname,
      lastname: response.data.data.character.lastname,
    });
    console.log(response.data.data);
  }
  function searchQuote() {
    let apiUrl = `https://www.officeapi.dev/api/quotes/random`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleClick(event) {
    event.preventDefault();
    searchQuote();
  }
  return (
    <div className="App">
      <h1>the office</h1>
      <h2>Quote Generator</h2>
      <button onClick={handleClick}>Get quote</button>
      <div>{content.quote}</div>
      <div>
        {content.firstname} {content.lastname}
      </div>
    </div>
  );
}
