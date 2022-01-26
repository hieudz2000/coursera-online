import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { CourseCard } from '../component/course-card/CourseCard'

import api from '../assets/JsonData/api.json'
import { Coin } from 'react-cssfx-loading/lib'
import NotifyActions from '../redux/actions/NotifyActions'
import { useDispatch } from 'react-redux'

export const Courses = () => {
    const dispatch = useDispatch()
    const [courses, setCourses] = useState([])
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset-UTF-8',
            "Accept": 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token-teacher')}`
        }
    }
    useEffect(() => {
        Axios.get(api.find(e => e.pages === 'Khóa học').api['get-list_course'],axiosConfig)
            .then(
                res => {
                    const data = res.data
                    setCourses(data.listCourses)
                    if(data.listCourses.length < 1) 
                        dispatch(NotifyActions.addNotify({
                            notifyType:'notify-warning',
                            message: 'Bạn chưa có khóa học nào!'
                        }))
                }
            )
    }, [])
    return (
        <div>
            <div className="course-header">
                <h2 className="page-header f-left">Danh sách khóa học của bạn</h2>
                <Link to='/create-course' className='btn-create'><i className='bx bxs-message-alt-add'></i>Tạo mới</Link>
            </div>
            <div className="row">
                {
                    courses.length > 0 ?
                        courses.map((item, index) => (
                            <div className="col-3" key={index}>
                                <CourseCard
                                    id={item.Course_ID}
                                    name={item.Course_header}
                                    rate={item.Course_rate}
                                    students={item.totalStudents}
                                    image={item.Course_image}
                                />
                            </div>
                        )) : <Coin />
                }
            </div>
        </div>
    )
}
