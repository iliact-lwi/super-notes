import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { rootStateType, settingsHomeThemeWidget, settingsHomeThemeCurrent, settingsHomeThemeTimeDate } from "../store/actions";

import ThemeHomeComponent from "../components/themes/ThemeHomeComponent";

const ThemesPage: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const homeThemeWidget = useSelector((state: rootStateType) => state.settings.homeThemeWidget);
    const homeThemeCurrent = useSelector((state: rootStateType) => state.settings.homeThemeCurrent);
    const homeThemeTimeDate = useSelector((state: rootStateType) => state.settings.homeThemeTimeDate);

    const widgetSwitchHandler = (event: any) => {
        const datatype = event.target.dataset.type;

        switch(datatype) {
            case 'dark': { dispatch(settingsHomeThemeWidget(datatype)); return; }
            case 'light': { dispatch(settingsHomeThemeWidget(datatype)); return; }
            case 'purple': { dispatch(settingsHomeThemeWidget(datatype)); return; }

            default: return;
        }
    }

    const currentSwitchHandler = (event: any) => {
        const datatype = event.target.dataset.type;

        switch(datatype) {
            case 'dark': { dispatch(settingsHomeThemeCurrent(datatype)); return; }
            case 'light': { dispatch(settingsHomeThemeCurrent(datatype)); return; }
            case 'purple': { dispatch(settingsHomeThemeCurrent(datatype)); return; }

            default: return;
        }
    }

    const timeDateSwitchHandler = (event: any) => {
        const datatype = event.target.dataset.type;

        switch(datatype) {
            case 'dark': { dispatch(settingsHomeThemeTimeDate(datatype)); return }
            case 'light': { dispatch(settingsHomeThemeTimeDate(datatype)); return }
            case 'purple': { dispatch(settingsHomeThemeTimeDate(datatype)); return }

            default: return;
        }
    }

    return (
        <main className="padding-for-page">
            <div className="themes-home">
                <div className="themes-home-title">Home page</div>
                <ThemeHomeComponent  onClick={ widgetSwitchHandler }  title="Widget theme" applied={ homeThemeWidget } />
                <ThemeHomeComponent  onClick={ currentSwitchHandler }  title="Current theme" applied={ homeThemeCurrent } />
                <ThemeHomeComponent  onClick={ timeDateSwitchHandler }  title="Time and date theme" applied={ homeThemeTimeDate } />
            </div>
        </main>
    )
}
export default ThemesPage;