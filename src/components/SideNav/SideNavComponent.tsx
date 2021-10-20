import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNavComponent: FC = () => {
    return (
        <div id="side-nav">
            <h1 className="side-nav__logo">GAMESTORE</h1>

            <div className="side-nav__list-container">
                <ul className="side-nav__list">
                    <li className="side-nav__item">
                        <Link to="/" className="side-nav__link">
                            <i className="fas fa-chart-line" />
                            Dashboard
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/" className="side-nav__link">
                            <i className="fas fa-chart-line" />
                            Users
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/" className="side-nav__link">
                            <i className="fas fa-chart-line" />
                            Games
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/genres" className="side-nav__link">
                            <i className="fas fa-chart-line" />
                            Genres
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/features" className="side-nav__link">
                            <i className="fas fa-chart-line" />
                            Features
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/developers" className="side-nav__link">
                            <i className="fas fa-chart-line" />
                            Developers
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/" className="side-nav__link">
                            <i className="fas fa-chart-line" />
                            Publishers
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavComponent
