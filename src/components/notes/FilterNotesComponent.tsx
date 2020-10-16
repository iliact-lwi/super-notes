import React from 'react';

import { ButtonGroup, Button } from "react-bootstrap";

type propsType = {
    onClick: (event: any) => void;
}

const FilterNotesComponent: React.FunctionComponent<propsType> = ({ onClick }) => {
    return (
        <div>
            <ButtonGroup onClick={ onClick } aria-label="Filter notes">
                <Button className="notes-all-filter-button" datatype="All" variant="secondary">All</Button>
                <Button className="notes-all-filter-button" datatype="Complated" variant="secondary">Complated</Button>
                <Button className="notes-all-filter-button" datatype="Current" variant="secondary">Current</Button>
            </ButtonGroup>
        </div>
    )
}

export default FilterNotesComponent;