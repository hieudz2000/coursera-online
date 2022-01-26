import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CourseItem from "../../component/course/CourseItem";
import { getTagList } from "../../redux/actions/tagActions";

export default function TagBody() {
  const dispatch = useDispatch();
  const tagList = useSelector((state) => state.tagList);
  const { data } = tagList;
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTagList(id, 1));
  }, [dispatch, id]);

  const handleLoadMore = () => { };

  return (
    <>
      {data && (
        <div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
          {data.listCourse.map((item, index) => (
            <CourseItem key={index} course={item} />
          ))}
        </div>
        <button className="btn-loadMore" onClick={handleLoadMore} style={{ display: 'block' }}>
              Xem tiếp
            </button>
        </div>

      )}
    </>
  );
}
