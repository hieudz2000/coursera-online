import CourseDetailsTeacher from "./courseDetailsTeacher/CourseDetailsTeacher";

function CourseTeacher() {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="items-teacher">Khóa học của giảng viên Ts. Lê Thẩm Dương</h3>
                    </div>
                    <div className="col-12">
                        <CourseDetailsTeacher />
                    </div>
                </div>

            </div>
        </div>)

}

export default CourseTeacher;