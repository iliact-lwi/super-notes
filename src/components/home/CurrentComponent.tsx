import React from "react";

import { useSelector } from "react-redux"

import { rootStateType } from "../../store/actions";

import CurrentNoteComponent from "./CurrentNoteComponent";

const CurrentComponent: React.FunctionComponent = () => {
    const notes = useSelector((state: rootStateType) => state.notes);
    const filterNote = notes.filter(note => note.current);
    const theme = useSelector((state: rootStateType) => state.settings.homeThemeCurrent);

    return (
        <div className={ ["home-current", theme].join(' ') }>
            <div className="home-current-main">
                { !!filterNote.length ? filterNote.map(note => {
                    return (
                        <CurrentNoteComponent key={ note.id } params={ note } />
                    )
                }) : <div style={{textAlign: "center", width: "100%"}}>No current note</div>}
            </div>
        </div>  
    )
}

export default CurrentComponent;