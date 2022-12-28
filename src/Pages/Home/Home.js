import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "../../Compents/Movies/Movies";
const cx = classNames.bind(styles);
function Home() {
  // const images = [
  //   {
  //     title: "Than an vuong toa",
  //     src: "../../Assets/Images/than-an-vuong-toa-poster.jpg",
  //     des: "Elevation to the Status of a God",
  //   },
  // ];
 
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=bef653f66382a57bb4e7f51c9ca67648&language=en-US&page=1`)
    .then((res) =>{
      setMovies(res.data.results)
      console.log('render', res.data.results)
    })
  },[])
 
  
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
      <div className={cx("list-movie grid grid-cols-12 gap-4")}>
      {Array.isArray(movies) && movies.map((result) => (
        <Movies key={result.id} data={result}  />
      ))}
       {console.log(2222, movies)}
        
      </div>
    </div>
  );
}

export default Home;

