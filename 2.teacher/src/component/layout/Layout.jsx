import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import { Routes } from '../Routes'
import { Sidebar } from '../sidebar/Sidebar'
import { TopNav } from '../topnav/TopNav'
import ThemeActions from '../../redux/actions/ThemeAction'
import './Layout.css'
import { checkToken } from '../../service'
import {Notify} from '../notify/Notify'


export const Layout = () => {
    const history = useHistory()

    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()
    const [status, setStatus] = useState(0)
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode', 'theme-color-blue')

        dispatch(ThemeActions.setMode(themeClass));
        dispatch(ThemeActions.setColor(colorClass));
    }, [dispatch])
    useEffect(() => {
        checkToken().then(res => {
            if (res !== 1) {
                history.push('/login')
            } else setStatus(1)
        })
    }, [])
    if (status !== 0)
        return (
            <>
                <Route render={(props) => {
                    return (<div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                        <Sidebar {...props} />
                        <div className="layout_content">
                            <TopNav />
                            <div className="layout_content-main">
                                <Routes />
                            </div>
                        </div>
                        <Notify />
                    </div>)
                }} />
            </>
        )
    else return <></>
}
