import { all, takeLatest } from 'redux-saga/effects';

import { actionAuthTypes } from './auth';
import { requestProfile } from './auth/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(actionAuthTypes.REQUEST_PROFILE, requestProfile),
    ]);
}
