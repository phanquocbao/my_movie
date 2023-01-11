import { Link } from "react-router-dom";

function ListMovie({ data }) {
  return (
    <>
      <li className="list-search-result-item hover:bg-slate-100 dark:hover:bg-slate-800 text-sm p-[12px]">
        <Link href="#">
          <div className="list-search-result_list_item">
            <div className="image">
            <img
                src={`https://image.tmdb.org/t/p/w45//${data.poster_path}`}
                alt={data.original_title}
                className="w-[35px] h-[44px] mr-[10px]"
              />
            </div>
            <div className="info">
              <span className="label text-black dark:text-white">{data.original_title}</span>
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
