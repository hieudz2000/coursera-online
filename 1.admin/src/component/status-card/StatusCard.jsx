import React from 'react'
import { Ring } from 'react-cssfx-loading/lib'
import './statuscard.css'
export const StatusCard = (props) => {
    return (
        <div className='status-card'>

            <div className="status-card_icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card_info">
                {
                    props.count == null ? <div className='loadding'><Ring/> </div>: <h4>{new Intl.NumberFormat().format(props.count)}</h4>
                }
                <span>{props.title}</span>
            </div>

        </div>
    )
}
