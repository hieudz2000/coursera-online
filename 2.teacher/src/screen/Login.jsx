import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Axios from 'axios'
import api from '../assets/JsonData/api.json'
import { checkToken } from '../service'
import { Account } from '../Model'
import { Link } from 'react-router-dom'
import './login.css'
export const Login = () => {
    const history = useHistory()
    const [account, setaccount] = useState(new Account())
    const [status, setStatus] = useState(1)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const tmpAccount = account
        if (name === 'account')
            tmpAccount.account = value
        else if(name === 'resetPass') tmpAccount.resetPass = value
        else tmpAccount.password = value
        setaccount(tmpAccount)
    }

    useEffect(() => {
        checkToken().then(res => {
            if (res === 1) {
                history.push('/')
            }
        })
    }, [])

    const login = () => {
        console.log(account);
        
        Axios.post(api.find(e => e.pages === 'Đăng nhập').api['login'], account)
            .then(
                res => {
                    if (res.status === 200) {
                        localStorage.setItem('token-teacher', res.data.success.token)
                        history.push('/')
                        
                    }
                }
            )
    }
    const resetPass = ()=>{
        
    }
    return (
        <div>
            <div className="login-pages">
                <div className="center">
                    <div className="header">
                        <div className={`login ${status == 1 ? 'active' : ''}`}><button onClick={()=> setStatus(1)}>LOGIN</button></div>
                        <div className={`reset-pass ${status == 2 ? 'active' : ''}`}><button onClick={()=> setStatus(2)}>REGISTER</button></div>
                    </div>
                    <div className="body">
                        <div className="input-group">
                            <i className='bx bx-user-circle'></i>
                            <input type="text" placeholder='Account' name='account' value={account.account} onChange={e => handleChange(e)} />
                        </div>
                        <div className="input-group">
                            <i className='bx bxs-low-vision' ></i>
                            <input type="password" placeholder='Password' name='password' value={account.password} onChange={e => handleChange(e)} />
                        </div>
                        {
                            status === 1 ? '' :
                                <div className="input-group">
                                    <i className='bx bxs-low-vision' ></i>
                                    <input type="password" placeholder='Password' name='resetPass' value={account.resetPass} onChange={e => handleChange(e)} />
                                </div>
                        }
                        <button onClick={status=== 1 ?  login : resetPass}>{status === 1 ? 'Login' : 'Reset Pass'}</button>
                    </div>
                    <div className="footer">
                        <Link to='/register'>Bạn chưa có tài khoản? </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
