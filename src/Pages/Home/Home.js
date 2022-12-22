import classNames from "classnames/bind";
import { IMAGE_PATH } from "../../Utils/constants";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
  const images = [
    {
      title: "Than an vuong toa",
      src: '../../Assets/Images/than-an-vuong-toa-poster.jpg',
      des: "Elevation to the Status of a God",
    },
  ];

  return (
    <div className={cx("main-content")}>
      <div className={cx("item-content-img")}>
        <img src="../../Assets/Images/than-an-vuong-toa-poster.jpg" />
        <div class="slide-text">
          <h3 class="slider-title">Than an vuong toa</h3>
          <div class="slider-meta hidden-xs">
            <p>[Elevation to the Status of a God]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
