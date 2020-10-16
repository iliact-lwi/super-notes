import React from 'react';

import { ButtonGroup, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { settingsHomeNotesInSlide, rootStateType } from "../../store/actions";

const HomeNotesInSlideComponent: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const notesInSlide = useSelector((state: rootStateType) => state.settings.notesInSlide);

    const switchHandler = (event: any) => {
        const datatype = event.target.getAttribute('datatype');

        switch(datatype) {
            case '1': {dispatch(settingsHomeNotesInSlide(Number(datatype))); return};
            case '2': {dispatch(settingsHomeNotesInSlide(Number(datatype))); return};
            case '4': {dispatch(settingsHomeNotesInSlide(Number(datatype))); return};
            case '8': {dispatch(settingsHomeNotesInSlide(Number(datatype))); return};
            case '16': {dispatch(settingsHomeNotesInSlide(Number(datatype))); return};

            default: return;
        }
    }

    return (
        <div className="settings-home-notes-in-slide">
            <div className="settings-home-notes-in-slide-title">
                <span>Number of notes per slide in widget on homepage</span>
                <span className="settings-home-notes-in-slide-current">Current: <span style={{fontWeight: "bold", textDecoration: "underline"}}>{ notesInSlide }</span> </span>
            </div>
            <div className="settings-home-notes-in-slide-main">
                <ButtonGroup onClick={ switchHandler } vertical>
                    <Button className="settings-home-notes-in-slide-button" datatype="1" variant="primary">1 note per slide</Button>
                    <Button className="settings-home-notes-in-slide-button" datatype="2"  variant="primary">2 note per slide</Button>
                    <Button className="settings-home-notes-in-slide-button" datatype="4"  variant="primary">4 note per slide</Button>
                    <Button className="settings-home-notes-in-slide-button" datatype="8"  variant="primary">8 note per slide</Button>
                    <Button className="settings-home-notes-in-slide-button" datatype="16"  variant="primary">16 note per slide</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default HomeNotesInSlideComponent;