import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CourseItem from "../../component/course/CourseItem";
import { getCategoryList } from "../../redux/actions/categoryActions";

export default function CategoryBody() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { data } = categoryList;
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCategoryList(id, 1));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data && (
          <>
            {data.listCourse.map((item, index) => (
              <CourseItem key={index} course={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
