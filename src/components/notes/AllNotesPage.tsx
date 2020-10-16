import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { rootStateType, noteCustomFilter } from "../../store/actions";

import NoteComponent from "./NoteComponent";
import FilterNotesComponent from "./FilterNotesComponent";

const AllNotesPage: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const notes = useSelector((state: rootStateType) => state.notes);
    const customFilter = useSelector((state: rootStateType) => state.actions.notesCustomFilter);

    const filterNotes = notes.filter(note => !note.active);

    const customFilterNotes = customFilter === 'All' ? filterNotes : filterNotes.filter(note => note[customFilter.toLowerCase()]); 

    const switchFilterHandler = (event: any) => {
        const type = event.target.getAttribute('datatype');

        switch(type) {
            case 'All': dispatch(noteCustomFilter(type));
            case 'Complated': dispatch(noteCustomFilter(type));
            case 'Current': dispatch(noteCustomFilter(type));

            default: return;
        }
    }

    return (
        <div className="notes-all">
            <div className="notes-all-title">
                <div>{ customFilter }</div>
                <FilterNotesComponent onClick={ switchFilterHandler } />
            </div>
            <div className="notes-all-line"></div>
            <div className="notes-all-body">
                {!!customFilterNotes.length ? customFilterNotes.map(note => {
                    return (
                        <NoteComponent key={ note.id } params={ note } />
                    )
                }) : <div className="notes-all-nothing">Nothing yet</div>}
            </div>
        </div>
    )
}

export default AllNotesPage;

