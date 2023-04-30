
import classNames from 'classnames'
import './ChoosePlacePage.scss'

interface ChoosePlacePageProps{
    className?:string
}

export const ChoosePlacePage:React.FC<ChoosePlacePageProps>=({className})=>{
    return(
        <div className={classNames('ChoosePlacePage',className)}>
            ChoosePlacePage
        </div>
    )
}