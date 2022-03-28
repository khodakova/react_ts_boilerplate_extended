import React, { useEffect } from 'react';
import LogoutSvg from '@icons/logout.svg';
import { HEADERS } from '@src/router';
import { useStore } from '@src/store/store';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const Header: React.FC = () => {
    const { commonStore: { section, setSection } } = useStore();
    const location = useLocation();

    useEffect(() => {
        const foundSection = HEADERS.find(item =>
            item.to === location.pathname) || HEADERS[0];
        setSection(foundSection);
    }, []);

    const {
        commonStore: { setIsSidepanelVisible },
        authStore: { logout },
    } = useStore();

    return (
        <>
            <header className='header'>
                <div className='logo-header'>
                    <Link to='/' className='box-img-flex'>
                        <img width={ 60 } src='/static/images/logo.png' alt='logo'/>
                    </Link>
                </div>
                <div className='menu'>
                    <ul>
                        { HEADERS.map(item => (
                            <li
                                onClick={ () => setSection(item) }
                                key={ item.name }
                                className={ section.name === item.name ? 'active' : '' }
                            >
                                <Link to={ item.to }>
                                    <span>{ item.label }</span>
                                </Link>
                            </li>
                        )) }
                        <li onClick={ logout }>
                            <LogoutSvg className='header__logout'/>
                        </li>
                    </ul>
                </div>
                <a
                    onClick={ setIsSidepanelVisible }
                    className='btn-menu-burger'
                    href='#'
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </header>
        </>
    );
};

export default observer(Header);
