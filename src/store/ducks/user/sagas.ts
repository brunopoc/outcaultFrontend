import { put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { ActionsList as UserActionList } from '.';

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
        Cookies.set('token', dataResp.token);
        yield put(UserActionList.loginSuccess(dataResp));
    }
}

export function* requestProfile(value) {
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
            Cookies.set('token', dataResp.token);
            yield put(UserActionList.loginSuccess(dataResp));
            console.log('token atualizado meu bom!');
        }
        /*
        if (dataResp.message) {
            yield put(UserActionList.logoutRequest());
        } else {
            yield put(UserActionList.tokenRetrieveSuccess(dataResp));
        } */
    } catch (err) {
        // yield put(UserActionList.logoutRequest());
    }
}

export function* emailCheckRequest(data) {
    const { email } = data.payload;

    const resp = yield fetch(
        `http://localhost:4000/api/v1/user/email/alreadyin`,
        {
            method: 'post',
            body: JSON.stringify({ email }, null, 2),
            headers: new Headers({
                'content-type': 'application/json',
            }),
        }
    );

    if (resp.status === 200) {
        Router.push('/login');
    } else if (resp.status === 406) {
        Router.push('/cadastro');
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
