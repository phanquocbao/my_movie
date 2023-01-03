import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import request from "../../Utils/request";
import Header from "../../Layout/components/Header/Header";
import Nav from "../../Layout/components/Nav/Nav";
import Watch from "../../Compents/Watch/Watch";
import { API_KEY } from "../../Utils/constants";

function Watchmovie() {
  const params = useParams();
  const [watchMovie, setWatchMovie] = useState({});

  useEffect(() => {
    if (params.id === undefined) {
      return;
    }
    request
      .get(`movie/${params.id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setWatchMovie(res.data);
        console.log("watch rednder ->", typeof res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <div>
      <Header />
      <Nav />
      <div className="wrapper">
        {/* {Array.isArray(watchMovie) &&
              watchMovie.map((result) => <Watch data={result} />  )} */}
        {watchMovie.id !== undefined && <Watch data={watchMovie} />}
         {console.log(111, <Watch data={watchMovie} />)}
      </div>

    </div>
  );
}

export default Watchmovie;
