import React from 'react'
import { BaseCta } from "../BaseCta"

export const SubscribeCta = () => {
    return (
        <BaseCta
            onClick={() => {console.log("Subscribed");}}
        >
            Subcribe
        </BaseCta>
    )
}
