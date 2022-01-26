import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './notify.css'
import NotifyActions from '../../redux/actions/NotifyActions'


export const Notify = () => {
    const notifyReducer = useSelector(state => state.NotifyReducer)
    const dispatch = useDispatch()
    const clearNotify = (index) => {
        dispatch(NotifyActions.clearNotify(index))
    }
    const notifyItem = (content, index) => (
        <div className={`notify-item ${content.notifyType}`} key={index}>
            <p>{content.message}</p> <p className='icon-close' onClick={() => { clearNotify(index) }}>x</p>
        </div>
    )
    return (
        <div className={`notify-main ${notifyReducer.length < 1 ? 'd-none' : ''}`}>
            {
                notifyReducer.length > 0 ?  notifyReducer.map((item, index) => (
                    notifyItem(item, index)
                )) : ''
            }
        </div>
    )
}
