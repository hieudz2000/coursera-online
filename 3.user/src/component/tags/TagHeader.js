import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getTagItem } from "../../redux/actions/tagActions";
import LoadingPage from "../Loading/Loading";

export default function TagHeader() {
  const dispatch = useDispatch();
  const tagItem = useSelector((state) => state.tagItem);
  const { data, loading } = tagItem;
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTagItem(id));
  }, [dispatch, id]);

  const location = useLocation();
  return (
    <>
      {loading && <LoadingPage />}
      {data && (
        <>
          <div className="breadcrum-wapper">
            <Breadcrumb className="container">
              <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item href={`/category/${data.category.Category_ID}`}>
                Khóa học {data.category.Category_name}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{data.tag.Tag_name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="container">
            <div className="header-title">
              <h1>Khóa học: {data.tag.Tag_name}</h1>
            </div>
            <div className="category-tags">
              {data.tags.length > 0 &&
                data.tags.map((tag, index) => {
                  return (
                    <Link
                      to={`/tag/${tag.Tag_ID}`}
                      className={
                        location.pathname === `/tag/${tag.Tag_ID}`
                          ? "btn btnTag active"
                          : "btn btnTag"
                      }
                    >
                      {tag.Tag_name}
                    </Link>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
