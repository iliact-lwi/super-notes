import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { rootStateType, settingsHomeShowTime } from "../../store/actions";

import { Button } from "react-bootstrap";

const HomeShowTimeComponent: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const showTime = useSelector((state: rootStateType) => state.settings.showTime);

    const displayHandler = (event: any) => {
        const datatype = event.target.getAttribute('datatype');

        switch(datatype) {
            case "true": { dispatch(settingsHomeShowTime(true)); return; }
            case "false": { dispatch(settingsHomeShowTime(false)); return; }

            default: return;
        }
    }

    return (
        <div className="settings-home-show-time">
            <div className="settings-home-show-time-title">
                <span>Display time on home page</span>
                <span className="settings-home-show-time-current">Current: <span style={{fontWeight: "bold", textDecoration: "underline"}}>{ showTime ? 'displayed' : 'not displayed' }</span> </span>
            </div>
            <div className="settings-home-show-time-main" onClick={ displayHandler }>
                <Button className="settings-home-show-time-button" datatype="true" variant="success">Display</Button>
                <Button className="settings-home-show-time-button" datatype="false" variant="danger">Do not display</Button>
            </div>
        </div>
    )
}

export default HomeShowTimeComponent;