import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../03-examples/examples.css';

export const MemosHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />
            <p>{memoProcesado}</p>
            <button
                className="btn btn-info ml-3"
                onClick={increment}
            >
                Incrementar
            </button>

            <button
                className="btn btn-primary m-2"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
