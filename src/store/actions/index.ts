import {
    NOTE_ADD,
    NOTE_DELETE,
    NOTE_CONFIRM_DELETE,
    NOTE_ACTIVE,
    NOTE_COMPLATED, 
    NOTE_MENU, 
    NOTE_VALIDATION, 
    NOTE_SUCCESS, 
    NOTE_CURRENT, 
    NOTE_CUSTOM_FILTER, 
    SETTINGS_HOME_NEXT_SLIDE, 
    SETTINGS_HOME_PREV_SLIDE, 
    SETTINGS_HOME_NOTES_IN_SLIDE,
    SETTINGS_HOME_SHOW_DATE,
    SETTINGS_HOME_SHOW_TIME,
    SETTINGS_GLOBAL_THEME,
    SETTINGS_HOME_THEME_WIDGET,
    SETTINGS_HOME_THEME_CURRENT,
    SETTINGS_HOME_THEME_TIME_DATE 
} from "../types";

import { ThunkAction } from 'redux-thunk';

// @ - types for states
// # - types for actions
// $ - sync actions
// & - async actions
// ~ - all actions types

// @
export type rootStateType = {
    notes: notesStateType[];
    actions: actionStateType;
    settings: settingsStateType;
}

export type notesStateType = {
    title: string;
    body: string;
    id: number;
    complated: boolean;
    active: boolean;
    current: boolean;
    [ key: string ]: any;
}

export type actionStateType = {
    noteConfirmDelete: number; 
    noteMenu: number;
    noteValidation: string;
    noteSuccess: number;
    notesCustomFilter: string;
}

export type settingsStateType = {
    startSlide: number;
    endSlide: number;
    notesInSlide: number;
    showDate: boolean;
    showTime: boolean;
    homeThemeWidget: string;
    homeThemeCurrent: string;
    homeThemeTimeDate: string;
    globalTheme: string;
}

// #
type noteAddActionType = {
    type: typeof NOTE_ADD;
    note: notesStateType;
}

type noteDeleteActionType = {
    type: typeof NOTE_DELETE;
    id: number;
}

type noteConfirmDeleteActionType = {
    type: typeof NOTE_CONFIRM_DELETE;
    action: number;
}

type noteActiveActionType = {
    type: typeof NOTE_ACTIVE;
    id: number;
}

type noteComplatedActionType = {
    type: typeof NOTE_COMPLATED;
    id: number;
}

type noteCurrentActionType = {
    type: typeof NOTE_CURRENT;
    id: number;
}

type noteMenuActionType = {
    type: typeof NOTE_MENU;
    id: number;
}

type noteValidationCurrentActionType = {
    type: typeof NOTE_VALIDATION;
    message: string;
    action: string;
}

type noteSuccessCurrentActionType = {
    type: typeof NOTE_SUCCESS;
    success: number;
    action: string;
}

type settingsHomeNextSlideActionType = {
    type: typeof SETTINGS_HOME_NEXT_SLIDE
}

type settingsHomePrevSlideActionType = {
    type: typeof SETTINGS_HOME_PREV_SLIDE
}

type noteCustomFilterActionType = {
    type: typeof NOTE_CUSTOM_FILTER;
    filter: string;
}

type settingsHomeNotesInSlideActionType = {
    type: typeof SETTINGS_HOME_NOTES_IN_SLIDE;
    quantity: number;
}

type settingsHomeShowDateActionType = {
    type: typeof SETTINGS_HOME_SHOW_DATE;
    action: boolean;
}

type settingsHomeShowTimeActionType = {
    type: typeof SETTINGS_HOME_SHOW_TIME;
    action: boolean;
}

type settingsGlobalThemeActionType = {
    type: typeof SETTINGS_GLOBAL_THEME;
    theme: string;
}

type settingsHomeThemeWidgetActionType = {
    type: typeof SETTINGS_HOME_THEME_WIDGET;
    theme: string;
}

type settingsHomeThemeCurrentActionType = {
    type: typeof SETTINGS_HOME_THEME_CURRENT;
    theme: string;
}

type settingsHomeThemeTimeDateActionType = {
    type: typeof SETTINGS_HOME_THEME_TIME_DATE;
    theme: string;
}

// $
export const noteAdd = (note: notesStateType): noteAddActionType => {
    return {
        type: NOTE_ADD,
        note: note
    }
}

export const noteDelete = (id: number): noteDeleteActionType => {
    return {
        type: NOTE_DELETE,
        id: id
    }
}

export const noteConfirmDelete = (action: number): noteConfirmDeleteActionType => {
    return {
        type: NOTE_CONFIRM_DELETE,
        action: action
    }
}

export const noteActive = (id: number): noteActiveActionType => {
    return {
        type: NOTE_ACTIVE,
        id: id
    }
}

export const noteComplated = (id: number): noteComplatedActionType => {
    return {
        type: NOTE_COMPLATED,
        id: id
    }
}

export const noteCurrent = (id: number): noteCurrentActionType => {
    return {
        type: NOTE_CURRENT,
        id: id
    }
}

export const noteMenu = (id: number): noteMenuActionType => {
    return {
        type: NOTE_MENU,
        id: id
    }
}
const noteValidationCurrent = (action: string, message: string): noteValidationCurrentActionType => {
    return {
        type: NOTE_VALIDATION,
        message: message,
        action: action
    }
}

const noteSuccessCurrent = (action: string, success: number): noteSuccessCurrentActionType => {
    return {
        type: NOTE_SUCCESS,
        action: action,
        success: success
    }
}

export const settingsHomeNextSlide = (): settingsHomeNextSlideActionType => {
    return {
        type: SETTINGS_HOME_NEXT_SLIDE
    }
}

export const settingsHomePrevSlide = (): settingsHomePrevSlideActionType => {
    return {
        type: SETTINGS_HOME_PREV_SLIDE
    }
}

export const noteCustomFilter = (filter: string): noteCustomFilterActionType => {
    return {
        type: NOTE_CUSTOM_FILTER,
        filter: filter
    }
}

export const settingsHomeNotesInSlide = (quantity: number): settingsHomeNotesInSlideActionType => {
    return {
        type: SETTINGS_HOME_NOTES_IN_SLIDE,
        quantity: quantity
    }
}

export const settingsHomeShowDate = (action: boolean): settingsHomeShowDateActionType => {
    return {
        type: SETTINGS_HOME_SHOW_DATE,
        action: action
    }
}

export const settingsHomeShowTime = (action: boolean): settingsHomeShowTimeActionType => {
    return {
        type: SETTINGS_HOME_SHOW_TIME,
        action: action
    }
}

export const settingsGlobalTheme = (theme: string): settingsGlobalThemeActionType => {
    return {
        type: SETTINGS_GLOBAL_THEME,
        theme: theme
    }
}

export const settingsHomeThemeWidget = (theme: string): settingsHomeThemeWidgetActionType => {
    return {
        type: SETTINGS_HOME_THEME_WIDGET,
        theme: theme
    }
}

export const settingsHomeThemeCurrent = (theme: string): settingsHomeThemeCurrentActionType => {
    return {
        type: SETTINGS_HOME_THEME_CURRENT,
        theme: theme
    }
}

export const settingsHomeThemeTimeDate = (theme: string): settingsHomeThemeTimeDateActionType => {
    return {
        type: SETTINGS_HOME_THEME_TIME_DATE,
        theme: theme
    }
}

// &
export const noteValidation = ( message: string ): ThunkAction<void, unknown, unknown, ActionTypes> => {
    return dispatch => {
        dispatch(noteValidationCurrent('create', message));

        setTimeout(() => {
            dispatch(noteValidationCurrent('remove', message));
        }, 5000);
    }
}

export const noteSuccess = (): ThunkAction<void, unknown, unknown, ActionTypes> => {
    return dispatch => {
        const id: number = Date.now();

        dispatch(noteSuccessCurrent('create', id));

        setTimeout(() => {
            dispatch(noteSuccessCurrent('remove', id));
        }, 5000);
    }
}

// ~
export type ActionTypes =
noteAddActionType | 
noteDeleteActionType | 
noteConfirmDeleteActionType | 
noteActiveActionType |
noteComplatedActionType |
noteCurrentActionType |
noteMenuActionType |
noteValidationCurrentActionType |
noteSuccessCurrentActionType |
settingsHomeNextSlideActionType |
settingsHomePrevSlideActionType |
noteCustomFilterActionType |
settingsHomeNotesInSlideActionType | 
settingsHomeShowDateActionType | 
settingsHomeShowTimeActionType |
settingsGlobalThemeActionType |
settingsHomeThemeWidgetActionType |
settingsHomeThemeCurrentActionType |
settingsHomeThemeTimeDateActionType;