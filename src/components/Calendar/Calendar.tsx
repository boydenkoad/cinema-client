import React, { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import { Russian } from "flatpickr/dist/l10n/ru.js"
import { BaseOptions } from 'flatpickr/dist/types/options';
import classNames from 'classnames';

import "flatpickr/dist/themes/dark.css";
import './Calendar.scss'

interface CalendarProps{
    className?:string
    onClickHandle:(date:string)=>void;
}

const options:Partial<BaseOptions> = {
    mode:'single',
    dateFormat:'d-m-Y',
    locale:Russian,
    animate:true,
    minDate:Date.now()
}



export const Calendar:React.FC<CalendarProps>=({className,onClickHandle})=>{


    return (
        <Flatpickr
        
        onChange={(el,date,self)=>onClickHandle(date)}
        className={classNames('Calendar',className)}
        options={options}
        type='button'
        />
    )
}


