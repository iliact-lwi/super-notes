import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { rootStateType, settingsHomeShowDate } from "../../store/actions";

import { Button } from "react-bootstrap";

const HomeShowDateComponent: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const showDate = useSelector((state: rootStateType) => state.settings.showDate);

    const displayHandler = (event: any) => {
        const datatype = event.target.getAttribute('datatype');
     
        switch(datatype) {
            case "true": { dispatch(settingsHomeShowDate(true)); return; }
            case "false": { dispatch(settingsHomeShowDate(false)); return; }

            default: return;
        }
    }

    return (
        <div className="settings-home-show-date">
            <div className="settings-home-show-date-title">
                <span>Display date on home page</span>
                <span className="settings-home-show-date-current">Current: <span style={{fontWeight: "bold", textDecoration: "underline"}}>{ showDate ? 'displayed' : 'not displayed' }</span> </span>
            </div>
            <div className="settings-home-show-date-main" onClick={ displayHandler }>
                <Button className="settings-home-show-date-button" datatype="true" variant="success">Display</Button>
                <Button className="settings-home-show-date-button" datatype="false" variant="danger">Do not display</Button>
            </div>
        </div>
    )
}

export default HomeShowDateComponent;