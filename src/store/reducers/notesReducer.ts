import { NOTE_ADD, NOTE_DELETE, NOTE_ACTIVE, NOTE_COMPLATED, NOTE_CURRENT } from "../types";

import  { ActionTypes, notesStateType } from "../actions";

const savedNotes: notesStateType[] = JSON.parse(localStorage.getItem('notes') || "[]");
const initialState: notesStateType[] = savedNotes;

export const notesReducer = (state: notesStateType[] = initialState, action: ActionTypes) => {
    switch(action.type) {
        case NOTE_ADD: {
            const currentState = state.concat(action.note);
            localStorage.setItem('notes', JSON.stringify(currentState));
            return currentState;
        }
        case NOTE_DELETE: {
            const currentState = state.filter(note => note.id !== action.id);
            localStorage.setItem('notes', JSON.stringify(currentState));
            return currentState;
        }
        case NOTE_ACTIVE: {
            const currentState = state.map(note => {
                if(note.id === action.id) return {...note, active: !note.active, complated: false, current: false};
                return note;
            });
            localStorage.setItem('notes', JSON.stringify(currentState));
            return currentState;
        }
        case NOTE_COMPLATED: {
            const currentState = state.map(note => {
                if(note.id === action.id) return {...note, complated: !note.complated};
                return note;
            });
            localStorage.setItem('notes', JSON.stringify(currentState));
            return currentState;
        }
        case NOTE_CURRENT: {
            const currentState = state.map(note => {
                if(note.id === action.id) return {...note, current: !note.current};
                return { ...note, current: false }
            });
            localStorage.setItem('notes', JSON.stringify(currentState));
            return currentState;
        }

        default: return state;
    }
}
