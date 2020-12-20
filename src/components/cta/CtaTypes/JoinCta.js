import React from 'react'
import { BaseCta } from "../BaseCta"

export const JoinCta = () => {
    return (
        <BaseCta
            className="text-dark w-100"
            onClick={() => {console.log("Joined")}}
        >
            Join
        </BaseCta>
    )
}
