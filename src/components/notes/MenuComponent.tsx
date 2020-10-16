import React from "react";

type MenuComponentType = {
    onClick: (el: any) => void;
    completed: boolean;
    active: boolean;
    current: boolean;
}

const MenuComponent: React.FunctionComponent<MenuComponentType> = ({ onClick, completed, active, current }) => {
    return (
        <div onClick={ onClick } className="note-menu">
            <a data-action="delete" className="note-menu-item">Delete note</a>
            <a data-action="active" className="note-menu-item">{ active ? 'Remove from widget on homepage' : 'Add to widget on home page' }</a>
            { !current && <a data-action="completed" className="note-menu-item">{ completed ? 'Remove as completed' : 'Mark as complated' }</a> }
            { !completed && <a data-action="current" className="note-menu-item">{ current ? 'Remove as current' : 'Set as current' }</a> }
        </div>
    )
}

export default MenuComponent;