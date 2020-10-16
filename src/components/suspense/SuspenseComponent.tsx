import React from "react";

import { Spinner } from "react-bootstrap";

const SuspenseComponent: React.FunctionComponent = () => {
    return (
        <div className="suspense-wrapper">
            <Spinner className="suspense-spinner" animation="border" variant="primary" />
        </div>
    )
}

export default SuspenseComponent;
