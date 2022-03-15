import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import './App.css';
import People from './components/People';
import Pagination from './components/Pagination';

function App() {

  const [people, setPeople] = useState([]);

  const url = "https://search.torre.co/people/_search/?";

  const fetchPeople = () => {
    fetch(url,{method: 'POST'})
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchPeople(url);
  }, [])

  return (
    <>
      <div className="container">
          <Header brand="torre" />
          <div className="App">
              <People people={people}/>  
          </div>
      </div>
      </>
  );
}

export default App;
