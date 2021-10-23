import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'

const SideNavComponent: FC = () => {
    const { currentUser } = useSelector((state: RootState) => state.authReducer)

    return (
        <div id="side-nav">
            <h1 className="side-nav__logo">GAMESTORE</h1>

            <div className="side-nav__list-container">
                <ul className="side-nav__list">
                    {!currentUser ? (
                        <li className="side-nav__item">
                            <Link to="/" className="side-nav__link">
                                <i className="fas fa-sign-in-alt" />
                                Sign In
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li className="side-nav__item">
                                <Link to="/home" className="side-nav__link">
                                    <i className="fas fa-chart-line" />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="side-nav__item">
                                <Link to="/users" className="side-nav__link">
                                    <i className="fas fa-users" />
                                    Users
                                </Link>
                            </li>
                            <li className="side-nav__item">
                                <Link to="/games" className="side-nav__link">
                                    <i className="fas fa-gamepad" />
                                    Games
                                </Link>
                            </li>
                            <li className="side-nav__item">
                                <Link to="/genres" className="side-nav__link">
                                    <i className="fas fa-th-large" />
                                    Genres
                                </Link>
                            </li>
                            <li className="side-nav__item">
                                <Link to="/features" className="side-nav__link">
                                    <i className="fas fa-cogs" />
                                    Features
                                </Link>
                            </li>
                            <li className="side-nav__item">
                                <Link
                                    to="/developers"
                                    className="side-nav__link"
                                >
                                    <i className="fas fa-laptop-code" />
                                    Developers
                                </Link>
                            </li>
                            <li className="side-nav__item">
                                <Link
                                    to="/publishers"
                                    className="side-nav__link"
                                >
                                    <i className="fas fa-upload" />
                                    Publishers
                                </Link>
                            </li>
                            <li className="side-nav__item">
                                <Link to="/logout" className="side-nav__link">
                                    <i className="fas fa-sign-out-alt" />
                                    Logout
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SideNavComponent
