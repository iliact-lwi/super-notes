import React from 'react'

import { useDispatch, useSelector } from "react-redux"

import { notesStateType, noteCurrent, noteComplated, rootStateType } from "../../store/actions";

import Check from '@material-ui/icons/Check';

import green from '@material-ui/core/colors/green';

type propsType = {
    params: notesStateType
}

const CurrentNoteComponent: React.FunctionComponent<propsType> = ({ params }) => {
    const dispatch = useDispatch();

    const theme = useSelector((state: rootStateType) => state.settings.homeThemeCurrent);

    const comlateHandler = () => {
        dispatch(noteCurrent(params.id));
        dispatch(noteComplated(params.id));
    }

    return (
        <div className="home-current-note">
            <div className="home-current-info">
                <div className="home-current-title">{ params.title }</div>
                <div className="home-current-text">{ params.body }</div>
            </div>
            <div><Check onClick={ comlateHandler } className={ ["home-current-control", theme === 'light' ? 'home-current-control-light' : 'home-current-control-dark'].join(' ') } fontSize="default" style={{color: green[500]}} /></div> 
        </div>
    )
}

export default CurrentNoteComponent;