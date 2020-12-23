import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('Me volvi a Ejecutar :(');


    return (
        <small> {value}</small>
    )
}
)