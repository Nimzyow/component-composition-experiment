import React from 'react'
import { BaseCta } from "../BaseCta"

export const DisableCta = () => {
    return (
        <BaseCta
            onClick={() => {/* no op */}}
        >
            Disable
        </BaseCta>
    )
}
