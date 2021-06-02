import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" href="#">Navbar</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        exact={true}
                        activeClassName="active"
                        className="nav-item nav-link"
                        to="/">home</NavLink>
                    <NavLink
                        exact={true}
                        activeClassName="active"
                        className="nav-item nav-link"
                        to="/login">login</NavLink>
                    <NavLink
                        exact={true}
                        activeClassName="active"
                        className="nav-item nav-link "
                        to="/about">about</NavLink>
                </div>
            </div>
        </nav>
    )
}
