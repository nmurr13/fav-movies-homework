import Movie from "./Movie"
// the component function
const Movies = (props) => {

  //The Components Returned JSX
  return ( <div className="Movies">
    {props.movies.map(value => (
      <Movie name = {value.name} year = {value.year} rating = {value.rating}  />
    ))}
    </div>)
  }

// export the component
export default Movies