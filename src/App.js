import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [loading, setLoading] = useState(true)
const [characters, setCharacters] = useState([])
const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character?page=1")
const [nextPageUrl, setNextPageUrl] = useState()
const [prevPageUrl, setPrevPageUrl] = useState()
const [pages, setPages] = useState()

useEffect(() => {
  const url = currentPageUrl
  setLoading(true)
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data.results)
    setLoading(false);
    setNextPageUrl(data.info.next);
    setPrevPageUrl(data.info.prev);
    setPages(data.info.pages)
  }
  fetchData();
},[currentPageUrl])

function nextPage() {
  setCurrentPageUrl(nextPageUrl)
}

function prevPage() {
  setCurrentPageUrl(prevPageUrl)
}

function goToPage(num) {
  setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
}

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
