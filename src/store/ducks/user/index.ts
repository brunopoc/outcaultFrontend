import { Reducer } from 'redux';

export enum actionUserTypes {
    EMAIL_CHECK_REQUEST = '@user/EMAIL_CHECK_REQUEST',
    EMAIL_CHECK_SUCCESS = '@user/EMAIL_CHECK_SUCCESS',
    EMAIL_CHECK_FAILED = '@user/EMAIL_CHECK_FAILED',

    LOGIN_REQUEST = '@user/login/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@user/login/LOGIN_SUCCESS',
    LOGIN_FAILED = '@user/login/LOGIN_FAILED',

    REGISTER_REQUEST = '@user/register/REGISTER_REQUEST',
    REGISTER_SUCCESS = '@user/register/REGISTER_SUCCESS',
    REGISTER_FAILED = '@user/register/REGISTER_FAILED',
}

type sessionData = {
    logged: boolean;
    emailStatus?: string;
    token?: string;
};

type userInfoData = {
    id?: string;
    name?: string;
    email: string;
    type?: string;
    avatar?: string;
    blocked?: boolean;
    verified?: boolean;
};

export interface UserState {
    info?: userInfoData;
    session: sessionData;
}

export const ActionsList = {
    emailCheckRequest: (email): any => ({
        type: actionUserTypes.EMAIL_CHECK_REQUEST,
        payload: email,
    }),
    loginRequest: ({ email, password }): any => ({
        type: actionUserTypes.LOGIN_REQUEST,
        payload: { email, password },
    }),
    loginSuccess: (data): any => ({
        type: actionUserTypes.LOGIN_SUCCESS,
        payload: { data },
    }),
};

const INITIAL_STATE: UserState = {
    session: {
        logged: false,
    },
    info: {
        email: '',
    },
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, reduceAction) => {
    switch (reduceAction.type) {
        case actionUserTypes.EMAIL_CHECK_REQUEST:
            return {
                ...state,
                info: {
                    ...state.info,
                    email: reduceAction.payload.email,
                },
            };
        case actionUserTypes.LOGIN_SUCCESS:
            return {
                ...state,
                session: {
                    logged: true,
                    token: reduceAction.payload.data.token,
                },
                info: {
                    ...state.info,
                    ...reduceAction.payload.data.data,
                },
            };
        default:
            return state;
    }
};

export default reducer;
