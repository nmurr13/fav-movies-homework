import Movie from "./Movie"
// the component function
// const Movies = (props) => {

//     //The Components Returned JSX
//     return <div className="Movies"> <Movie /></div>
// }

const Mapper= (props) => {
    const Movies = [1,2,3,4,5,6]
    return (<div> {Movies.map(value => <h1>{value}</h1>)}</div>)
  }

// export the component
export default Movies