import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Table from '../component/table/Table'
import api from '../assets/JsonData/api.json'
import { BarWave} from 'react-cssfx-loading/lib'
const customerTableHead = [
    'ID',
    'Người mua',
    'Khóa học',
    'Tổng tiền',
    'Ngày mua'
]

const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.coursename}</td>
        <td>{item.price}</td>
        <td>{item.Payment_date}</td>
    </tr>
)
let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset-UTF-8',
      "Accept": 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('token-teacher')}`
    }
  }
const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([])
    useEffect(() => {
        Axios.get(api.find(e => e.pages === 'Lịch sử mua').api['get-list_history'],axiosConfig).then(
            res => {
                const data = res.data
                console.log(data);
                setOrderHistory(data)
            }
        ).catch(
            error => console.log(error)
        )
    }, [])
    return (
        <div>
            <h2 className="page-header">Lịch sử bán</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card_body">
                            {
                                orderHistory.length > 0 ? <Table
                                    limit='10'
                                    headeData={customerTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={orderHistory}
                                    renderBody={(item, index) => renderBody(item, index)}
                                /> : <BarWave />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default OrderHistory
