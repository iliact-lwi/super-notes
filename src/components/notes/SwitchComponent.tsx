import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const SwitchComponent: React.FunctionComponent = () => {
    const [ isDrop, setIsDrop ] = useState(false);
    const [ active, setActive ] = useState('My notes');

    const dropHandler = () => setIsDrop(!isDrop);

    const clickHandler = (event: any) => {
        if(event.target.getAttribute('datatype') === 'My notes') setActive('My notes');
        if(event.target.getAttribute('datatype') === 'Add notes') setActive('Add notes');

        setIsDrop(false);
    }

    return (
        <div className="notes-switch">
            <div onClick= { dropHandler } className="notes-switch-main">
                <div>
                    { active }
                </div>
                <div>
                    <ArrowDropDown fontSize="default" />
                </div>
            </div>
            { isDrop && <div onClick={ clickHandler } className="notes-switch-drop">
                <NavLink  datatype="My notes" className="notes-switch-link" activeClassName="notes-switch-active" to="/notes" exact>My notes</NavLink>
                <NavLink datatype="Add notes" className="notes-switch-link" activeClassName="notes-switch-active" to="/notes/add">Add notes</NavLink>
            </div>}
        </div>
    )
}

export default SwitchComponent;