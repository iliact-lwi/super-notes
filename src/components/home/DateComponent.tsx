import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux"

import { rootStateType } from "../../store/actions";

const DateComponent: React.FunctionComponent = () => {
    const theme = useSelector((state: rootStateType) => state.settings.homeThemeTimeDate);

    const [ year, setYear ] = useState(new Date().getFullYear());
    const [ month, setMonth ] = useState(new Date().getMonth());
    const [ day, setDay ] = useState(new Date().getDate());

    useEffect(() => {
        const id = setInterval(() => {
            const date = new Date();

            setYear(date.getFullYear());
            setMonth(date.getMonth());
            setDay(date.getDate());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (

        <div className="home-date">
            <div className={ ["home-date-body", theme].join(' ') }>
                <span>{ day < 10 ? `0${day} . ` : `${day} . ` }</span>
                <span>{ (month + 1) < 10 ? `0${(month + 1)} . ` : `${(month + 1)} . ` }</span>
                <span>{ year }</span>
            </div>
        </div>
    )
}

export default DateComponent;