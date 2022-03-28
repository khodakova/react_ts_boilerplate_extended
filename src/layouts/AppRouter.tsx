import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IRoute, privateRoutes, publicRoutes, RouteNames } from '@src/router';
import { observer } from 'mobx-react-lite';
import { useStore } from '@src/store/store';

const AppRouter: React.FC = ({ children }) => {
    const { commonStore: { isAuth, checkAuth } } = useStore();

    useEffect(() => {
        checkAuth();
    }, []);

    if (!isAuth) {
        return (
            <Routes>
                { publicRoutes.map((route: IRoute) =>
                    <Route
                        path={ route.path }
                        key={ route.path }
                        element={ route.element }
                    />,
                ) }
                <Route path='*' element={ <Navigate replace to={ RouteNames.LOGIN }/>}/>
            </Routes>
        );
    } else {
        return (
            <Routes>
                { privateRoutes.map((route: IRoute) =>
                    <Route
                        path={ route.path }
                        key={ route.path }
                        element={ route.element }
                    />,
                ) }
                <Route path='*' element={ <Navigate replace to={ RouteNames.DASHBOARD }/> }/>
            </Routes>
        );
    }

};

export default observer(AppRouter);
