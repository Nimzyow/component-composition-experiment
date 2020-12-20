import React from 'react'
import {Button} from "react-bootstrap"

export const BaseCta = ({
    tag=Button,
    children,
    className="w-100",
    ...otherProps
}) => {

    const Tag = tag

    return (
            <Tag className={className} {...otherProps} >
                {children}
            </Tag>
    )
}
