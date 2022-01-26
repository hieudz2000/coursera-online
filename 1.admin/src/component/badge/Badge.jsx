import React from 'react'

import './badge.css'

export const Badge = (props) => {
    return (
        <span className={`badge badge-${props.type}`} onClick={props.handle}>
            {props.content}
        </span>
    )
}
