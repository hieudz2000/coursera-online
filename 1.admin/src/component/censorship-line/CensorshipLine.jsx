import React, { useState } from 'react'
import './censorshipLine.css'
import Table from '../table/Table'
import { Badge } from '../badge/Badge'
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import './censorshipLine.css'
import Axios from 'axios'
import api from '../../assets/JsonData/api.json'
import { useDispatch } from 'react-redux'
import notifyActions from '../../redux/actions/NotifyActions'
const latestOrderHeader = [
    "STT",
    "Tên giảng viên",
    "Giá",
    "Tên khóa học",
    "Hành động",
]

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)






export const CensorshipLine = (props) => {
    let newCourses = []
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)
    const [course, setCourse] = useState({
        teacherName: '',
        Create_date: '',
        Course_name: '',
        Lesson_count: 12,
        Course_description: ''
    })
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset-UTF-8',
            "Accept": 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token-admin')}`
        }
    }
    const handleBadge = (tag, item, index = 1) => {
        switch (tag) {
            case 1:
                Axios.post(api.find(e => e.pages === 'Phê duyệt').api['post-sencorship-approve'], { Course_ID: item.Course_ID },axiosConfig)
                    .then(
                        res => {
                            if (res.status === 200)
                                dispatch(notifyActions.addNotify({ notifyType: 'notify-success', message: `Phê duyệt thành công : ${item.Course_header}` }))
                        }
                    ).catch(
                        () =>
                            dispatch(notifyActions.addNotify({ notifyType: 'notify-error', message: `Phê duyệt không thành công: ${item.Course_header}` }))
                    )
                break
            case 2:
                Axios.post(api.find(e => e.pages === 'Phê duyệt').api['post-sencorship-refuse'], { Course_ID: item.Course_ID },axiosConfig)
                    .then(
                        res => {
                            if (res.status === 200)
                                dispatch(notifyActions.addNotify({ notifyType: 'notify-success', message: `Đã loại bỏ khóa học : ${item.Course_header}` }))
                        }
                    ).catch(
                        () =>
                            dispatch(notifyActions.addNotify({ notifyType: 'notify-error', message: `Lỗi khi loại bỏ khóa học: ${item.Course_header}` }))
                    )

                break
            case 3:
                setCourse(newCourses[index])
            default:
                return
        }
    }

    const renderOrderBody = (item, index, tag) => {
        newCourses.push(item)
        return (
            <tr key={index} >
                <td>{index + 1}</td>
                <td>{item.teacherName}</td>
                <td>{item.Course_price}</td>
                <td>{item.Course_header}</td>
                <td>
                    {
                        tag === 2 ? <>
                            <Badge content='Phê duyệt' type='success' handle={() => { handleBadge(1, item) }} />
                            <Badge content='Loại bỏ' type='danger' handle={() => { handleBadge(2, item) }} />
                        </> : ''
                    }

                    <button onClick={onOpenModal} className='btn-modal'>
                        <Badge content='Chi tiết' type='primary' handle={() => { handleBadge(3, item, index) }} />
                    </button>
                    <Modal open={open} onClose={onCloseModal} center >
                        <h2>Chi tiết khoá học</h2>
                        <div className='course-infor'>
                            <div className='course-infor__item'>
                                <span className='course-infor__item-title'>Nguời đăng khoá học</span>
                                <span className='course-infor__item-content'>{course.teacherName}</span>
                            </div>
                            <div className='course-infor__item'>
                                <span className='course-infor__item-title'>Tên khoá học</span>
                                <span className='course-infor__item-content'>{course.Course_header}</span>
                            </div>
                            <div className='course-infor__item'>
                                <span className='course-infor__item-title'>Mô tả khoá học</span>
                                <span className='course-infor__item-content lession-description_value'>{course.Course_description}</span>
                            </div>
                            <div className='course-infor__item'>
                                <span className='course-infor__item-title'>Số lượng bài giảng</span>
                                <span className='course-infor__item-content'>12</span>
                            </div>
                            <div className='course-infor__item'>
                                <span className='course-infor__item-title'>Giá khóa học </span>
                                <span className='course-infor__item-content'>{"$" + new Intl.NumberFormat().format(course.Course_price)}</span>
                            </div>
                        </div>

                    </Modal>

                </td>
            </tr>
        )

    }

    return (
        <Table
            headeData={latestOrderHeader}
            renderHead={(item, index) => renderOrderHead(item, index)}
            bodyData={props.bodyData}
            renderBody={(item, index) => renderOrderBody(item, index, props.tag)}
        />
    )
}
