import avatarimage from '../../assets/avatar.jpg'
import { Category } from '../Category/Category'
import classNames from 'classnames'

import './MoviePosters.scss'

interface MoviePosterProps{
    className?:string
}

export const MoviePoster:React.FC<MoviePosterProps>=({className})=>{
    return(
        <article className={classNames("MoviePoster",className)}>
            <div className="MoviePoster__movie-image" style={{backgroundImage:`url(${avatarimage})`}}>
                {/* <img src={avatarimage} alt="" /> */}
            </div>
            <div className="MoviePoster__movie-title">
                <h2>Аватар: Путь воды</h2>
            </div>
            <div className="MoviePoster__movie-raiting">
                <Category genre='фантастика' raiting='6+'/>
            </div>
        </article>
    )
}