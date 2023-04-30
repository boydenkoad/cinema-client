
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import { Calendar } from '../../components/Calendar/Calendar'
import { Day } from '../../components/Day/Day'
import { MovieSessionBlock } from '../../components/MovieSessionBlock/MovieSessionBlock'
import './SessionPage.scss'

interface SessionPageProps{
    className?:string
}


function getNextDay(nextDay:number) {
    
    const date = new Date()
    
    date.setDate(date.getDate() + nextDay)

    const currentDate = {
        day:date.getDate(),
        month:date.getMonth() + 1,
        year:date.getFullYear()
    }

    const result = `${currentDate.day}-${currentDate.month < 10 ?`0${currentDate.month}`: currentDate.month}-${currentDate.year}`

    return result

}


const date = new Date()
date.setDate(date.getDate() + 1)
const currentDateObject = {
    day:date.getDate(),
    month:date.getMonth() + 1,
    year:date.getFullYear()
}




const dateId:string = `${currentDateObject.day}-${currentDateObject.month < 10 ?`0${currentDateObject.month}`:currentDateObject.month}-${currentDateObject.year}`

export const SessionPage:React.FC<SessionPageProps>=({className})=>{



    return(
        <div className={classNames('SessionPage',className)}>
                <div className="SessionPage__calendar-block">
                    <div className="SessionPage__calendar-block__days">
                        <div className="SessionPage__calendar-block__days__info">
                            <span>Расписани сеансов на Сегодня</span>
                        </div>
                        <div className="SessionPage__calendar-block__days__elements">
                            <Link to={getNextDay(0)}>
                                <Day toDay={dateId} nextDay={0} className='SessionPage__calendar-block__days__element'/>
                            </Link>
                            <Link to={getNextDay(1)}>
                                <Day toDay={dateId} nextDay={1} className='SessionPage__calendar-block__days__element'/>
                            </Link>
                            <Link to={getNextDay(2)}>
                                <Day toDay={dateId} nextDay={2} className='SessionPage__calendar-block__days__element'/>
                            </Link>
                            <Link to={getNextDay(3)}>
                                <Day toDay={dateId} nextDay={3} className='SessionPage__calendar-block__days__element'/>
                            </Link>
                            <Link to={getNextDay(4)}>
                                <Day toDay={dateId} nextDay={4} className='SessionPage__calendar-block__days__element'/>
                            </Link>
                            <Link to={getNextDay(5)}>
                                <Day toDay={dateId} nextDay={5} className='SessionPage__calendar-block__days__element'/>
                            </Link>
                            <Calendar className='SessionPage__calendar-block__days__element'/>
                        </div>
                       
                    </div>
                </div>
                <div className="SessionPage__sissions-block">
                    <div className="Wrapper Wrapper__sissions-block">
                        <MovieSessionBlock className='SessionPage__sissions-block__element'/>
                        <MovieSessionBlock className='SessionPage__sissions-block__element'/>
                        <MovieSessionBlock className='SessionPage__sissions-block__element'/>
                        <MovieSessionBlock className='SessionPage__sissions-block__element'/>
                        <MovieSessionBlock className='SessionPage__sissions-block__element'/>
                    </div>
                    
                </div>
        </div>
    )
}