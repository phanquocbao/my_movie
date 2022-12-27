import { Link } from "react-router-dom";

function ListMovie({ data }) {
  return (
    <>
      <li className="list-search-result-item">
        <Link href="#">
          <div className="list-search-result_list_item">
            <div className="image">
            <img
                src={`https://image.tmdb.org/t/p/w45//${data.poster_path}`}
                alt={data.original_title}
              />
            </div>
            <div className="info">
              <span className="label">{data.original_title}</span>
              <br />
              <span className="enName">{data.original_language}</span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ListMovie;
