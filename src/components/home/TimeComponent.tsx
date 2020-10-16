import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux"

import { rootStateType } from "../../store/actions";

const TimeComponent: React.FunctionComponent = () => {
    const theme = useSelector((state: rootStateType) => state.settings.homeThemeTimeDate);

    const [ hours, setHours ] = useState(new Date().getHours());
    const [ minutes, setMinutes ] = useState(new Date().getMinutes());
    const [ seconds, setSeconds ] = useState(new Date().getSeconds());

    useEffect(() => {
        const id = setInterval(() => {
            const date = new Date();

            setHours(date.getHours());
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className="home-time">
            <div className={ ["home-time-body", theme].join(' ') }>
                <span>{ hours < 10 ? `0${hours} : ` : `${hours} : ` }</span>
                <span>{ minutes < 10 ? `0${minutes} : ` : `${minutes} : ` }</span>
                <span>{ seconds < 10 ? `0${seconds}` : seconds }</span>
            </div>
        </div>
    )
}

export default TimeComponent;