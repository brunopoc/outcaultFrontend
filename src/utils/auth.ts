import { useSelector } from 'react-redux';
import Router from 'next/router';
import { ApplicationState } from '../store';

export const onlyNotAuth = (): void => {
    const logged = useSelector(
        (state: ApplicationState) => state.user.session.logged
    );
    if (logged) {
        Router.push('/home');
    }
};
