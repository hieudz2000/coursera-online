import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Table from '../component/table/Table'
import api from '../assets/JsonData/api.json'
import { BarWave } from 'react-cssfx-loading/lib'
const customerTableHead = [
    '',
    'Tên',
    'Email',
    'Số điện thoại',
    'Lượt mua',
    'Tổng tiền',
]

const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_order}</td>
        <td>{item.total_spend}</td>
    </tr>
)
let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset-UTF-8',
      "Accept": 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('token-teacher')}`
    }
  }
const Customers = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        Axios.get(api.find(e => e.pages === 'Học viên').api['get-list_student'],axiosConfig).then(
            res => {
                const data = res.data
                setStudents(data)
            }
        )
    }, [])
    return (
        <div>
            <h2 className="page-header">Học viên</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card_body">
                            {
                                students.length > 0 ? <Table
                                    limit='10'
                                    headeData={customerTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={students}
                                    renderBody={(item, index) => renderBody(item, index)}
                                /> : <BarWave/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Customers
