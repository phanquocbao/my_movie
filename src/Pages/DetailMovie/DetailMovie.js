
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import request from "../../Utils/request";
import Header from "../../Layout/components/Header/Header";
import Nav from "../../Layout/components/Nav/Nav";
import MovieDetail from "../../Compents/MovieDetail/MoveiDetail";
import { API_KEY } from "../../Utils/constants";

function DetailMovie() {
  const params = useParams()

  const [detailMovie, setDetailMovie] = useState({});

  useEffect(()=>{
    if (params.id === undefined){
      return
    }
    request.get(`movie/${params.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,similar`)
    .then((res)=>{
      setDetailMovie(res.data)
      // console.log('Detailmovie rednder ->', res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[params])

  return (
    <div>
      <Header />
      <Nav />
      <div className="wrapper">
        {(detailMovie.id !== undefined) && <MovieDetail res={detailMovie}  />}
        {console.log(222, <MovieDetail res={detailMovie}  />)}
      </div>
    </div>
  );
}

export default DetailMovie;
