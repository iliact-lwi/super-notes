import React from "react";

import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

import { useSelector, useDispatch } from "react-redux"

import { rootStateType, settingsHomeNextSlide, settingsHomePrevSlide } from "../../store/actions";

import ActiveNoteComponent from "./ActiveNoteComponent";

const WidgetComponent: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const notes = useSelector((state: rootStateType) => state.notes);
    const startSlide = useSelector((state: rootStateType) => state.settings.startSlide);
    const endSlide = useSelector((state: rootStateType) => state.settings.endSlide);
    const theme = useSelector((state: rootStateType) => state.settings.homeThemeWidget);

    const filterNotes = notes.filter(note => note.active);
    const slideNotes = filterNotes.slice(startSlide, endSlide);
   
    const nextSlide = () => {
        if(filterNotes.length > endSlide) {
            dispatch(settingsHomeNextSlide());
        }
    }

    const prevSlide = () => {
        if(startSlide > 0) {
            dispatch(settingsHomePrevSlide());
        }
    }

    return (
        <div className="home-widget-wrapper">
            <div className={ ["home-widget", theme].join(" ") }>
                <div className="home-widget-body">
                    {!!filterNotes.length ? slideNotes.map(note => {
                        return (
                            <ActiveNoteComponent key={ note.id } params={ note } />
                        )
                    }) : <div style={{textAlign: "center"}}>No saved notes</div>} 
                </div>
            </div>
             <div className="home-widget-controls">
                <div className="home-widget-controls-prev" onClick={ prevSlide }><ArrowLeft fontSize="large" /></div>
                <div className="home-widget-controls-next" onClick={ nextSlide }><ArrowRight fontSize="large" /></div>
            </div>
        </div>
    )
}

export default WidgetComponent;