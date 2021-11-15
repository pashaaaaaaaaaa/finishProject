import './App.css';

import ResultsPage from './ResultsPage/ResultsPage'
import HomePage from './HomePage/HomePage'
import  Breakfast from './Breakfast'
import  Lunch from './Lunch'
import  Dessert from './Dessert'
import { useState } from 'react';

function App() {
  const [page, setPage ]=useState("home")
  const[data, setData]=useState([])
  const [resultsTitle, setResultsTitle]=useState('')

  const clickBreakfast=()=>{
    setPage("breakfast")
  }
  const clickLunch=()=>{
    setPage("lunch")
  }
  const clickDessert=()=>{
    setPage("dessert")
  }
  const goHome=()=>{
      setPage("home")
  }

                                                       // ===== функция для запроса на сервера ====//

  const searchAction=(value)=>{
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${value}&apiKey=f9d550c6d3fe4e1a90557f7e52a75b77`)
      .then(response => response.json())
      .then(data => {
          setData(data.results)
          setResultsTitle(value)
          setPage("results")
      })
  }

  console.log('home', page)
  return (
    <div className="App">
        {page==="results" && <ResultsPage data={data} goHome={goHome} resultsTitle={resultsTitle}/>}
        {page==="home" && <HomePage clickBreakfast={clickBreakfast} 
        clickLunch={clickLunch}
        clickDessert={clickDessert}
        searchAction={searchAction}/>}
        {page==="breakfast" && <Breakfast goHome={goHome} />}
        {page==="lunch" && <Lunch goHome={goHome} />}
        {page==="dessert" && <Dessert goHome={goHome} />}
    </div>
  );
}

export default App;
