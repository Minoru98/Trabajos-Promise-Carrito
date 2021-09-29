//import './assets/logo192.png';
//Components
import { useState, useEffect } from 'react'
import ListProducts from './components/ListProducts/ListProducts'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  const [fixedScroll, setFixedScroll] = useState(false)
  
  const urlPokeApi = 'https://pokeapi.co/api/v2/pokemon/'

  useEffect(() => {

    function onScrollWindow() {
      console.log(window.scrollY)
      if (window.scrollY > 161) {
        setFixedScroll(true)
      } else {
        setFixedScroll(false)
      }
    }

    getPokemons()
    
    window.addEventListener('scroll', onScrollWindow)
  }, [])

  const getPokemons = () => {
    fetch(urlPokeApi)
    .then ((response) => {
      return response.json()
    } )
    .then ( (data) => {
      console.log("pokemon data: ", data.results)
    })

  }


  return (
    //jsx
    <div className="App">
      <NavBar fixed={fixedScroll} />
      <ListProducts/>
      <ItemListContainer/>
    </div>
  )
}

export default App
