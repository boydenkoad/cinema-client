import React, { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import { Russian } from "flatpickr/dist/l10n/ru.js"
import { BaseOptions } from 'flatpickr/dist/types/options';
import "flatpickr/dist/themes/dark.css";
import './Calendar.scss'
import classNames from 'classnames';

interface CalendarProps{
    className?:string
}

const options:Partial<BaseOptions> = {
    mode:'single',
    dateFormat:'d-m-Y',
    locale:Russian,
}


export const Calendar:React.FC<CalendarProps>=({className})=>{

    const [date,setDate] = useState<any>()

    console.log(date)

    return (
        <Flatpickr
            onChange={(el,currentDate,data)=>setDate(currentDate)}
            className={classNames('Calendar',className)}
            options={options}
            type='button'
        >
        </Flatpickr>
    )
}


