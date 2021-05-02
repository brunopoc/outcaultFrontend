import { all, takeLatest } from 'redux-saga/effects';

import { actionUserTypes } from './user';
import { sendLogin, emailCheckRequest } from './user/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(actionUserTypes.EMAIL_CHECK_REQUEST, emailCheckRequest),
        takeLatest(actionUserTypes.LOGIN_REQUEST, sendLogin),
    ]);
}
