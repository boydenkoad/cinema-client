import classNames from 'classnames'
import { Calendar } from '../../components/Calendar/Calendar'
import { Day } from '../../components/Day/Day'
import avatarimg from '../../assets/avatar.jpg'
import './MoviePage.scss'

interface MoviePageProps{
    className?:string
}

export const MoviePage:React.FC<MoviePageProps>=({className})=>{
    return(
        <div className={classNames('MoviePage',className)}>
            <div className='MoviePage__calendar-block'></div>
            <div className="MoviePage__columns">
                <div className="MoviePage__columns__left">
                    saf
                </div>
                <div className="MoviePage__columns__right">
                    safd
                </div>
            </div>
        </div>
    )
}