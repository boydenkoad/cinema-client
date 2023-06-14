import {FC} from 'react'
import PlaceListElement, { IPlaceListElement } from './PlaceListElement'




const PlaceList: FC<{places:IPlaceListElement[]}>=({places})=>{
    return <div className='PlaceList'>
        {places.map(el=><PlaceListElement place={el.place} row={el.row}/>)}
    </div>

}
export default PlaceList