
import classNames from 'classnames'
import { Link, useParams} from 'react-router-dom'
import { Calendar } from '../../components/Calendar/Calendar'
import { Day } from '../../components/Day/Day'
import { MovieSessionCard } from '../../components/MovieSessionBlock/MovieSessionCard'
import { useCalendar } from '../../app/useCalendar'

import './SessionPage.scss'
import { sessionService } from '../../services/session.service'
import { useEffect, useState } from 'react'
import { IMovieSessionCard } from '../../models/movieSessionCard.interface'
interface SessionPageProps{
    className?:string
}

export const SessionPage:React.FC<SessionPageProps>=({className})=>{

    const [sessions,setSessions] = useState<IMovieSessionCard[]>([])
    const {dateId,getNextDay,handleChangeUrl} = useCalendar()
    const {date} = useParams()

    useEffect(()=>{
        setSessions(sessionService.getSessions(date||getNextDay(0)))
    },[date])

    return(
        <div className={classNames('SessionPage',className)}>
                <div className="SessionPage__calendar-block">
                    <div className="SessionPage__calendar-block__days">
                        <div className="SessionPage__calendar-block__days__info">
                            <span>Расписание сеансов на Сегодня</span>
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
                            <Calendar onClickHandle={handleChangeUrl}/>
                        </div>
                    </div>
                </div>
                <div className="SessionPage__sissions-block">
                    <div className="Wrapper Wrapper__sissions-block">
                        {sessions.map(movie=><MovieSessionCard
                        key={movie.id}
                        genre={movie.genre}
                        sessions={movie.sessions}
                        id={movie.id}
                        name={movie.name}
                        poster={movie.poster}
                        rating={movie.rating}
                        slug={movie.slug}
                        className='SessionPage__sissions-block__element'/>)}
                    </div>
                    
                </div>
        </div>
    )
}