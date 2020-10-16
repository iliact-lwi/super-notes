import React from 'react';
import { Switch, Route } from "react-router-dom";

import HelpComponent from "../components/notes/HelpComponent";
import SwitchComponent from "../components/notes/SwitchComponent";
import AddNotesPage from "../components/notes/AddNotesPage";
import AllNotesPage from "../components/notes/AllNotesPage";

const NotesPage: React.FunctionComponent = () => {
    return (
        <main className="padding-for-page">
            <div style={{ display: "flex", paddingBottom: '30px' }}>
                <HelpComponent />
                <SwitchComponent />
            </div>
            <Switch>
                <Route component={ AllNotesPage } path="/notes" exact />
                <Route component={ AddNotesPage } path="/notes/add" />
            </Switch>
        </main>   
    )
}

export default NotesPage;