import React, { useState } from "react";

import { Button } from "react-bootstrap";

const HelpComponent: React.FunctionComponent = () => {
    const [ isDrop, setIsDrop ] = useState(false);

    const dropHandler = () => setIsDrop(!isDrop);

    return (
        <div className="notes-help">
            <Button className="notes-help-button" onClick={ dropHandler } variant="primary">Help</Button>
            { isDrop && <div className="notes-help-drop">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore modi quam provident reprehenderit voluptatem, aut vero magni voluptatum? Impedit, quibusdam dolorem. Velit voluptas culpa atque eos tempora laudantium aut porro, reiciendis omnis fuga? Vel, enim dicta mollitia veritatis corporis nostrum expedita itaque unde error quidem beatae, repellat fuga ipsam.
            </div>}
        </div>
    )
}

export default HelpComponent;