import { makeAutoObservable } from 'mobx';
import { IUser, ServerError } from '@src/types';
import { deleteToken, getToken, saveToken } from '@src/helpers/token';

class CommonStore {
    error: ServerError | null = null;
    token: string | null = null;
    currentUser: IUser | null = null;
    isAuth = false;
    appLoaded = false;
    pageIndex = 0;

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * Установка статуса авторизованности
     * @param bool
     */
    setIsAuth = (bool: boolean) => {
        this.isAuth = bool;
    };

    /**
     * Установка токена в стор и sessionStorage
     * @param token
     */
    setToken = (token: string | null) => {
        if (token != null) {
            saveToken(token);
            this.token = token;
        }
    };

    /**
     * Установкапользователя в sessionStorage
     * @param user
     */
    setUser = (user: IUser) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.currentUser = user;
    };

    /**
     * Удаление токена при выходе из приложения
     */
    removeToken = () => {
        deleteToken();
        this.token = null;
    };

    /**
     * Удаление пользователя при выходе из приложения
     */
    removeUser = () => {
        sessionStorage.removeItem('user');
        this.currentUser = {} as IUser;
    };

    setAppLoaded = () => {
        this.appLoaded = true;
    };

    /**
     * Выбор вкладки
     * @param index
     */
    setPageIndex = (index: number) => {
        // console.log(index);
        this.pageIndex = index;
    };

    /**
     * Проверка авторизованности
     */
    checkAuth = () => {
        this.setIsAuth(!!getToken());
    }
}

export default CommonStore;

