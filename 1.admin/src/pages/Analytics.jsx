import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import '../assets/css/analyics.css'


const chartOptions = {
    color: ['#6ab04c', '#2980b9'],
    chart: {
        background: 'transparent'
    },
    dataLabels: {
        enabled: true
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
        show: true
    }
}


const Analytics = () => {
    const [checkStatus, setCheckStatus] = useState('line')
    const [dashboard, setDashboard] = useState([
        {
            name: 'Học viên mới',
            data: [123, 342, 4, 24, 2, 24, 3, 2, 23]
        },
        {
            name: 'Giáo viên mới',
            data: [2, 123, 123, 13, 3, 13, 42, 41, 34]
        },
        {
            name: 'Doanh thu',
            data: [300, 400, 500, 600, 200, 500, 200, 542, 121]
        }
    ])
    const [charTeacher, setCharTeacher] = useState([
        {
            name: 'Khóa học mới',
            data: [123, 342, 4, 24, 2, 24, 3, 2, 23]
        },
        {
            name: 'Doanh thu',
            data: [2, 123, 123, 13, 3, 13, 42, 41, 34]
        }
    ])
    const [charStudent, setCharStudent] = useState([
        {
            name: 'Học viên mới',
            data: [123, 342, 4, 24, 2, 24, 3, 2, 23]
        },
        {
            name: 'Giáo viên mới',
            data: [2, 123, 123, 13, 3, 13, 42, 41, 34]
        }
    ])
    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    

    const ranges = [
        {
            value : 10,
            label : "10 ngày"
        },
        {
            value : 20,
            label : "20 ngày"
        },
        {
            value : 30,
            label : "30 ngày"
        },
        {
            value : 40,
            label: "Toàn bộ"
        }

    ]

    const [selectRange, setSelectRange] = useState(ranges[0]);
   

    const compareDate = (dateStart, dateEnd) => {
        if (dateStart.getTime() === dateEnd.getTime()) {
            return 0;
        }
        else if (dateStart.getTime() < dateEnd.getTime()) {
            return -1;
        } else {
            return 1;
        }
    }
    return (
        <div className="analyics-component">
            <div className="analyics-header">
                <h2 className="page-header">Thống kê hệ thống</h2>
                <div>
                    <div className="checkbox-group">
                        <input type="checkbox" name="filter" id="" checked={checkStatus === 'line' ? true : false} onChange={() => setCheckStatus('line')} />
                        <span>Line</span>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" name="filter" id="" checked={checkStatus === 'bar' ? true : false} onChange={() => setCheckStatus('bar')} />
                        <span>Bar</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card  char-dashboard-top">
                        <div className="card_heder">
                            <h3>Tổng quan</h3>
                        </div>
                        <div className="card_body char-analytics-top">

                            <Chart
                                options={themeReducer === 'theme-mode-light' ? {
                                    ...chartOptions,
                                    theme: { mode: 'light' }
                                } : {
                                    ...chartOptions,
                                    theme: { mode: 'dark' }
                                }}
                                series={dashboard}
                                type={checkStatus}
                                height='100%'
                            />
                        </div>
                        <div className="card_footer">
                            {
                                ranges.map((item, index) => (
                                    <button key={item.label} className={selectRange.value === item.value ? 'btn-select' : 'button' }
                                    onClick={() => setSelectRange(item)}>
                                        {item.label}
                                    </button>
                                ))
                            }

                        </div>

                    </div>

                </div>

            </div>
           
        </div>
    )
}

export default Analytics
