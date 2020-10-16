import React from "react"

import { useDispatch, useSelector } from "react-redux";

import Menu from '@material-ui/icons/Menu';

import { notesStateType, noteDelete, noteConfirmDelete, rootStateType, noteActive, noteComplated, noteCurrent, noteMenu } from "../../store/actions";

import ConfirmComponent from "./ConfirmComponent";
import MenuComponent from "./MenuComponent";

type propsType = {
    params: notesStateType
}

const NoteComponent: React.FunctionComponent<propsType> = ({ params }) => {
    const isConfirm = useSelector((state: rootStateType) => state.actions.noteConfirmDelete);
    const isMenu = useSelector((state: rootStateType) => state.actions.noteMenu);
    const dispatch = useDispatch();

    const classForNote = ['note', params.complated && 'note-complated', params.current && 'note-current' ]

    const menuHandler = () => {
        if(isMenu === params.id) {
            dispatch(noteMenu(0))
            return;
        }

        dispatch(noteMenu(params.id));
    }

    const acceptHandler = () => {
        dispatch(noteConfirmDelete(0));
        dispatch(noteDelete(params.id));
    }

    const switchHandler = (event: any) => {
        switch(event.target.dataset.action) {
            case 'delete': { dispatch(noteConfirmDelete(params.id)); dispatch(noteMenu(0)); return; };
            case 'active': { dispatch(noteActive(params.id)); dispatch(noteMenu(0)); return; };
            case 'completed': { dispatch(noteComplated(params.id)); dispatch(noteMenu(0)); return; };
            case 'current': { dispatch(noteCurrent(params.id)); dispatch(noteMenu(0)); return; };

            default: return;
        }
    }

    return (
        <div className={ classForNote.join(' ') }>
            { isConfirm === params.id && <ConfirmComponent onClick={ acceptHandler } title="Confirm Action" body="Are you sure you want to delete this note" theme="confirm-theme" type="confirm" />}
            <div className="note-info">
                <div className="note-title" >{ params.title }</div>
                <div className="note-text">{ params.body }</div>
            </div>
            <div className="note-control">
                <Menu onClick={ menuHandler }  fontSize="default" style={{cursor: "pointer"}} ></Menu>
                { isMenu === params.id && <MenuComponent completed={ params.complated } active={ params.active } current={ params.current } onClick={ switchHandler } /> }
            </div>
        </div>
    )
}

export default NoteComponent;