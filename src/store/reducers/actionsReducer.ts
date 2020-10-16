import { NOTE_CONFIRM_DELETE, NOTE_MENU, NOTE_VALIDATION, NOTE_SUCCESS,  NOTE_CUSTOM_FILTER } from "../types";

import  { ActionTypes, actionStateType } from "../actions";

const initialState: actionStateType = { noteConfirmDelete: 0, noteMenu: 0, noteValidation: '', noteSuccess: 0, notesCustomFilter: 'All' }

export const actionsReducer = (state: actionStateType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case NOTE_CONFIRM_DELETE: return { ...state, noteConfirmDelete: action.action }
        case NOTE_MENU: return { ...state, noteMenu: action.id }
        case NOTE_VALIDATION: {
            if(action.action === 'remove' &&  action.message === state.noteValidation) return { ...state, noteValidation: '' }
            else if(action.action === 'create') return { ...state, noteValidation: action.message, noteSuccess: 0 }
            else return state;
        }
        case NOTE_SUCCESS: {
            if(action.action === 'remove' && action.success === state.noteSuccess) return { ...state, noteSuccess: 0 }
            else if(action.action === 'create') return { ...state, noteSuccess: action.success, noteValidation: '' } 
            else return state;
        }
        case NOTE_CUSTOM_FILTER: {
            return { ...state, notesCustomFilter: action.filter  }
        }

        default: return state;
    }
}