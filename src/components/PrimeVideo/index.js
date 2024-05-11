import MoviesSlider from '../MoviesSlider'

import './index.css'
const PrimeVideo = props => {
  const {moviesList} = props
  const filterMoviesByGenre = genre => {
    return moviesList.filter(movie => movie.categoryId === genre)
  }
  const actionMovies = filterMoviesByGenre('ACTION')
  const comedyMovies = filterMoviesByGenre('COMEDY')
  return (
    <div className="primevideo-app-container">
      <img
        className="prime-video-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="genre">Action Movies</h1>
        <MoviesSlider movieList={actionMovies} />
        <h1 className="genre">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
