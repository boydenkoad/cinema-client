import {Link, Route,Routes} from 'react-router-dom'
import { ChoosePlacePage } from './ChoosePlacePage/ChoosePlacePage'
import { MoviePage } from './MoviePage/MoviePage'
import { MoviesPage } from './MoviesPage/MoviesPage'
import { SessionPage } from './SessionPage/SessionPage'
import classNames from 'classnames'
import './pages.scss'

interface PagesProps{
    className?:string
}

export const Pages:React.FC<PagesProps>=({className})=>{
    return(
        <div className={classNames('Pages',className)}>
            <Routes>
                <Route path='/session/' element={<SessionPage/>}>
                    <Route path=':date'  element={<SessionPage/>}/>
                </Route>
                <Route path='/movies' element={<MoviesPage/>}/>
                <Route path='/movies' element={<MoviePage/>}/>
                <Route path='/movie/:slug/' element={<MoviePage/>}>
                    <Route path='/movie/:slug/:date' element={<MoviePage/>}/>
                </Route>
                <Route path='/movie/:slug/:date/choose-place' element={<ChoosePlacePage/>}/>
            </Routes>
        </div>
        
    )
}