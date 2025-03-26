import {useState} from 'react';

const StarshipSearch = (props) => {
  
  const [searchShip, setSearchShip] = useState('');
  const [message, setMessage] = useState("Search for a starship by name")

  const handleSubmit = (e) => {
    // console.log(searchShip)
    e.preventDefault();
    props.filterShips(searchShip)
    setMessage(`Previous Search Query: ${searchShip}`)
    setSearchShip('')
  }

  return (
    <section>
      <h2>Search</h2>

      <h4>{message}</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor='ship'>Enter A Ship:</label>

        <input id="ship" type="text" value={searchShip}
          onChange={(e) => setSearchShip(e.target.value)}></input>

        <button type="submit" className="search-meta">Search</button>

      </form>
    </section>
  )
} 

export default StarshipSearch;