import React, { useEffect, useState } from "react";
import "../component/cart/cart.scss";
import CartItem from "../component/cart/CartItem";
// fake data
import { cart } from "../data/dynamic/cart";

export default function Cart() {
  const [beforeSale, setBeforeSale] = useState(0);
  const [afterSale, setAfterSale] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const tmp1 = cart.reduce((prev, item) => {
        return prev + item.price;
      }, 0);

      const tmp2 = cart.reduce((prev, item) => {
        if (item.price_sale) {
          return prev + item.price_sale;
        } else {
          return prev + item.price;
        }
      }, 0);

      setBeforeSale(tmp1);
      setAfterSale(tmp2);
    };

    getTotal();
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <div style={{ marginTop: "75px" }}>
          <div className="unica-breadcrumb">
            <div className="container">
              <span className="breadcrumb-item">
                Giỏ hàng ({cart.length} khóa học)
              </span>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-9">
                <div className="u-box-cart">
                  {cart.map((item, index) => (
                    <CartItem key={index} cartItem={item} />
                  ))}
                </div>
              </div>
              <div className="col-3">
                <div className="u-cart-price">
                  <div className="price-cart-1 text-left">
                    {afterSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <sup>đ</sup>
                    <span className="price-cart-origin">
                      {beforeSale
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <sup>đ</sup>
                    </span>
                  </div>
                  <div
                    className="price-btn-box"
                    style={{ marginBottom: "15px" }}
                  >
                    <a className="btn-one" href="/">
                      THANH TOÁN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="u-box-cart-title">
                  <p>Giỏ hàng ({cart.length} khóa học)</p>
                </div>
                <div class="u-box-cart-no-item">
                  <div class="u-icon-cart">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                  <div class="u-cart-txt">
                    Hiện tại giỏ hàng của bạn chưa có khóa học nào.
                    <br />
                    Vui lòng lựa chọn khóa học mà bạn muốn học.
                  </div>
                  <a href="/donggia" class="btn-cart">
                    Xem danh sách khóa học
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
