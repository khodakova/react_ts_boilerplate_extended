import React, { useState } from 'react';
import { goURL } from '@src/helpers/router';
import { useOpen } from '@src/hooks/useOpen';

interface IMenuItem {
    name: string;
    href: string;
    label: string;
}

export const HEADERS: Array<IMenuItem> = [
    {
        name: '1',
        href: '#',
        label: 'Menu 1',
    },
    {
        name: '2',
        href: '#',
        label: 'Menu 2',
    },
];

const Header: React.FC = () => {
    const [ section, setSection ] = useState(HEADERS[0]);
    const { open, handleOpen, handleClose } = useOpen();

    return (
        <>
            <header className='header fixed'>
                <div className='logo-header'>
                    <div onClick={ () => goURL('/') } className='box-img-flex'>
                        <img width={ 60 } src='/static/images/logo.png' alt='logo'/>
                    </div>
                </div>
                <div className='menu'>
                    <ul>
                        { HEADERS.map(item => (
                            <li
                                onClick={ () => setSection(item) }
                                key={ item.name }
                                className={ section.name === item.name ? 'active' : '' }
                            >
                                <a href={ item.href }>
                                    <span>{ item.label }</span>
                                </a>
                            </li>
                        )) }
                    </ul>
                </div>
                <a
                    onClick={ () => handleOpen(true) }
                    className='btn-menu-mobile'
                    href='#'
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </header>

            <div
                className={ `mobile-menu ${ open ? 'show' : '' }` }
                onClick={ (e) => e.stopPropagation() }
            >
                <div className='m-menu__title'>
                    <a
                        onClick={ handleClose }
                        href='#'
                        className='m-menu-close'
                    >
                        +
                    </a>
                </div>
                <ul>
                    { HEADERS.map(item => (
                        <li key={ item.name }>
                            <a href={ item.href }>{ item.label }</a>
                        </li>
                    )) }
                </ul>
            </div>
            <div
                className={ `overlay-menu ${ open ? 'active' : '' }` }
                onClick={ handleClose }
            />
        </>
    );
};

export default Header;
