// the component function
const Movie = (props) => {

    //The Components Returned JSX
    return (<div className="Movie">
        <h1>{props.name}</h1>
        <h2>{props.year}</h2>
        <h2>{props.rating}</h2>

    </div>)
}

// export the component
export default Movie