import React from "react";

import { useDispatch } from "react-redux";

import  { noteConfirmDelete } from "../../store/actions";

import { Button } from "react-bootstrap";

type AlertComponentType = {
    title: string;
    body?: string;
    theme: string;
    type: string;
    onClick?: () => void;
}

const ConfirmComponent: React.FunctionComponent<AlertComponentType> = ({ title, body, theme, type, onClick }) => {
    const dispatch = useDispatch();

    const denyHandler = () => dispatch(noteConfirmDelete(0));

    return (
        <div className={ ['note-confirm-main', theme].join(" ") }> 
             <div>
                <div className="note-confirm-title">{ title }</div>
                <div className="note-confirm-body">{ body }</div>
             </div>
            {
                type === 'confirm' && <div className="note-confirm-control">
                    <Button className="note-confirm-control-button" variant="success" onClick={ onClick } >accept</Button>
                    <Button className="note-confirm-control-button" variant="danger" onClick={ denyHandler } >deny</Button>
                </div>
            }
        </div>
    )
}

export default ConfirmComponent;