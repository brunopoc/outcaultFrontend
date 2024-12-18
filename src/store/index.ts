import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { AuthState } from './ducks/auth';
import { SystemState } from './ducks/system';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
    auth?: AuthState;
    system?: SystemState;
}

const bindMiddleware = (middleware: any) => applyMiddleware(...middleware);

function configureStore(): Store<ApplicationState> {
    const sagaMiddleware = createSagaMiddleware();
    const store: Store<ApplicationState> = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware]),
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

const wrapper = createWrapper(configureStore);

export default wrapper;
