import Header from "../../Layout/components/Header/Header";
import Nav from "../../Layout/components/Nav/Nav";
import styles from "./DetailMovie.module.scss";
import Sidebar from "../../Layout/DefaultLayout/Sidebar/Sidebar";
function DetailMovie() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="wrapper ">
        <div className="bg relative z-10">
          <img
            className="h-[600px] w-full"
            src="../../Assets/Images/yIP9BQtvriiO43vwWERdoZJ6Uus.jpg"
          />

          <div className="single  absolute z-0 top-[100px] left-[100px] right-[100px] bottom-[100px]">
            <div className="flex justify-center justify-around">
              <div className="w-[1170px] main-content">
                <div className="original_header flex ">
                  <div className="poster-wrapper max-w-[300px] max-h-[450px]">
                    <div class="image_content w-full backdrop">
                      <img
                        class="poster max-w-[300px]  max-h-[450px]"
                        src="../../Assets/Images/esRxshmD2BY1UPkiUHt7Gn2mksl.jpg"
                      />
                    </div>
                  </div>
                  <div className="header_poster_wrapper pl-[40px]">
                    <div className="Header poster">
                      <div className="title ">
                        <h2 className="10 text-white">
                          <a href="/tv/36361-ulice" className="font-bold">
                            The Street
                          </a>
                          <span className="tag release_date">(2005)</span>
                        </h2>

                        <div className="facts flex text-sm justify-start">
                          <span className="certification border border-white border-solid mr-4">
                            TV-PG
                          </span>

                          <span className="genres mr-4">
                            <a
                              className="mr-2"
                              href="/genre/18-phim-chinh-k-ch/tv"
                            >
                              Phim Chính Kịch
                            </a>
                            ,&nbsp;
                            <a className="" href="/genre/35-phim-hai/tv">
                              Phim Hài
                            </a>
                          </span>

                          <span className="runtime mr-4">50m</span>
                        </div>
                      </div>
                      <div className="header_info">
                        <h3 className="my-2 text-white" dir="auto">
                          Overview
                        </h3>
                        <div className="overview text-white text-sm" dir="auto">
                          <p>
                            Ulice is a Czech soap opera produced and broadcast
                            by Nova. In the Czech language Ulice means street.
                          </p>
                          <p></p>
                          <p>
                            The show describes the lives of the Farský, Jordán,
                            Boháč, Nikl, and Liška families and many other
                            people that live in Prague. Their daily battle
                            against real problems of living in a modern world
                            like divorce, love, betrayal and illness or disease.
                            Ulice often shows crime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[1170px] content">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-9"></div>
            <div className="col-span-3">
              <Sidebar />
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
