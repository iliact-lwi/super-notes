import React from "react";

import { useSelector } from "react-redux";

import { rootStateType } from "../store/actions";

import WidgetComponent from "../components/home/WidgetComponent";
import TimeComponent from "../components/home/TimeComponent";
import DateComponent from "../components/home/DateComponent";
import CurrentComponent from "../components/home/CurrentComponent";

const HomePage: React.FunctionComponent = () => {
    const showDate = useSelector((state: rootStateType) => state.settings.showDate);
    const showTime = useSelector((state: rootStateType) => state.settings.showTime);

    return (
        <main className="padding-for-page">
            <div className="home-widget-time-date">
                <WidgetComponent />
                <div className="home-time-date">
                    { showTime && <TimeComponent /> } 
                    { showDate && <DateComponent /> }
                </div>
             </div>   
            <CurrentComponent />
        </main>
    )
}
export default HomePage;