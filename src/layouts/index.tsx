import React, { Fragment } from 'react';

import Header from './header';
import Footer from './footer';
import Main from './main';
import { useStore } from '@src/store/store';
import { observer } from 'mobx-react-lite';
import SidepanelMenu from '@src/layouts/sidepanelMenu';

const Layout: React.FC = () => {
    const { commonStore: { isAuth } } = useStore();

    return (
        <Fragment>
            { isAuth && <Header/> }
            { isAuth && <SidepanelMenu/> }
            <Main/>
            <Footer/>
        </Fragment>
    );
};

export default observer(Layout);
