import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'
import statusCard from '../assets/JsonData/status-card-data.json'
import { StatusCard } from '../component/status-card/StatusCard'
import Table from '../component/table/Table'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import api from '../assets/JsonData/api.json'
import { CensorshipLine } from '../component/censorship-line/CensorshipLine'
import { FadingBalls, Ring } from 'react-cssfx-loading/lib'

const chartOptions = {
    color: ['#6ab04c', '#2980b9'],
    chart: {
        background: 'transparent'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
        position: 'top'
    },
    grid: {
        show: false
    }
}


const topCustomerHeader = [
    'STT',
    'Tên',
    'Doanh thu'
]


const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderCustomerBody = (item, index) => {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.User_name}</td>
            <td>{"$" + new Intl.NumberFormat().format(item.total)}</td>
        </tr>
    )
}

const Dashboard = () => {
    const [counter, setCounter] = useState([])
    const [students, setStudents] = useState([])
    const [newOrders, setNewOrders] = useState([])
    const [serial, setSerial] = useState([
        {
            name: 'Khóa học mới',
            data: []
        },
        {
            name: 'Giáo viên mới',
            data: []
        }
    ])
   
    useEffect(() => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset-UTF-8',
                "Accept": 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token-admin')}`
            }
        }
        Axios.get(api.find((e) => e.pages === "Tổng quan").api['get-chart'],axiosConfig)
            .then(
                (res) => {
                    setSerial([
                        {
                            name: 'Khóa học mới',
                            data: res.data[0]
                        },
                        {
                            name: 'Doanh thu',
                            data: res.data[1]
                        }
                    ])
                }
            )
        Axios.get(api.find((e) => e.pages === "Tổng quan").api['get-counter'],axiosConfig)
            .then(
                (res) => {
                    setCounter([
                        res.data.totalTeacher,
                        res.data.totalStudent,
                        res.data.totalPay,
                        res.data.totalCourse
                    ])
                }
            )
        Axios.get(api.find((e) => e.pages === "Tổng quan").api['get-top_teacher'],axiosConfig)
            .then(
                (res) => {
                    const data = res.data
                    setStudents(data);
                }
            )

        Axios.get(api.find((e) => e.pages === "Tổng quan").api['get-course'],axiosConfig)
            .then(
                (res) => {
                    const data = res.data.slice(0,4)
                    setNewOrders(data)
                }
            )
    }, [])

    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    return (
        <div>
            <h2 className="page-header">Tổng quan</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCard.map((item, index) => (
                                <div key={index} className="col-6">
                                    <StatusCard
                                        icon={item.icon}
                                        count={counter[index]}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={themeReducer === 'theme-mode-light' ? {
                                ...chartOptions,
                                theme: { mode: 'light' }
                            } : {
                                ...chartOptions,
                                theme: { mode: 'dark' }
                            }}
                            series={serial}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-5">
                    <div className="card">
                        <div className="card_header">
                            <h3>Giảng viên tiêu biểu</h3>
                        </div>
                        <div className="card_body">
                            {
                                students.length > 0 ? <Table
                                    headeData={topCustomerHeader}
                                    renderHead={(item, index) => renderCustomerHead(item, index)}
                                    bodyData={students}
                                    renderBody={(item, index) => renderCustomerBody(item, index)}
                                /> : <FadingBalls/>
                            }

                        </div>
                        <div className="card_footer">
                            <Link to='/'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="card">
                        <div className="card_header">
                            <h3>Khóa học cần kiểm duyệt</h3>
                        </div>
                        <div className="card_body">
                            {
                                newOrders.length > 0 ? <CensorshipLine bodyData={newOrders} tag={1}/> : <FadingBalls/>
                            }
                        </div>
                        <div className="card_footer">
                            <Link to='/censorship'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard