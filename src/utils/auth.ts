import { useSelector } from 'react-redux';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { ApplicationState } from '../store';

export const onlyNotAuth = (): void => {
    const token = Cookies.get('token');
    const logged = useSelector(
        (state: ApplicationState) => state.user.session.logged
    );
    if (logged || token) {
        Router.push('/home');
    }
};
