import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";

import { rootStateType, noteConfirmDelete } from "../../store/actions";

type propsType = {
    onClick: () => void;
}

const ConfirmComponent: React.FunctionComponent<propsType> = ({ onClick }) => {
    const dispatch = useDispatch();

    const theme = useSelector((state: rootStateType) => state.settings.homeThemeWidget);

    const denyHandler = () => {
        dispatch(noteConfirmDelete(0));
    }

    return (
        <div className={ ["home-confirm", theme === "light" ? "dark" : "light"].join(" ") }>
            <div className="home-confirm-info">
                <div className="home-confirm-title">Deleting a note</div>
                <div>Are you sure you want to delete this note?</div>
            </div>
            <div className="home-confirm-controls">
                <Button className="home-confirm-controls-button" onClick={ onClick } style={{marginRight: "20px"}} variant="success">accept</Button>
                <Button className="home-confirm-controls-button" onClick={ denyHandler } variant="danger">deny</Button>
            </div>
        </div>
    )
}

export default ConfirmComponent;