import React from "react";
import { productsData } from "../constants";
import productStyles from "../styles/Products.module.css";
import Slider from "../components/Slider";

const products = () => (
  <React.Fragment>
    <div
      className={`${productStyles.section} ${productStyles.section4Section}`}
    >
      <div className={productStyles.container}>
        <div className={productStyles.section4}>
          {/* <div className={productStyles.wrapper}>
            <Slider
              img={{
                img1: "assets/sps_yellow.svg",
                img2: "assets/yellowSPSInterior1.png",
              }}
            />
            <h5>{productsData.h1}</h5>
            <p>{productsData.p1}</p>
          </div> */}
          <div className={productStyles.wrapper}>
            {/* <img src="/assets/sps_blue.svg" alt="product_pic" /> */}
            <Slider
              img={{
                img1: "assets/sps_blue.svg",
                img2: "assets/blueSPSInterior1.png",
              }}
            />
            <h5>{productsData.h2}</h5>
            <p>{productsData.p2}</p>
          </div>
          <div className={productStyles.wrapper}>
            {/* <img src="/assets/ada_blue.svg" alt="product_pic" /> */}
            <Slider
              img={{
                img1: "assets/ada_blue.svg",
                img2: "assets/ADAInterior1.jpg",
              }}
            />
            <h5>{productsData.h3}</h5>
            <p>{productsData.p3}</p>
          </div>
          <div className={productStyles.wrapper}>
            {/* <img src="/assets/flushable.svg" alt="product_pic" /> */}
            <Slider
              img={{
                img1: "assets/flushable.svg",
                img2: "assets/whiteFlushableInterior1.jpg",
              }}
            />
            <h5>{productsData.h4}</h5>
            <p>{productsData.p4}</p>
          </div>
          <div className={productStyles.wrapper}>
            {/* <img src="/assets/sink.svg" alt="product_pic" /> */}
            <Slider
              img={{ img1: "assets/sinkFront.png", img2: "assets/sink.png" }}
            />
            <h5>{productsData.h5}</h5>
            <p>{productsData.p5}</p>
          </div>
          {/* <div className={productStyles.wrapper}>
            <Slider
              img={{
                img1: "assets/VIP-Flush-1.svg",
                img2: "assets/blueFlushableInterior.jpg",
              }}
            />
            <h5>{productsData.h6}</h5>
            <p>{productsData.p6}</p>
          </div> */}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default products;
