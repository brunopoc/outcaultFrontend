import { put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { Console } from 'node:console';
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
        yield put(UserActionList.loginSuccess(dataResp));
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
        yield put(UserActionList.emailCheckSuccess());
    } else if (resp.status === 406) {
        yield put(UserActionList.emailCheckFailed());
    }
}