import React, { Fragment } from 'react';

import Header from './header';
import Footer from './footer';
import Main from './main';
import { useStore } from '@src/store/store';
import { observer } from 'mobx-react-lite';

const Layout: React.FC = () => {
    const { commonStore: { isAuth } } = useStore();

    return (
        <Fragment>
            { isAuth && <Header/> }
            <Main/>
            <Footer/>
        </Fragment>
    );
};

export default observer(Layout);
