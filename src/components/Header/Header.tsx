import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './Header.scss'

interface HeaderProps {
    className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <div className={classNames('Header', className)}>
            <div className="Header__container">
                <div className="Header__logo">
                    <h1><span>РОЛБИ</span> СИНИМА</h1>
                </div>
                <div className="Header__nav">
                    <Link className='Header__nav__link' to={'/movies'}>фильмы</Link>
                    <Link className='Header__nav__link' to={'/session'}>Расписание</Link>
                </div>
            </div>
        </div>
    )
}
