import { Reducer } from 'redux';

export enum actionSystemTypes {
    START_LOADING = '@system/START_LOADING',
    FINISH_LOADING = '@system/FINISH_LOADING',
    SUCCESS_LOADING = '@system/SUCCESS_LOADING',
    ERROR_LOADING = '@system/ERROR_LOADING',
    SHOW_MESSAGE = '@system/SHOW_MESSAGE',
}

export interface SystemState {
    loading: boolean;
    error: boolean;
    message?: string;
}

export const ActionsList = {
    startLoading: (): any => ({
        type: actionSystemTypes.START_LOADING,
        payload: {},
    }),
    finishLoading: (): any => ({
        type: actionSystemTypes.FINISH_LOADING,
        payload: {},
    }),
};

const INITIAL_STATE: SystemState = {
    loading: false,
    error: false,
};

// eslint-disable-next-line default-param-last
const reducer: Reducer<SystemState> = (state = INITIAL_STATE, reduceAction) => {
    switch (reduceAction.type) {
        case actionSystemTypes.START_LOADING:
            return {
                ...state,
                loading: true,
            };
        case actionSystemTypes.FINISH_LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
