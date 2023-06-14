import classNames from 'classnames'

import './MovieSessionTime.scss'

interface MovieSessionTimeProps{
    className?:string
    price:number
    time:string
    hall:number
}

export const MovieSessionTime:React.FC<MovieSessionTimeProps>=({className,price,time,hall})=>{
    return(
        <div className={classNames("MovieSessionTime",className)}>
            <div className='MovieSessionTime__time'>
                <div className='MovieSessionTime__time__clock'>{time}</div>
                <div className='MovieSessionTime__time__price'>{price} Р</div>
            </div>
            <div className='MovieSessionTime__hall'>{hall} зал</div>
        </div>
    )
}