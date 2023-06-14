import { useNavigate } from "react-router-dom"

export const useCalendar = () =>{
    const navigate = useNavigate()

    const handleChangeUrl = (date:string)=>navigate(date)
    
    const getNextDay=(nextDay:number)=>{
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
    date.setDate(date.getDate())
    const currentDateObject = {
        day:date.getDate(),
        month:date.getMonth() + 1,
        year:date.getFullYear()
    }


    const dateId:string = `${currentDateObject.day}-${currentDateObject.month < 10 ?`0${currentDateObject.month}`:currentDateObject.month}-${currentDateObject.year}`


    return {getNextDay,dateId,handleChangeUrl}
    
} 

