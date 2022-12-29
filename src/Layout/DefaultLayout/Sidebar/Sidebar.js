import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

import axios from "axios";
import MovieTrending from "../../../Compents/MovieTrending/MovieTrending";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);
// const movies = [
//     {
//       id:1,
//       title:"Tinh vực 4 vạn năm",
//       originalname : "Xing Yu Si Wan Nian",
//       episode : "Tập 14",
//       src: '../../Assets/Images/tinh-vuc-4-van-nam.jpg',
//       url:'tinh-vuc-4-van-nam',
//       viewsCount: "14.3K lượt xem",
//     },
//     {
//       id:2,
//       title:"Linh Kiếm Tôn",
//       originalname : "Xing Yu Si Wan Nian",
//       episode : "Tập 122",
//       src: '../../Assets/Images/linh-kiem-ton.jpg',
//       url:'linh-kiem-ton',
//       viewsCount: "14.3K lượt xem",
//     },
//     {
//       id:3,
//       title:"Nghịch Thiên Chí Tôn",
//       originalname : "Xing Yu Si Wan Nian",
//       episode : "Tập 200",
//       src: '../../Assets/Images/nghich-thien-chi-ton.png',
//       url:'nghich-thien-chi-ton',
//       viewsCount: "14.3K lượt xem",
//     },
//     {
//       id:4,
//       title:"Vạn Cổ Thần Thoại",
//       originalname : "Xing Yu Si Wan Nian",
//       episode : "Tập 30",
//       src: '../../Assets/Images/van-co-than-thoai.jpg',
//       url:'van-co-than-thoai',
//       viewsCount: "14.3K lượt xem",
//     },
//     {
//       id:5,
//       title:"Võ Thần Chúa Tể",
//       originalname : "Xing Yu Si Wan Nian",
//       episode : "Tập 210",
//       src: '../../Assets/Images/vo-than-chua-te.jpg',
//       url:'vo-than-chua-te',
//       viewsCount: "14.3K lượt xem",
//     },
//     {
//       id:6,
//       title:"Ta tại tiên giới kiếm điểm tích lũy",
//       originalname : "Xing Yu Si Wan Nian",
//       episode : "Tập 14",
//       src: '../../Assets/Images/ta-tai-tien-gioi-kiem-diem-tich-luy.jpg',
//       url:'ta-tai-tien-gioi-kiem-diem-tich-luy',
//       viewsCount: "14.3K lượt xem",
//     },
//     {
//       id:7,
//       title:"Tinh vực 4 vạn năm",
//       originalname : "Xing Yu Si Wan Nian",
//       episode : "Tập 14",
//       src: '../../Assets/Images/tinh-vuc-4-van-nam.jpg',
//       url:'tinh-vuc-4-van-nam',
//       viewsCount: "14.3K lượt xem",
//     },
//   ];
function Sidebar() {
  const [movieTrending, setMovieTrending] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=bef653f66382a57bb4e7f51c9ca67648`
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
