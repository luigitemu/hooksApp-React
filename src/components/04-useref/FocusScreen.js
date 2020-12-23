import React, { useRef } from 'react'
import '../03-examples/examples.css'
export const FocusScreen = () => {


    const inputRef = useRef();


    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1> Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                className="form-control mb-3"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
