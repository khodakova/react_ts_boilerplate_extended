import {isBrowser} from '@src/utils';

const TOKEN_NAME = 'token';

export const saveToken = (token?: string) =>
    isBrowser && token ? localStorage.setItem(TOKEN_NAME, token) : null;
export const getToken = (): string | null =>
    isBrowser ? localStorage.getItem(TOKEN_NAME) : null;
export const deleteToken = () =>
    isBrowser ? localStorage.removeItem(TOKEN_NAME) : null;
