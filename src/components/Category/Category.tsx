import classNames from 'classnames'

import './Category.scss'

interface CategoryProps{
    raiting:string
    genre:string
    className?:string
}

export const Category:React.FC<CategoryProps>=({raiting,genre,className})=>{
    return <h3 className={classNames('Category',className)}><span>{genre} {raiting}</span></h3>
}