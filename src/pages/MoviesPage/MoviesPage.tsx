import classNames from 'classnames'
import { MoviePoster } from '../../components/MoviePoster/MoviePoster'

import './MoviesPage.scss'


interface MoviesPageProps{
    className?:string
}

export const MoviesPage:React.FC<MoviesPageProps>=({className})=>{
    return(
        <div className={classNames('MoviesPage',className)}>
            <MoviePoster className='MoviesPage__movie-poster'/>
            <MoviePoster className='MoviesPage__movie-poster'/>
            <MoviePoster className='MoviesPage__movie-poster'/>
            <MoviePoster className='MoviesPage__movie-poster'/>
            <MoviePoster className='MoviesPage__movie-poster'/>
            <MoviePoster className='MoviesPage__movie-poster'/>
        </div>
    )
}