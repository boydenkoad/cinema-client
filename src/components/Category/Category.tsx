import classNames from 'classnames'

import './Category.scss'



interface CategoryProps{
    rating:number
    genre:string
    className?:string
}

export const Category:React.FC<CategoryProps>=({rating,genre,className})=>{
    return <h3 className={classNames('Category',className)}><span>{genre} {rating}+</span></h3>
}