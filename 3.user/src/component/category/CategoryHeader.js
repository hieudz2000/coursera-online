import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategoryItem } from "../../redux/actions/categoryActions";
import LoadingPage from "../Loading/Loading";
export default function CategoryHeader() {
  const dispatch = useDispatch();
  const categoryItem = useSelector((state) => state.categoryItem);
  const { data, loading } = categoryItem;
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCategoryItem(id));
  }, [dispatch, id]);
  return (
    <>
      {loading && <LoadingPage />}
      {data && (
        <>
          <div className="breadcrum-wapper">
            <Breadcrumb className="container">
              <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item active>
                Khóa học: {data.category.Category_name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="container">
            <div className="header-title">
              <h1>Khóa học {data.category.Category_name}</h1>
            </div>
            <div className="category-tags">
              {data.tags &&
                data.tags.map((tag) => (
                  <Link to={`/tag/${tag.Tag_ID}`} className="btn btnTag">
                    {tag.Tag_name}
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
