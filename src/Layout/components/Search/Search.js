import { useEffect, useState } from "react";
import styles from "../Header/Header.module.scss";
import classNames from "classnames/bind";
// import {Wrapper } from "../Popper/Wrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import {
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ListMovie from "../../../Compents/ListMovie/ListMovie";


const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue ] = useState ('');
  const [showResult, setShowResult]  = useState(true);

    useEffect(()=>{
        if(!searchValue.trim()) {
            return;
        }
       fetch(`https://api.themoviedb.org/3/search/multi?api_key=bef653f66382a57bb4e7f51c9ca67648&query=bb`)
        .then( res => res.json())
        .then(res =>{
                setSearchResult(res.results);
        })
    },[searchValue]);

    const handleHideResult  = () => {
        setShowResult(false)
    };

  return (
    <Tippy
        // value={searchValue}
        placement="bottom"
        interactive
         visible={ showResult && searchResult.length > 0}
        render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <ul className={cx("list-search-result")}>
                <li>
                Kết quả tìm kiếm: <strong>test</strong>
                </li>
               {/* {searchResult.map((result)=>(
                  <ListMovie key={result.id} data={result} />
                  ))} */}
                  <ListMovie />
                  <ListMovie />
                  <ListMovie />
                  <ListMovie />

            </ul>
            </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search col-span-2 col-start-4 col-end-8")}>
        <input
          className={cx("input")}
          type="search"
          placeholder="Search with Tìm kiếm movie..."
          required
          onChange={(e)=> setSearchValue(e.target.value)}
          onFocus={()=> setSearchResult(true)}
        />
        <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
