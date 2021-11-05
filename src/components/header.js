import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Header() {
  return (
    <>
      <div className="box d-flex justify-content-around align-items-center">
        <div className="sidemenu">
          <h6>my markets</h6>
          <ul>
            <li><i class="fab fa-product-hunt"></i> Consumer electronics</li>
            <li><i class="fab fa-product-hunt"></i> Apperial</li>
            <li><i class="fab fa-product-hunt"></i> vehicles & Accessories</li>
            <li><i class="fab fa-product-hunt"></i> Sport & entertainment</li>
            <li><i class="fab fa-product-hunt"></i> machinery</li>
            <li><i class="fab fa-product-hunt"></i> home & garden</li>
            <li><i class="fab fa-product-hunt"></i> beauty & personal care</li>
            <li><i class="fab fa-product-hunt"></i> all categories</li>
          </ul>
        </div>
        <div className="slider">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s.alicdn.com/@img/imgextra/i2/O1CN01eDYIeP1DSyFsa06Oi_!!6000000000216-0-tps-990-400.jpg"
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s.alicdn.com/@img/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s.alicdn.com/@img/imgextra/i3/O1CN01QEL53b1ZNOzSa5hHT_!!6000000003182-0-tps-990-400.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

      </div>
    </>
  );
}

export default Header;
