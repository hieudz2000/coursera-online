import React from "react";
import "./category.scss";
import CategoryHeader from "../../component/category/CategoryHeader";
import CategoryBody from "../../component/category/CategoryBody";

export default function Category({ props }) {
  return (
    <div style={{ margin: "65px 0" }}>
      <CategoryHeader />
      <CategoryBody />
    </div>
  );
}
