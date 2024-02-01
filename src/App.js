import Movies from "./components/Movies"
import "./App.css";
function App() {

  const movies = [
    {
      name: "Stalker",
      year: "1979",
      rating: "NR",
  
    },
    {
      name: "Solaris",
      year: "1972",
      rating: "PG",
  
    },
    {
      name: "The Big Lebowski",
      year: "1998",
      rating: "R",
  
    },
    {
      name: "Hereditary",
      year: "2018",
      rating: "R",
  
    },
    {
      name: "The Thing",
      year: "1982",
      rating: "R",
     
  
    }
  ]

  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;