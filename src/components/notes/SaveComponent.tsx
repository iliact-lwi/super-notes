import React from 'react';

import { useSelector } from "react-redux";

import { rootStateType } from "../../store/actions";

import { Button, Alert } from "react-bootstrap";

type propsType = {
    onClick: () => void;
}

const SaveComponent: React.FunctionComponent<propsType> = ({ onClick }) => {
    const validation = useSelector((state: rootStateType) => state.actions.noteValidation);
    const success = useSelector((state: rootStateType) => state.actions.noteSuccess);

    return (
        <div className="notes-save">
            <div>
                { validation && <Alert variant="danger" className="notes-save-alert">{ validation }</Alert> }
                { !!success && <Alert variant="success" className="notes-save-alert">Very good. Note created!</Alert> }
            </div>
            <div>
                <Button className="notes-save-buuton" onClick={ onClick } variant="info">Save note</Button>
            </div>
        </div>
    )
}

export default  SaveComponent;