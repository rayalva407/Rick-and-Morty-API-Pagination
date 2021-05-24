import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [loading, setLoading] = useState(true)
const [characters, setCharacters] = useState([])
const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character?page=1")
const [nextPageUrl, setNextPageUrl] = useState()
const [prevPageUrl, setPrevPageUrl] = useState()
const [pages, setPages] = useState()


  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
