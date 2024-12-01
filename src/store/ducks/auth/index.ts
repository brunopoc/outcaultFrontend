import { Reducer } from 'redux';

export enum actionAuthTypes {
    LOGIN_REQUEST = '@user/login/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@user/login/LOGIN_SUCCESS',
    LOGIN_FAILED = '@user/login/LOGIN_FAILED',

    LOGOUT_REQUEST = '@user/login/LOGOUT_REQUEST',

    REGISTER_REQUEST = '@user/register/REGISTER_REQUEST',
    REGISTER_SUCCESS = '@user/register/REGISTER_SUCCESS',
    REGISTER_FAILED = '@user/register/REGISTER_FAILED',

    REQUEST_PROFILE = '@user/register/REQUEST_PROFILE',
}

type sessionData = {
    isAuthenticated: false;
    isLoading: false;
};

type userInfoData = {
    name?: string;
    email: string;
    type?: string;
    avatar?: string;
    blocked?: boolean;
    verified?: boolean;
};

export interface AuthState {
    info?: userInfoData;
    session: sessionData;
}

export const ActionsList = {
    loginRequest: ({ email, password }): any => ({
        type: actionAuthTypes.LOGIN_REQUEST,
        payload: { email, password },
    }),
    loginSuccess: (data): any => ({
        type: actionAuthTypes.LOGIN_SUCCESS,
        payload: { data },
    }),
    logoutRequest: (): any => ({
        type: actionAuthTypes.LOGOUT_REQUEST,
    }),
    registerRequest: (data): any => ({
        type: actionAuthTypes.REGISTER_REQUEST,
        payload: { data },
    }),
    registerSuccess: (data): any => ({
        type: actionAuthTypes.REGISTER_SUCCESS,
        payload: { data },
    }),
    profileRequest: (data): any => ({
        type: actionAuthTypes.REQUEST_PROFILE,
        payload: { data },
    }),
};

const INITIAL_STATE: AuthState = {
    session: {
        isAuthenticated: false,
        isLoading: false,
    },
    info: {
        email: '',
    },
};

const reducer: Reducer<any> = (
    // eslint-disable-next-line default-param-last
    state = INITIAL_STATE,
    reduceAction: { payload: any; type: actionAuthTypes },
) => {
    switch (reduceAction.type) {
        case actionAuthTypes.LOGIN_SUCCESS:
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
        case actionAuthTypes.LOGOUT_REQUEST:
            return {
                ...state,
                session: {
                    logged: false,
                    token: '',
                },
            };
        default:
            return state;
    }
};

export default reducer;
