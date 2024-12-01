import { put } from 'redux-saga/effects';
import Router from 'next/router';
import { ActionsList as UserActionList } from '.';
import { ActionsList as SystemActionList } from '../system';

export function* requestLogin(data) {
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
            yield put(UserActionList.loginSuccess(dataResp));
        }
        yield put(SystemActionList.finishLoading());
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        yield put(SystemActionList.finishLoading());
    }
}

export function* requestLogout() {
    Router.push('/login');
    yield;
}
