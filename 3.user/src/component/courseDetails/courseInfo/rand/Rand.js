import React from "react";
import RateStar from "../../../RateStar";
import "./rand.scss";

export default function Rand({ data }) {
  // askdjsakdjk
  return (
    <div className="u-rate-hv">
      <h4 className="pt-1 mb-0 pb-0">Đánh giá của học viên</h4>
      <hr />
      <div className="row">
        <div className="col-3">
          <div className="urh-left">
            <div className="number-big-rate">{data[0].Course_rate}</div>
            <div className="star-big-rate">
              <span className="star-rate">
                <RateStar rating={4} />
              </span>
            </div>
            <div className="count-rate">162 đánh giá</div>
          </div>
        </div>
        <div className="col-9">
          <div className="urh-right">
            <div className="u-rate-f1">
              <div className="row">
                <div className="col-8">
                  <div className="u-rate-f1-progress">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="77"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="u-rate-f1-star">
                    <span className="star-rate">
                      <RateStar rating={5} />
                    </span>
                  </div>
                </div>
                <div className="col-1">
                  <div className="u-rate-f1-num">
                    <p>77%</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="u-rate-f1">
              <div className="row">
                <div className="col-8">
                  <div className="u-rate-f1-progress">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="7"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "7%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="u-rate-f1-star">
                    <span className="star-rate">
                      <RateStar rating={4} />
                    </span>
                  </div>
                </div>
                <div className="col-1">
                  <div className="u-rate-f1-num">
                    <p>7%</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="u-rate-f1">
              <div className="row">
                <div className="col-8">
                  <div className="u-rate-f1-progress">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="9"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "9%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="u-rate-f1-star">
                    <span className="star-rate">
                      <RateStar rating={3} />
                    </span>
                  </div>
                </div>
                <div className="col-1">
                  <div className="u-rate-f1-num">
                    <p>9%</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="u-rate-f1">
              <div className="row">
                <div className="col-8">
                  <div className="u-rate-f1-progress">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="u-rate-f1-star">
                    <span className="star-rate">
                      <RateStar rating={2} />
                    </span>
                  </div>
                </div>
                <div className="col-1">
                  <div className="u-rate-f1-num">
                    <p>0%</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="u-rate-f1">
              <div className="row">
                <div className="col-8">
                  <div className="u-rate-f1-progress">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="7"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "7%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="u-rate-f1-star">
                    <span className="star-rate">
                      <RateStar rating={1} />
                    </span>
                  </div>
                </div>
                <div className="col-1">
                  <div className="u-rate-f1-num">
                    <p>7%</p>
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
