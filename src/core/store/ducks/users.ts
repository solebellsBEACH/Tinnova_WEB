import { IUsersDuckInitialState } from "../../interfaces";

export const Types = {
    USERS_REQUEST: 'USERS_REQUEST',
    USERS_SUCCESS: 'USERS_SUCCESS',
    USERS_FAIL: 'USERS_FAIL'
};



const INITIAL_STATE: IUsersDuckInitialState = {
    loading: false,
    error: false,
    success: false,
    data: null
};

export default function Users(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload
            };
        case Types.USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export const Creators = {
    UsersRequest: () => ({
        type: Types.USERS_REQUEST,
    }),
    UsersSuccess: (payload: any) => ({
        type: Types.USERS_SUCCESS,
        payload
    }),
    UsersFail: () => ({
        type: Types.USERS_FAIL
    }),
};
