import React from 'react'
import { BaseCta } from "../BaseCta"

export const CancelCta = () => {
    return (
        <BaseCta
            tag="a"
            className="w-100 text-primary btn"
            onClick={() => {console.log("Cancelled");}}
        >
            Cancel
        </BaseCta>
    )
}
