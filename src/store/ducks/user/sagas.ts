import { put } from 'redux-saga/effects';
import Router from 'next/router';
import { ActionsList as UserActionList } from '.';
import { ActionsList as SystemActionList } from '../system';

export function* sendLogin(data) {
    const { email, password } = data.payload;
    const resp = yield fetch(`http://localhost:4000/api/v1/user/singin`, {
        method: 'post',
        body: JSON.stringify({ email, password }, null, 2),
        headers: new Headers({
            'content-type': 'application/json',
        }),
    });
    const dataResp = yield resp.json();

    if (resp.status === 200) {
        // Cookies.set('token', dataResp.token);
        yield put(UserActionList.loginSuccess(dataResp));
    }
}

export function* requestProfile(value) {
    yield put(SystemActionList.startLoading());
    try {
        const resp = yield fetch('http://localhost:4000/api/v1/getProfile', {
            method: 'get',
            headers: new Headers({
                'content-type': 'application/json',
                'x-access-token': value.payload.data.token,
            }),
        });
        const dataResp = yield resp.json();
        if (dataResp.token) {
            // Cookies.set('token', dataResp.token);
            yield put(UserActionList.loginSuccess(dataResp));
        }
        yield put(SystemActionList.finishLoading());
        /*
        if (dataResp.message) {
            yield put(UserActionList.logoutRequest());
        } else {
            yield put(UserActionList.tokenRetrieveSuccess(dataResp));
        } */
    } catch (err) {
        // yield put(UserActionList.logoutRequest());
        yield put(SystemActionList.finishLoading());
    }
}

export function* emailCheckRequest(data) {
    yield put(SystemActionList.startLoading());
    try {
        const { email } = data.payload;

        const resp = yield fetch(
            `http://localhost:4000/api/v1/user/email/alreadyin`,
            {
                method: 'post',
                body: JSON.stringify({ email }, null, 2),
                headers: new Headers({
                    'content-type': 'application/json',
                }),
            },
        );

        yield put(UserActionList.emailRecord(email));

        if (resp.status === 200) {
            Router.push('/login');
        } else if (resp.status === 406) {
            Router.push('/cadastro');
        }
        yield put(SystemActionList.finishLoading());
    } catch (err) {
        yield put(SystemActionList.finishLoading());
    }
}

export function* registerRequest(data) {
    const { email, password, name, nickname } = data.payload;

    const resp = yield fetch(`http://localhost:4000/api/v1/user/singup`, {
        method: 'post',
        body: JSON.stringify({ email, password, name, nickname }, null, 2),
        headers: new Headers({
            'content-type': 'application/json',
        }),
    });

    if (resp.status === 200) {
        Router.push('/login');
    } else if (resp.status === 406) {
        Router.push('/cadastro');
    }
}

export function* logoutRequest() {
    // yield Cookies.remove('token');
    Router.push('/login');
}
