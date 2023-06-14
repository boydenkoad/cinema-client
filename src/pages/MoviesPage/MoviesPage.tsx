import classNames from 'classnames'
import { MoviePoster } from '../../components/MoviePoster/MoviePoster'

import './MoviesPage.scss'
import { Link } from 'react-router-dom'
import { useCalendar } from '../../app/useCalendar'
import {movies} from '../../app/data/data.moke'
import { getMovieUrl } from '../../config/url.config'


interface MoviesPageProps{
    className?:string
}

export const MoviesPage:React.FC<MoviesPageProps>=({className})=>{

    const movieList = movies.map(movie=><Link to={getMovieUrl(movie.slug)}>
        <MoviePoster className='MoviesPage__movie-poster' poster={movie.poster} name={movie.name} rating={movie.rating}/>
    </Link>)

    return(
        <div className={classNames('MoviesPage',className)}>
            {movieList}
        </div>
    )
}