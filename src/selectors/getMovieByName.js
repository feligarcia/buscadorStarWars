


const getMovieByName =(name, movies) => {
  name = name.toLocaleLowerCase()
  return movies.filter(movie=>movie.name.toLocaleLowerCase().includes(name)
  )
}
export default getMovieByName