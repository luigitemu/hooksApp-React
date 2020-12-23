import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../03-examples/examples.css'


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {show && <MultipleCustomHooks />}
            <hr />
            <button
                className="btn btn-info mt-5"
                onClick={handleClick}
            >
                Show/Hide
            </button>
        </div>
    )
}
