import classNames from 'classnames'

import './MovieSessionTime.scss'

interface MovieSessionTimeProps{
    className?:string
}

export const MovieSessionTime:React.FC<MovieSessionTimeProps>=({className})=>{
    return(
        <div className={classNames("MovieSessionTime",className)}>
            <div className='MovieSessionTime__time'>
                <div className='MovieSessionTime__time__clock'>9:30</div>
                <div className='MovieSessionTime__time__price'>100 Р</div>
            </div>
            <div className='MovieSessionTime__hall'>1 зал</div>
        </div>
    )
}