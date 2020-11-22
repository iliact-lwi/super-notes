import React from 'react';

type propsType = {
    text: string;
    coords: {top: string, left: string}
}

const TooltipComponent: React.FunctionComponent<propsType> = ({ text, coords }) => {
    return (
        <div className="themes-universal-tooltip" style={{top: coords.top, left: coords.left}}>
            { text }
        </div>
    )
}

export default TooltipComponent;