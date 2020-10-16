import { combineReducers } from "redux";

import { notesReducer } from "./notesReducer";
import { actionsReducer } from "./actionsReducer";
import { settingsReducer } from "./settingsReducer";

export default combineReducers({
    notes: notesReducer,
    actions: actionsReducer,
    settings: settingsReducer
});