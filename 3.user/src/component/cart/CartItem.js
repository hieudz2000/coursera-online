import React from "react";

export default function CartItem({ cartItem }) {
  return (
    <div className="u-cart-course">
      <div className="img-cart-course">
        <img
          className="img-responsive"
          src={cartItem.img}
          width="140"
          height="70"
          alt=""
        />
      </div>
      <div className="title-cart-course">
        <p>{cartItem.title}</p>
        <span>Giảng viên: {cartItem.teacher}</span>
      </div>
      <div className="price-cart cart-price-sub">
        <p>
          {cartItem.price_sale
            ? cartItem.price_sale
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : cartItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <sup>đ</sup>
        </p>
        {cartItem.price_sale ? (
          <span>
            {cartItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <sup>đ</sup>
          </span>
        ) : null}
      </div>
      <div className="remove-course">
        <i
          type="course_id"
          title="Xóa khóa học này"
          alt="Xóa khóa học này"
          className="fa fa-times del_cart"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
}
