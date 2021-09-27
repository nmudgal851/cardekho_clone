import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { ArrowDropDown, AccountCircle, Room } from '@mui/icons-material'
import './Navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-header">
                    <div className="navbar-header-left">
                        <div className="navbar-header-left-logo">
                            <img src="https://stimg.cardekho.com/pwa/img/CarDekho-Logo.svg" alt="" />
                        </div>
                        <div className="navbar-header-left-search">
                            <div className='navbar-input'>
                                <input type='text' placeholder='Search Cars or brands eg. Swift, or Maruti'/>
                            </div>  
                            <div className='navbar-search-icon'>
                                <SearchIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-header-right">
                        <div className="languages">
                            <div className="language-name">
                                <p>English</p>
                            </div>
                            <div className="language-dropmenu">
                                <ArrowDropDown/>
                            </div>
                        </div>
                        <div className="login-register">
                            <button>
                                <span>
                                    <AccountCircle/>
                                </span>
                                <p>
                                    Login/Register
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="navbar-footer">
                    <div className="navbar-footer-left">
                        <div className="navbar-footer-left-categories">
                            <div className="navbar-footer-left-categories-name">
                                <p>NEW CAR</p>
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu">
                                <ArrowDropDown/>
                            </div>
                            <div className="navbar-footer-left-categories-name">
                                <p>USED CAR</p>
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu">
                                <ArrowDropDown/>
                            </div>
                            <div className="navbar-footer-left-categories-name" style={{marginRight: '18px'}}>
                                <p>SELL CAR</p>
                            </div>
                            <div className="navbar-footer-left-categories-name" style={{marginRight: '15px'}}>
                                <p>COMPARE CARS</p>
                            </div>
                            <div className="navbar-footer-left-categories-name">
                                <p>NEWS & REVIEWS</p>
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu">
                                <ArrowDropDown/>
                            </div>
                            <div className="navbar-footer-left-categories-name">
                                <p>CARDEKO VENTURES</p>
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu">
                                <ArrowDropDown/>
                            </div>
                            <div className="navbar-footer-left-categories-name">
                                <p>MORE</p>
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu">
                                <ArrowDropDown/>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-footer-right">
                        <div className="navbar-footer-right-city">
                            <div className="navbar-location">
                                <Room/>
                            </div>
                            <div className="navbar-select">
                                <span>
                                    Select City
                                </span>
                            </div>
                            <div className="navbar-dropdown">
                                <ArrowDropDown/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
