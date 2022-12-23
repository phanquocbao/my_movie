import classNames from "classnames/bind";
import { Carousel } from "flowbite-react";
import { IMAGE_PATH } from "../../Utils/constants";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
  // const images = [
  //   {
  //     title: "Than an vuong toa",
  //     src: "../../Assets/Images/than-an-vuong-toa-poster.jpg",
  //     des: "Elevation to the Status of a God",
  //   },
  // ];

  return (
    <div className={cx("main-content")}>
      <div className={cx("item-content-img")}>
        <img src="../../Assets/Images/than-an-vuong-toa-poster.jpg" alt="..." />
        <div className={cx('slide-text bg-black text-white px-4 text-base')}>
          <h3 className="slider-title">Than an vuong toa</h3>
          <div className="slider-meta hidden-xs">
            <p>[Elevation to the Status of a God]</p>
          </div>
        </div>
      </div>
      <Carousel>
      
      </Carousel>
    </div>

  );
}

export default Home;
