import React, {useEffect, useState} from 'react';
import './App.css';
import Recipes from './Recipes.js'


function App() {

  const appId = '081faf93'
  const appKey = 'f992861a1e7ad4daf6180afc96e859e7'
  
  const [recipes, setResipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=20`

  const getRecipts = async () => {
    const response = await fetch(exampleReq)
    const data = await response.json()
    setResipes(data.hits)
  }

  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }

  useEffect(() => {
    getRecipts()
  }, [query])


  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' style={{marginTop: '50px'}} type='text' value={search} placeholder={'Searching for beef, chicken...'} onChange={updateSearch}/>&nbsp;
        <button className='search-button' style={{marginTop: '50px'}} type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map( (item, index) => (
          <Recipes key={index} 
                  title={item.recipe.label} 
                  calories={item.recipe.calories}
                  image={item.recipe.image}
                  ingredients={item.recipe.ingredients}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
