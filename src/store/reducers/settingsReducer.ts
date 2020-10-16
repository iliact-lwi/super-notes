import { 
    SETTINGS_HOME_NEXT_SLIDE, 
    SETTINGS_HOME_PREV_SLIDE, 
    SETTINGS_HOME_NOTES_IN_SLIDE, 
    SETTINGS_HOME_SHOW_DATE, 
    SETTINGS_HOME_SHOW_TIME,
    SETTINGS_HOME_THEME_WIDGET,
    SETTINGS_HOME_THEME_CURRENT,
    SETTINGS_HOME_THEME_TIME_DATE 
} from "../types";

import  { ActionTypes, settingsStateType } from "../actions";

const savedSettings: settingsStateType = JSON.parse(localStorage.getItem('settings') ||
    "{\"startSlide\": 0, \"endSlide\": 4, \"notesInSlide\": 4, \"showDate\": true, \"showTime\": true, \"homeThemeWidget\": \"dark\", \"homeThemeCurrent\": \"dark\", \"homeThemeTimeDate\": \"dark\"}");
const initialState: settingsStateType = savedSettings;

export const settingsReducer = (state: settingsStateType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case SETTINGS_HOME_NEXT_SLIDE: {
            const currentState = { ...state, startSlide: state.endSlide, endSlide: (state.endSlide + state.notesInSlide) };
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }
        case SETTINGS_HOME_PREV_SLIDE: {
            const currentState = { ...state, startSlide: (state.startSlide - state.notesInSlide), endSlide: (state.endSlide - state.notesInSlide) }
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }
        case SETTINGS_HOME_NOTES_IN_SLIDE: {
            const currentState = { ...state, notesInSlide: action.quantity, startSlide: 0, endSlide: action.quantity }
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }
        case SETTINGS_HOME_SHOW_DATE: {
            const currentState = { ...state, showDate: action.action }
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }
        case SETTINGS_HOME_SHOW_TIME: {
            const currentState = { ...state, showTime: action.action }
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }
        case SETTINGS_HOME_THEME_WIDGET: {
            const currentState = { ...state, homeThemeWidget: action.theme }
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }
        case SETTINGS_HOME_THEME_CURRENT: {
            const currentState = { ...state, homeThemeCurrent: action.theme }
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }
        case SETTINGS_HOME_THEME_TIME_DATE: {
            const currentState = { ...state, homeThemeTimeDate: action.theme }
            localStorage.setItem('settings',  JSON.stringify(currentState));
            return currentState;
        }

        default: return state;
    }
}