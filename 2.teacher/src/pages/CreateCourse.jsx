import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import '../assets/css/createCourse.css'
import api from '../assets/JsonData/api.json'
import { BarWave } from 'react-cssfx-loading/lib'
import ModalLesson from '../component/modal-lesson/ModalLesson'
import { useDispatch } from 'react-redux'
import NotifyActions from '../redux/actions/NotifyActions'


export const CreateCourse = () => {
  const dispatch = useDispatch()

  const [list_new_categories, setListNewCategories] = useState([])
  const [categoryID, setcategoryID] = useState(null)
  const choseFile_ref = useRef(null)
  const [lesson, setlesson] = useState([])
  const [courseImageUrl, setCourseImageUrl] = useState(null)
  const { id } = useParams()
  const [newChap, setNewChap] = useState(null)
  const [Course_ID, setCourseId] = useState(null)
  // Form
  const [courseName, setCourseName] = useState(null)
  const [coursePrice, setCoursePrice] = useState(null)
  const [courseImage, setCourseImage] = useState(null)
  const [courseCategory, setCourseCategory] = useState(null)
  const [courseCategoryTag, setCourseCategoryTag] = useState(null)
  const [courseDescription, setcourseDescription] = useState(null)
  const [loadStatus, setloadStatus] = useState(null)


  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset-UTF-8',
      "Accept": 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('token-teacher')}`
    }
  }
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    switch (name) {
      case "courseName":
        setCourseName(value)
        break
      case "coursePrice":
        setCoursePrice(value)
        break
      case "courseImage":
        setCourseImage(value)
        break
      case "courseCategory":
        let tmpCategory = list_new_categories.find(e => e.category.Category_ID == value)
        setcategoryID(value)
        setCourseCategory(tmpCategory)
        break
      case "courseCategoryTag":
        setCourseCategoryTag(value)
        break
      case "courseDescription":
        setcourseDescription(value)
        break
    }
  }


  const createCourse = () => {
    if (courseName === null || coursePrice === null || courseCategory === null || courseDescription === null) return
    const courseData = {
      Course_header: courseName,
      Course_price: coursePrice,
      Course_category: categoryID,
      Course_description: courseDescription,
      Course_image: courseImageUrl,
      Tag_ID: [courseCategoryTag]
    }
    if (courseImage != null) {
      const formData = new FormData()
      formData.append("file", courseImage);
      formData.append("upload_preset", "uploadimage")
      Axios.post(api.find(e => e.pages === 'Thêm khóa học').api['upload-image'], formData, {
        onUploadProgress: progressEvent => {
          setloadStatus(1)
        }
      }).then((rs) => {
        setCourseImageUrl(rs.data.secure_url)
        courseData.Course_image = rs.data.secure_url
        if (id === undefined || id === null)
          Axios.post(api.find(e => e.pages === 'Thêm khóa học').api['post-course'], courseData, axiosConfig)
            .then(
              res => {
                setCourseId(res.data.courseID)
                dispatch(NotifyActions.addNotify({ notifyType: 'notify-success', message: 'Thêm mới thành công' }))
              }
            ).catch(error => {
              console.log("Error : ", error)
            })
        else {

          Axios.put(api.find(e => e.pages === 'Thêm khóa học').api['update-course'] + id, courseData, axiosConfig)
            .then(
              res => {
                setCourseId(id)
                dispatch(NotifyActions.addNotify({ notifyType: 'notify-success', message: 'Cập nhật thành công' }))
              }
            ).catch(error => {
              console.log("Error : ", error)
            })
        }
        setloadStatus(null)
      }).catch(error => {
        console.log("Error : ", error)
      })
    } else {

      Axios.put(api.find(e => e.pages === 'Thêm khóa học').api['update-course'] + Course_ID, courseData, axiosConfig)
        .then(
          res => {
            dispatch(NotifyActions.addNotify({ notifyType: 'notify-success', message: 'Update thành công' }))
          }
        ).catch(error => {
          console.log("Error : ", error)
        })
    }

  }


  useEffect(() => {
    Axios.get(api.find(e => e.pages === 'Thêm khóa học').api['get-list_category'], axiosConfig)
      .then(
        res => {
          const data = res.data
          setListNewCategories(data)
          setCourseCategory(data[0])
          setcategoryID(data[0].category.Category_ID)
          setCourseCategoryTag(data[0].tags[0].Tag_ID)
        }
      ).catch(error => {
        console.log("Error : ", error)
      })
  }, [])

  useEffect(() => {
    if (id !== undefined && list_new_categories.length > 0) {
      Axios.get(api.find(e => e.pages === 'Thêm khóa học').api['get-infor_course'] + id, axiosConfig).then(
        res => {
          const data = res.data
          setCourseName(data[0].Course_header)
          setcourseDescription(data[0].Course_description)
          setCourseImageUrl(data[0].Course_image)
          setCoursePrice(data[0].Course_price)
          setCourseCategory(list_new_categories.find(e => e.category.Category_ID === data[0].Course_category))
          setCourseCategoryTag(data[1][0])
          setcategoryID(list_new_categories.find(e => e.category.Category_ID === data[0].Course_category).category.Category_ID)
          setlesson(data[2])
          setCourseId(id)
        }
      ).catch(error => {
        console.log("Error : ", error)
      })
    }
  }, [id, list_new_categories])


  const addNewLesson = (item) => {
    const tmpLesson = lesson
    tmpLesson.find(e => e.chap.Chap_ID === item.Chap_ID).lesson.push(item)
    setlesson(tmpLesson)
    setNewChap('')
  }

  const addNewChap = () => {
    const dataChap = {
      Course_ID,
      Chap_description: newChap
    }
    Axios.post(api.find(e => e.pages === 'Thêm khóa học').api['post-chap'], dataChap, axiosConfig)
      .then(
        res => {
          const currentlesson = lesson
          currentlesson.push({
            chap: {
              Chap_ID: res.data.Chap_ID,
              Chap_description: newChap
            },
            lesson: []
          })
          setlesson(currentlesson)
          setNewChap(null)
          dispatch(NotifyActions.addNotify({ notifyType: 'notify-success', message: 'Thêm mới chương thành công' }))
        }
      ).catch(error => {
        console.log("Error : ", error)
        dispatch(NotifyActions.addNotify({ notifyType: 'notify-error', message: 'Thêm mới không thành công' }))
      })
  }


  const updateLesson = (item) => {
    // console.log(item, lesson)
    lesson.push(item)
  }
  return (
    <div>
      <h2 className="page-header">Thêm khóa học mới</h2>
      <div className="row">
        <div className={Course_ID === null ? 'col-12' : 'col-8'}>
          <div className="card">
            <div className="card_header"><h3>Thông tin khóa học</h3></div>
            <div className="card_body">
              <div className="row">
                <div className="col-8">
                  <h4>Nhập tên khóa học</h4>
                  <div className="input-group">
                    <i className='bx bxl-discourse'></i>
                    <input
                      type="text"
                      placeholder="Tên khóa học"
                      name='courseName'
                      value={courseName}
                      onChange={(e) => { handleChange(e) }}
                    />
                  </div>
                  <h4>Nhập giá khóa học</h4>
                  <div className="input-group">
                    <i className='bx bx-dollar' ></i>
                    <input
                      type="number"
                      name="coursePrice"
                      value={coursePrice}
                      placeholder='Giá khóa học'
                      onChange={(e) => { handleChange(e) }} />
                  </div>
                  <h4>Chọn ảnh cho khóa học</h4>
                  <div className={`input-group ${courseImageUrl != null ? 'input-image' : ''}`}>
                    {
                      courseImageUrl != null ? <img src={courseImageUrl} /> : loadStatus != null ? <BarWave /> : ''
                    }
                    <i className='bx bx-image-add' ></i>
                    <input
                      type="text"
                      name="name_file"
                      value={courseImage != null ? courseImage.name : ''}
                      placeholder='Ảnh minh họa' className='file-name'
                      onChange={(e) => { handleChange(e) }}
                    />
                    <button onClick={() => { choseFile_ref.current.click() }}>
                      {courseImageUrl != null ? 'Đổi ảnh' : 'Chọn ảnh'}
                    </button>
                    <input
                      ref={choseFile_ref}
                      type="file"
                      name="courseImage"
                      onChange={(e) => { setCourseImage(e.target.files[0]) }}
                    />
                  </div>
                  <h4>Nhập thông tin mô tả khóa học</h4>
                  <div className="input-group textarea">
                    <textarea
                      name="courseDescription"
                      onChange={(e) => { handleChange(e) }}
                      value={courseDescription != null ? courseDescription : ''}>

                    </textarea>
                  </div>
                </div>
                <div className="col-4">
                  {
                    list_new_categories && list_new_categories.length > 0 ? (
                      <div>
                        <h4>Chọn category</h4>
                        {
                          courseCategory ? <div className="input-group">
                            <select
                              name="courseCategory"
                              value={categoryID != null ? categoryID : 1}
                              onChange={(e) => { handleChange(e) }}
                              disabled={id === undefined ? false : true}
                            >
                              {
                                list_new_categories.length > null ? list_new_categories.map((item, index) => <option value={item.category.Category_ID} key={index}>{item.category.Category_name}</option>) : ''
                              }
                            </select>
                          </div> : ''
                        }

                        <h4>Chọn tag</h4>
                        {
                          courseCategoryTag ? <div className="input-group">
                            <select
                              name="courseCategoryTag"
                              value={courseCategoryTag != null ? courseCategoryTag : 1}
                              onChange={(e) => { handleChange(e) }}
                              disabled={id === undefined ? false : true}
                            >
                              {
                                courseCategory.tags.length > 0 ? courseCategory.tags.map((item, index) => <option value={item.Tag_ID} key={index}>{item.Tag_name}</option>) : ''
                              }
                            </select>
                          </div> : ''
                        }
                      </div>
                    ) : ''
                  }
                </div>

              </div>
            </div>
            <div className="card_footer">
              <button onClick={createCourse}>{id === undefined ? 'Lưu lại' : 'Cập nhật'}</button>
            </div>
          </div>
        </div>
        <div className={`col-4 ${Course_ID === null ? 'd-none' : ''}`}>
          <div className="card">
            <div className="card-header__lesson">
              <h3>Danh sách bài giảng</h3>
            </div>
            <div className="card-body__lesson">
              {

                lesson.length > 0 && lesson.map((item, index) => (
                  <div className="lesson-chap" key={index}>
                    {
                      <div className="lesson-chap-header">
                        <h5>{'Chương' + (index + 1) + ': ' + item.chap.Chap_description}</h5>
                        <ModalLesson
                          title="Thêm bài giảng"
                          item={item.chap}
                          content={1}
                          addLesson={addNewLesson}
                        />
                      </div>
                    }
                    {
                      <ul>
                        {
                          item.lesson.length ? item.lesson.map((it, idx) => (
                            <ModalLesson
                              key={idx}
                              title="Update bài giảng"
                              item={item.chap}
                              updateLesson={updateLesson}
                              content={
                                { index: idx, item: it }
                              }
                            />
                          )) : ''
                        }
                      </ul>
                    }
                  </div>
                ))
              }
              <div className="card-footer">
                <div className="row">
                  <div className="col-9">
                    <input type="text" placeholder='Tạo chương mới' onChange={(e) => setNewChap(e.target.value)} />
                  </div>
                  <div className="col-3">
                    <button onClick={addNewChap}>Thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
