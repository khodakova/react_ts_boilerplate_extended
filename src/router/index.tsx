import React from 'react';
import { lazy } from 'react';

const Dashboard = lazy(() => import('@src/pages/dashboard'));
const Login = lazy(() => import('@src/pages/login'));

export interface IRoute {
    path: string;
    element: React.ReactElement;
}

export enum RouteNames {
    LOGIN = '/login',
    DASHBOARD = '/'
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: <Login/> },
];

export const privateRoutes: IRoute[] = [
    { path: RouteNames.DASHBOARD, element: <Dashboard/> },
];