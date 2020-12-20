import React from 'react'
import {CancelCta} from "../Button/ButtonTypes/CancelCta"
import {JoinCta} from "../Button/ButtonTypes/JoinCta"
import {SubscribeCta} from "../Button/ButtonTypes/SubscribeCta"
import {DisableCta} from "../Button/ButtonTypes/DisableCta"

export const Cta = (props) => {
    const { type } = props;
    const components = {
        cancelCta: CancelCta,
        joinCta: JoinCta,
        subscribeCta: SubscribeCta,
        disableCta: DisableCta
    }

    if (!type) {
        return null
    }

    const Component = components[type]
    return <Component />
}
