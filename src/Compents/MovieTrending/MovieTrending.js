import classNames from "classnames/bind";
import styles from './MovieTrending.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function MovieTrending({data})
{
    return(
              <li className="movie-favourite-item bg-slate-200 dark:bg-slate-800 mt-[10px]">
              <Link to={`/movie/${data.id}`}>
              <div className="movie-favourite_item-detail flex text-sm">
                  <div className="image">
                  <img
                      src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                      alt={data.original_title}
                  />
                  </div>
                  <div className="info ml-[12px]">
                  <span className="name dark:text-gray-400 text-black">{data.title}</span>
                  <span className="label dark:text-gray-400 text-black cursor-pointer text-sm">{data.original_language}</span>
                  <span className="viewsCount text-xs mt-[5px] dark:text-yellow-400 text-gray-500">{`Lượt xem : ${data.vote_count}`}</span>
                  </div>
              </div>
              </Link>
          </li>
)
}

export default MovieTrending;