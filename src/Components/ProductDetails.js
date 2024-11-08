import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import img2 from "../assets/img2.png";
import star from "../assets/star.png";
import starWhite from "../assets/starWhite.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import tiktok from "../assets/tiktok.png";
import logo from "../assets/logo.png";
import { getReviewsById } from "../Utils/Utils";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Destructure product from state
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    console.log("prod...");
    console.log(product.reviews);

    getReviewsById(product.id).then((res) => {
      console.log(res);
      setReviews(res);
    });
  }, [product]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div
      id="section2"
      className="section section2 w-full h-full flex justify-space-between px-80 box-sizing"
    >
      <div className="w-25 flex relative align-items-center justify-center details-left  h-full  border-radius-5 bg-orange white">
        <img
          alt=" "
          src={product.imgSrc[0]}
          width={300}
          className="absolute left0 "
        />

        <img alt="" src={logo} height={50} className="absolute top0 left0 " />

        <div className="bold absolute back-text">
          <p>{product.name}</p>
        </div>
      </div>
      <div className="flex details-right w-75  flex-column justify-center px-80 py-80 box-sizing">
        <p className="bold grey">
          SPORT GATE <span className="orange">.</span> PRODUCT
        </p>

        <p className="small-text grey">{product.brand}</p>
        <p className="sec-text">{product.name}</p>

        <p className="my-20 small-text">
          Company Name Is Now Open And Only For It Cause.Company Name Is Now
          Open And Only For It Cause, Company Name Is Now Open And Only For It
          Cause, Company Name Is Now Open And Only For It Cause.Company Name Is
          Now Open And Only For It Cause.Company Name Is Now Open And Only For
          It Cause, Company Name Is Now Open And Only For It Cause, Company Name
          Is Now Open And Only For It Cause.
        </p>

        <div className="action-button bg-black my-20">
          <p className="btn">{product.price} DA</p>
        </div>

        <div className="reviews-container   my-10 flex align-items-center">
          {reviews.length === 0 ? (
            <div className="review-container bg-grey flex align-items-center justify-center relative px-10 py-10 box-sizing bg- border-radius-5 mr-10">
              <p className="small-text"></p>
              <p className="grey small-text center-text absolute">
                ' No Reviews Yet '
              </p>
            </div>
          ) : (
            reviews.map((review) => {
              return (
                <div className="review-container flex-column jusftify-center bold black relative px-10 py-10 box-sizing bg-grey border-radius-5 mr-10 ">
                  <p className="small-text">
                    {review.reviewerName}
                    <br />
                    <span className="grey smaller-text">
                      {review.createdAt}
                    </span>
                  </p>

                  <p className="grey small-text my-10 center-text ">
                    ' {review.reviewText} '
                  </p>

                  <div className="flex justify-space-between w-full">
                    {new Array(parseInt(review.rating))
                      .fill(undefined)
                      .map(() => {
                        return <img alt="star" src={starWhite} className="" />;
                      })}

                    {new Array(parseInt(5 - review.rating))
                      .fill(undefined)
                      .map(() => {
                        return <img alt="star" src={starWhite} className="" />;
                      })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="flex justify-space-between align-items-center w-full">
          <div
            className="action-button bg-orange my-20"
            
          >
            <a href="http://localhost:3000" className="link">
              <p className="btn">Order Now</p>
            </a>
          </div>

          <div className="">
            <img
              alt=""
              src={fb}
              className="inverted-image50 logo-img mx-10 social-icon"
            />
            <img
              alt=""
              src={insta}
              className="inverted-image50 logo-img mx-10 social-icon"
            />
            <img
              alt=""
              src={tiktok}
              className="inverted-image50 logo-img mx-10 social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
