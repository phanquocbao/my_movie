import classNames from "classnames/bind";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
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
  const movies = [
    {
      id:1,
      title:"Tinh vực 4 vạn năm",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 14",
      src: '../../Assets/Images/tinh-vuc-4-van-nam.jpg',
      url:'tinh-vuc-4-van-nam',
    },
    {
      id:2,
      title:"Linh Kiếm Tôn",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 122",
      src: '../../Assets/Images/linh-kiem-ton.jpg',
      url:'linh-kiem-ton',
    },
    {
      id:3,
      title:"Nghịch Thiên Chí Tôn",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 200",
      src: '../../Assets/Images/nghich-thien-chi-ton.png',
      url:'nghich-thien-chi-ton',
    },
    {
      id:4,
      title:"Vạn Cổ Thần Thoại",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 30",
      src: '../../Assets/Images/van-co-than-thoai.jpg',
      url:'van-co-than-thoai',
    },
    {
      id:5,
      title:"Võ Thần Chúa Tể",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 210",
      src: '../../Assets/Images/vo-than-chua-te.jpg',
      url:'vo-than-chua-te',
    },
    {
      id:6,
      title:"Ta tại tiên giới kiếm điểm tích lũy",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 14",
      src: '../../Assets/Images/ta-tai-tien-gioi-kiem-diem-tich-luy.jpg',
      url:'ta-tai-tien-gioi-kiem-diem-tich-luy',
    },
    {
      id:7,
      title:"Tinh vực 4 vạn năm",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 14",
      src: '../../Assets/Images/tinh-vuc-4-van-nam.jpg',
      url:'tinh-vuc-4-van-nam',
    },
    {
      id:8,
      title:"Tinh vực 4 vạn năm",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 14",
      src: '../../Assets/Images/tinh-vuc-4-van-nam.jpg',
      url:'tinh-vuc-4-van-nam',
    },
    {
      id:9,
      title:"Tinh vực 4 vạn năm",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 14",
      src: '../../Assets/Images/tinh-vuc-4-van-nam.jpg',
      url:'tinh-vuc-4-van-nam',
    },
    {
      id:10,
      title:"Linh Kiếm Tôn",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 122",
      src: '../../Assets/Images/linh-kiem-ton.jpg',
      url:'linh-kiem-ton',
    },
    {
      id:11,
      title:"Nghịch Thiên Chí Tôn",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 200",
      src: '../../Assets/Images/nghich-thien-chi-ton.png',
      url:'nghich-thien-chi-ton',
    },
    {
      id:12,
      title:"Vạn Cổ Thần Thoại",
      originalname : "Xing Yu Si Wan Nian",
      episode : "Tập 30",
      src: '../../Assets/Images/van-co-than-thoai.jpg',
      url:'van-co-than-thoai',
    },

  ];
  return (
    <div className={cx("main-content p-4")}>
      <div className={cx("item-content-img")}>
        <img src="../../Assets/Images/than-an-vuong-toa-poster.jpg" alt="..." />
        <div className={cx("slide-text bg-black text-white px-4 text-base")}>
          <h3 className="slider-title">Than an vuong toa</h3>
          <div className="slider-meta hidden-xs">
            <p>[Elevation to the Status of a God]</p>
          </div>
        </div>
      </div> 
      <div className={cx("list-movie grid grid-cols-12 gap-4")}>
        {movies.map((movie,index) => (<article className="col-span-3">
             <div className="list-movie__item">
               <Link
                 className="list-movie-thumb"
                 to={movie.url}
                 title={movie.title}
               >
                 <figure>
                   <img
                     className="img-responsive"
                     src={movie.src}
                     alt={movie.title}
                     title={movie.title}
                   />
                 </figure>
                 <span className="status">HD</span>
                 <span class="episode">{movie.episode}</span>
                 <div className="icon_overlay"></div>
                 <div className="list-movie-title-box">
                   <div className="list-movie-title ">
                     <h2 className="entry-title">{movie.title}</h2>
                     <p class="original_title">{movie.originalname}</p>{" "}
                   </div>
                 </div>
               </Link>
             </div>
           </article>))}
       {console.log(2222, movies)}
        
      </div>
    </div>
  );
}

export default Home;
