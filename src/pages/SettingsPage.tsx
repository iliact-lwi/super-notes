import React from 'react';

import  HomeNotesInSlideComponent from "../components/settings/HomeNotesInSlideComponent";
import HomeShowDateComponent from "../components/settings/HomeShowDateComponent";
import HomeShowTimeComponent from "../components/settings/HomeShowTimeComponent";

const SettingsPage: React.FunctionComponent = () => {
    return (
        <main className="padding-for-page">
            <HomeNotesInSlideComponent />
            <HomeShowDateComponent />
            <HomeShowTimeComponent />
        </main>
    )
}

export default SettingsPage;