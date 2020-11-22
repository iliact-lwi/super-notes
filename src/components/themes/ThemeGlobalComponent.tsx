import React, { useState } from 'react';

import TooltipComponent from './TooltipComponent';

type propsType = {
    applied: string;
    onClick: (event: any) => void;
}

const ThemeGlobalComponent: React.FunctionComponent<propsType> = ({ applied, onClick }) => {
    const [ showTooltip, setShowTooltip ] = useState(false);

    const [ tooltipText, setTooltipText ] = useState('');
    const [ tooltipCoords, setTooltipCoords ] = useState({ top: '0px', left: '0px' });

    const onMouseOverHandler = (event: any) => {
        const target = event.target;
        const datatype = target.dataset.type;

        if( 
            datatype === 'white-snow' || 
            datatype === 'pink-rose' ||
            datatype === 'warm-lagoon' ||
            datatype === 'fine-sand' || 
            datatype === 'call-of-nature'
        )
        {
            const targetCoords:  DOMRect = target.getBoundingClientRect();
            const tooltipCoords = {
                top: String(targetCoords.top + targetCoords.height + 5) + 'px',
                left: String(targetCoords.left + targetCoords.width / 2) + 'px'
            }


            setTooltipText(datatype);
            setTooltipCoords(tooltipCoords);
            setShowTooltip(true);
        } else return;
    }

    const onMouseOutHandler = (event: any) => {
        const target = event.target;
        const datatype = target.dataset.type;

        if( 
            datatype === 'white-snow' || 
            datatype === 'pink-rose' ||
            datatype === 'warm-lagoon' ||
            datatype === 'fine-sand' || 
            datatype === 'call-of-nature'
        )
        {
            const tooltipCoords = {
                top: '0px',
                left: '0px'
            }


            setTooltipText('');
            setTooltipCoords(tooltipCoords);
            setShowTooltip(false);
        } else return;
    }

    return (
        <div className="themes-universal-subtitle">
            <div className="themes-universal-subtitle-text">
                <span>Background color</span>
                <span className="themes-universal-subtitle-current">Applied theme: <span style={{fontWeight: "bold", textDecoration: "underline"}}>{ applied }</span></span>
            </div>
            <div onClick={ onClick } onMouseOver={ onMouseOverHandler } onMouseOut={ onMouseOutHandler} className="themes-global-main">
                <div data-type="white-snow" className="white-snow themes-global-main-item"></div>
                <div data-type="pink-rose" className="pink-rose themes-global-main-item"></div>
                <div data-type="warm-lagoon" className="warm-lagoon themes-global-main-item"></div>
                <div data-type="fine-sand" className="fine-sand themes-global-main-item"></div>
                <div data-type="call-of-nature" className="call-of-nature themes-global-main-item"></div>
            </div>
            { showTooltip && <TooltipComponent text={ tooltipText } coords={ tooltipCoords }/> }
        </div>
    )
}

export default ThemeGlobalComponent;