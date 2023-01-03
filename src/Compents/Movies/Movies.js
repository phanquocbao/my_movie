import { Link } from "react-router-dom";
function Movies ({data}){

    return(
        <article className="col-span-3">
             <div className="list-movie__item">
               <Link
                 className="list-movie-thumb"
                 to={`/movie/${data.id}`}
                 title={data.original_title}
               >
                 <figure>
                   <img
                     className="img-responsive"
                     src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}  
                     alt={data.original_title}
                     title={data.original_title}
                   />
                 </figure>
                 <span className="episode">{data.release_date}</span>
                 <div className="icon_overlay"></div>
                 <div className="list-movie-title-box">
                   <div className="list-movie-title ">
                     <h2 className="entry-title">{data.original_title}</h2>
                     <p className="original_title">{data.title}</p>{" "}
                   </div>
                 </div>
               </Link>
             </div>
           </article>
    )
}

export default Movies;