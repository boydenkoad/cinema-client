import classNames from 'classnames'
import avatar from '../../assets/avatar.jpg'
import { Category } from '../Category/Category'
import { MovieSessionTime } from '../MovieSessionTime/MovieSessionTime'

import './MovieSessionCard.scss'
import { IMovieSessionCard } from '../../models/movieSessionCard.interface'

interface MovieSessionCardProps extends IMovieSessionCard{
  className?:string
}

export const MovieSessionCard: React.FC<MovieSessionCardProps> = ({className,id,name,poster,rating,sessions,slug,genre}) => {
  return (
    <div className={classNames("MovieSessionCard",className)}>
      <div className="MovieSessionCard__left-column" style={{backgroundImage:`url(${poster})`}}></div>
      <div className="MovieSessionCard__right-column">
        <section>
          <h2 className='MovieSessionCard__right-column__title'>{name}</h2>
          <Category genre={genre} rating={rating} className='MovieSessionCard__right-column__category'/>
          <div className='MovieSessionCard__right-column__time-list'>
            {sessions.map(session=><MovieSessionTime key={session.id} price={session.price} time={session.time} hall={session.cinemaHall} 
            className='MovieSessionCard__right-column__time-list__element'/>)}
          </div>
        </section>

      </div>
    </div>
  )
}
