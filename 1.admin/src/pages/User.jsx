import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Table from '../component/table/Table'
import api from '../assets/JsonData/api.json'
import { BarWave } from 'react-cssfx-loading/lib'
import '../assets/css/user.css'
const studentTableHead = [
    '',
    'Tên',
    'Email',
    'Số điện thoại',
    'Lượt mua',
    'Tổng tiền',
]
const teacherTableHeader = [
    '',
    'Tên',
    'Email',
    'Số điện thoại',
    'Số khóa học',
    'Doanh thu'
]
const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBodyStudent = (item, index) => (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.User_name}</td>
        <td>{item.User_account}</td>
        <td>{item.User_phone}</td>
        <td>{item.count}</td>
        <td>{item.total}</td>
    </tr>
)
const renderBodyTeacher = (item, index) => (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.User_name}</td>
        <td>{item.User_account}</td>
        <td>{item.User_phone}</td>
        <td>{item.count}</td>
        <td>{item.total}</td>
    </tr>
)

const User = () => {
    const [students, setStudents] = useState([])
    const [teachers, setTeachers] = useState([])
    const [checkStatus, setCheckStatus] = useState(1)
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset-UTF-8',
            "Accept": 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token-admin')}`
        }
    }
    
    useEffect(() => {
        Axios.get(api.find(e => e.pages === 'Học viên').api['get-list_student'], axiosConfig).then(
            res => {
                const data = res.data
                setStudents(data)
            }
        )
        Axios.get(api.find(e => e.pages === 'Học viên').api['get-list_teacher'], axiosConfig).then(
            res => {
                console.log(res.data);
                const data = res.data.slice(0, 5)
                setTeachers(data)
            }
        )
    }, [])

  
    return (
        <div>
            <div className="page-user_header">
                <h2 className="page-header">Người dùng</h2>
                <div className="page-sub_cotent">
                    <div className="checkbox-group">
                        <input type="checkbox" name="filter" id="" checked={checkStatus === 1 ? true : false} onChange={() => setCheckStatus(1)} />
                        <span>Giảng viên</span>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" name="filter" id="" checked={checkStatus === 2 ? true : false} onChange={(e) => setCheckStatus(2)} />
                        <span>Học viên</span>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card_body">
                            {
                                checkStatus === 2 && students.length > 0 ? <Table
                                    limit='10'
                                    headeData={studentTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={students}
                                    renderBody={(item, index) =>renderBodyStudent(item, index)}
                                /> : ''
                            }
                            {
                                checkStatus === 1 && teachers.length > 0 ? <Table
                                limit='10'
                                headeData={teacherTableHeader}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={teachers}
                                renderBody={(item, index) =>renderBodyTeacher(item, index)}
                            /> : ''
                            }
                            {
                                students.length === 0 && teachers.length === 0 ? <BarWave /> : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default User
