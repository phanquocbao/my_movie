import { API_KEY } from "../../../Utils/constants";
import { useState, useEffect } from "react";

import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import MovieTrending from "../../../Compents/MovieTrending/MovieTrending";
import request from "../../../Utils/request";

const cx = classNames.bind(styles);

function Sidebar() {
  const [movieTrending, setMovieTrending] = useState([]);

  useEffect(() => {
    request
      .get(
        `trending/all/day?api_key=${API_KEY}`
      )
      .then((res) => {
        setMovieTrending(res.data.results);
      });
  }, []);

  return (
    <>
      <aside className={cx("wrapper col-span-3")}>
        <div className="siderbar-content p-4">
          <div className="section-title">
            <span className="">Top Trending</span>
          </div>
          <ul className="list-movie-favourite">
            {Array.isArray(movieTrending) &&
              movieTrending.map((result) => (
                <MovieTrending key={result.id} data={result} />
              ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
