import { IHomeDuckInitialState } from "../../interfaces";

export const Types = {
    HOME_REQUEST: 'HOME_REQUEST',
    HOME_SUCCESS: 'HOME_SUCCESS',
    HOME_FAIL: 'HOME_FAIL'
};



const INITIAL_STATE: IHomeDuckInitialState = {
    loading: false,
    error: false,
    success: false,
    data: null
};

export default function Home(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

export const Creators = {

};
