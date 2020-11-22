import React from 'react';

type propsType = {
    title: string;
    applied: string;
    onClick: (event: any) => void;
}

const ThemeHomeComponent: React.FunctionComponent<propsType> = ({ title, applied, onClick }) => {
    return (
        <div className="themes-universal-subtitle">
            <div className="themes-universal-subtitle-text">
                <span>{ title }</span>
                <span className="themes-universal-subtitle-current">Applied theme: <span style={{fontWeight: "bold", textDecoration: "underline"}}>{ applied }</span></span>
            </div>
            <div className="themes-home-main-universal" onClick={ onClick }>
                <div data-type="dark" className="themes-home-main-item-universal themes-home-main-item-dark-universal">Dark theme</div>
                <div data-type="light" className="themes-home-main-item-universal themes-home-main-item-light-universal">Light theme</div>
                <div data-type="purple" className="themes-home-main-item-universal themes-home-main-item-purple-universal">Purple theme</div>
            </div>
        </div>
    )
}

export default ThemeHomeComponent;