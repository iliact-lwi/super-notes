import React from 'react'

import { useDispatch, useSelector } from "react-redux"

import { notesStateType, noteConfirmDelete, rootStateType, noteDelete } from "../../store/actions";

import Delete from '@material-ui/icons/Delete'

import red from '@material-ui/core/colors/red';

import ConfirmComponent from "./ConfirmComponent";

type propsType = {
    params: notesStateType
}

const ActiveNoteComponent: React.FunctionComponent<propsType> = ({ params }) => {
    const dispatch = useDispatch()

    const isConfirm = useSelector((state: rootStateType) => state.actions.noteConfirmDelete);

    const confirmDeleteHandler = () => {
        dispatch(noteConfirmDelete(params.id));
    }

    const acceptHandler = () => {
        dispatch(noteConfirmDelete(0));
        dispatch(noteDelete(params.id));
    }

    return (
        <div className="home-widget-note">
            { isConfirm === params.id && <ConfirmComponent onClick={ acceptHandler } /> }
            <div className="home-widget-note-info">
                <div className="home-widget-note-title">{ params.title }</div>
                <div className="home-widget-note-text">{ params.body }</div>
            </div>
            <div>
                <Delete onClick={ confirmDeleteHandler } style={{color: red[500], cursor: "pointer"}} fontSize="default" />
            </div>
        </div>
    )
}

export default ActiveNoteComponent;