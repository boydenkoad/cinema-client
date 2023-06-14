import {FC} from 'react'

export interface IPlaceListElement{
    row:number,
    place:number
}

const PlaceListElement: FC<IPlaceListElement>=({place,row})=>{
    return <span>{row}/{place}, </span>

}
export default PlaceListElement