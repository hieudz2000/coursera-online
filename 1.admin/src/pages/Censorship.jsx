import React, { useEffect, useState } from 'react'
import { BarWave } from 'react-cssfx-loading/lib'
import { CensorshipLine } from '../component/censorship-line/CensorshipLine'
import Axios from 'axios'
import api from '../assets/JsonData/api.json'

export const Censorship = () => {
    const [newOrders, setNewOrders] = useState([])
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset-UTF-8',
            "Accept": 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token-admin')}`
        }
    }
    useEffect(() => {
        Axios.get(api.find((e) => e.pages === "Tổng quan").api['get-course'],axiosConfig)
            .then(
                (res) => {
                    const data = res.data
                    console.log(data);
                    
                    setNewOrders(data)
                }
            )

    }, [])
    return (
        <div>
            <h2 className="page-header">Phê duyệt bài đăng</h2>
            <div className="card">
                {
                    newOrders.length > 0 ? <CensorshipLine bodyData={newOrders} tag={2} /> : <BarWave />
                }
            </div>
        </div>
    )
}
