import React from 'react';
import { ReactComponent as HamburgerIcon } from '../assets/images/ic-menu_link.svg';
import { ReactComponent as SupportIcon } from '../assets/images/ic-contact_support.svg';
import { ReactComponent as MessageIcon } from '../assets/images/message/active.svg';
import { ReactComponent as UserIcon } from '../assets/images/ic-user.svg';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="is-flex header-left">
                        <div className="hamburger-icon">
                            <HamburgerIcon />
                        </div>
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="is-hidden-desktop">
                            <MessageIcon />
                        </div>
                    </div>
                    <div>
                        <ul className="header-links is-hidden-touch">
                            <li>
                                <div className="is-flex">
                                    <SupportIcon style={{ marginRight: 10 }} />
                                    <h1>Contact Support</h1>
                                </div>
                            </li>
                            <li>
                                <MessageIcon />
                            </li>
                            <li>
                                <UserIcon />
                            </li>
                            <li>
                                <img src={require('../assets/images/ic-power_settings_new.svg')} alt="ic-power_settings_new" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;