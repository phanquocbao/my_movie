import classNames from "classnames/bind";
import styles from './MovieTrending.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function MovieTrending({data})
{
    return(
              <li className="movie-favourite-item">
              <Link to={`/movie/${data.id}`}>
              <div className="movie-favourite_item-detail">
                  <div className="image">
                  <img
                      src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                      alt={data.original_title}
                  />
                  </div>
                  <div className="info">
                  <span className="name">{data.title}</span>
                  <span className="label">{data.original_language}</span>
                  <span className="viewsCount">{`Lượt xem : ${data.vote_count}`}</span>
                  </div>
              </div>
              </Link>
          </li>
)
}

export default MovieTrending;