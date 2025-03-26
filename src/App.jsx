import { useState, useEffect } from 'react'
import * as starshipService from './services/starshipService.js'
import StarshipList from './components/StarshipList/StarshipList.jsx';
import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx';


import './App.css'

function App() {

  const [starshipsData, setStarshipsData] = useState([]);

  const [displayedStarships, setDisplayedStarships] = useState([]);

  const filterShips = (searchShip) => {

    const searchResults = starshipsData.filter((el) => 
      el.name.toLowerCase().includes(searchShip.toLowerCase()))

    setDisplayedStarships(searchResults)
  }

  useEffect(() => {

    const fetchData = async () => {
      const data = await starshipService.index();
      // console.log('Data2:', data);

      setStarshipsData(data)
      setDisplayedStarships(data)
      }

      fetchData();
  }, []);

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch filterShips={filterShips}/>
      <section>
      <StarshipList starshipsData={displayedStarships}/>
      </section>
    </main>
  )

}

export default App;
