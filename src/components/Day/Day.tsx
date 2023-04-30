
import classNames from 'classnames'
import { useParams } from 'react-router-dom'
import './Day.scss'

interface Day{
    date?:number
    month?:string
    className?:string
    toDay?:string
    nextDay:number
}

enum WeekDays{
    'Вс','Пн','Вт','Ср','Чт','Пт','Сб'
}

const weekDays:string[] = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
const months:string[] = ['Январь','Февраль','Март','Апрель','Май','Июнь','Август','Сентябрь',"Ноябрь","Декабрь"]

const dateToString = (day:number,month:number,year:number)=>{
    return `${day}-${month<10?`0${month}`:month}-${year}`
}

export const Day:React.FC<Day>=({className,date,toDay,nextDay})=>{

    const today:string = 'Сегодня'
    const tomorrow:string = 'Завтра'

    const {id} = useParams()


    const currentDay = new Date()
    currentDay.setDate(currentDay.getDate() + nextDay)
    const month =  months[currentDay.getMonth()]
    let weekDay =  WeekDays[currentDay.getDay()]
    let currentMonth = currentDay.getMonth() + 1
    let year = currentDay.getFullYear()
    const day = currentDay.getDate()

    const isToday:boolean = id === dateToString(day,currentMonth,year)


    if (nextDay === 0) weekDay = today
    if(nextDay === 1) weekDay = tomorrow






    return <div className={classNames(isToday ?'Day Day__current_day': "Day",className)}>
        <div className="Day__number-of-the-month"><span>{day}</span></div>
        <div className="Day__day-info">
            <div className="Day__day-info__week">{weekDay}</div>
            <div className="Day__day-info__month">{month}</div>
        </div>
    </div>
}