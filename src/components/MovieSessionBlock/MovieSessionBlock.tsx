import classNames from 'classnames'
import avatar from '../../assets/avatar.jpg'
import { Category } from '../Category/Category'
import { MovieSessionTime } from '../MovieSessionTime/MovieSessionTime'

import './MovieSessionBlock.scss'

interface MovieSessionBlockProps{
  className?:string
}

export const MovieSessionBlock: React.FC<MovieSessionBlockProps> = ({className}) => {
  return (
    <div className={classNames("MovieSessionBlock",className)}>
      <div className="MovieSessionBlock__left-column" style={{backgroundImage:`url(${avatar})`}}></div>
      <div className="MovieSessionBlock__right-column">
        <section>
          <h2 className='MovieSessionBlock__right-column__title'>Аватар: Путь воды</h2>
          <Category genre='Фантастика' raiting='6+' className='MovieSessionBlock__right-column__category'/>
          <div className='MovieSessionBlock__right-column__time-list'>
            <MovieSessionTime className='MovieSessionBlock__right-column__time-list__element'/>
            <MovieSessionTime className='MovieSessionBlock__right-column__time-list__element'/>
            <MovieSessionTime className='MovieSessionBlock__right-column__time-list__element'/>
            <MovieSessionTime className='MovieSessionBlock__right-column__time-list__element'/>
            <MovieSessionTime className='MovieSessionBlock__right-column__time-list__element'/>
            <MovieSessionTime className='MovieSessionBlock__right-column__time-list__element'/>
          </div>
        </section>

      </div>
    </div>
  )
}
