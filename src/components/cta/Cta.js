import React from 'react'
import {CancelCta} from "./CtaTypes/CancelCta"
import {JoinCta} from "./CtaTypes/JoinCta"
import {SubscribeCta} from "./CtaTypes/SubscribeCta"
import {DisableCta} from "./CtaTypes/DisableCta"

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
