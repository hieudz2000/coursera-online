import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Axios from 'axios'
import api from '../assets/JsonData/api.json'
import { checkToken } from '../service'
import { Account } from '../Model'
import './register.css'
import { Link } from 'react-router-dom'
const Register = () => {
    const history = useHistory()
    const [account, setaccount] = useState(new Account())
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

    const createAccount = () => {
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

    return (
        <div>
            <div className="register-pages">
                <div className="center">
                    <div className="header">
                        <div className='register'><button>REGISTER</button></div>
                    </div>
                    <div className="body">
                        <div className="input-group-register">
                            <i className='bx bx-user-circle'></i>
                            <input type="text" placeholder='Nhập tên của bạn' name='name' value={account.name} onChange={e => handleChange(e)} />
                        </div>
                        <div className="input-group-register">
                            <i className='bx bx-user-circle'></i>
                            <input type="text" placeholder='Nhập tên tài khoản' name='account' value={account.account} onChange={e => handleChange(e)} />
                        </div>
                        <div className="input-group-register">
                            <i class='bx bxs-low-vision' ></i>
                            <input type="password" placeholder='Nhập password của bạn' name='password' value={account.password} onChange={e => handleChange(e)} />
                        </div>
                        <div className="input-group-register">
                            <i class='bx bxs-low-vision' ></i>
                            <input type="password" placeholder='Nhập lại password' name='password' value={account.resetPass} onChange={e => handleChange(e)} />
                        </div>
                   
                        <button onClick={createAccount}>Register</button>
                    </div>
                    <div className="footer">
                        <Link to='/login'>Bạn đã có tài khoản? </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register