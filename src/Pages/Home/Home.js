import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { API_KEY } from "../../Utils/constants";

import request from "../../Utils/request";
import { useState, useEffect } from "react";
import Movies from "../../Compents/Movies/Movies";
const cx = classNames.bind(styles);
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    request
      .get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div className={cx("main-content p-4")}>
      <div className={cx("item-content-img")}>
        <img src="../../Assets/Images/than-an-vuong-toa-poster.jpg" alt="..." />
        <div className={cx("slide-text bg-black text-white px-4 text-base")}>
          <h3 className="slider-title">Thần ấn vương tọa</h3>
          <div className="slider-meta hidden-xs">
            <p>[Elevation to the Status of a God]</p>
          </div>
        </div>
      </div>
      <div
        className={cx(
          "list-movie grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4"
        )}
      >
        {Array.isArray(movies) &&
          movies.map((result) => <Movies key={result.id} data={result} />)}
      </div>
    </div>
  );
}

export default Home;
