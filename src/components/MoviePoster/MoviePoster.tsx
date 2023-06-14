import { Category } from '../Category/Category'
import classNames from 'classnames'

import './MoviePosters.scss'



interface MoviePosterProps{
    className?:string
    poster:string,
    name:string,
    rating:number
}

export const MoviePoster:React.FC<MoviePosterProps>=({className,poster,name,rating})=>{
    return(
        <article className={classNames("MoviePoster",className)}>
            <div className="MoviePoster__movie-image">
                <img src={poster} alt="" />
            </div>
            <div className="MoviePoster__movie-title">
                <h2>{name}</h2>
            </div>
            <div className="MoviePoster__movie-raiting">
                <Category genre='фантастика' rating={rating}/>
            </div>
        </article>
    )
}