import { useEffect, useState } from "react";
import styles from "../Header/Header.module.scss";
import classNames from "classnames/bind";

// import {Wrapper } from "../Popper/Wrapper";
import request from "../../../Utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import {
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ListMovie from "../../../Compents/ListMovie/ListMovie";

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }
    setLoading(true);
    request
      .get("search/multi?api_key=bef653f66382a57bb4e7f51c9ca67648&query", {
        params: {
          query: searchValue,
        },
      })
      // .then((res) => res.json())
      .then((res) => {
        // console.log(res.data.results)
        setSearchResult(res.data.results);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <Tippy
      content="Nhan Enter de tim kiem"
      value={searchValue}
      placement="bottom"
      interactive
      visible={showResult && !!searchResult && searchResult.length > 0}
      render={(attrs) => (
        <div
          className={cx("search-result bg-slate-300 dark:bg-black")}
          tabIndex="-1"
          {...attrs}
        >
          <ul className={cx("list-search-result")}>
            <li>
              Kết quả tìm kiếm: <strong>{searchValue}</strong>
            </li>
            {Array.isArray(searchResult) &&
              searchResult.map((result) => (
                <ListMovie key={result.id} data={result} />
              ))}
          </ul>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div
        className={cx(
          `search w-[450px] h-[30px] items-center mt-[10px] 
          shadow-none border-white bg-sky-200 dark:border-black
           dark:bg-slate-700 text-sm rounded border-solid px-[12px] py-[10px] divide-x-2 hidden sm:flex col-span-2`
        )}
      >
        <input
          className={cx("input")}
          type="search"
          placeholder="Search with Tìm kiếm movie..."
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setSearchResult(true)}
        />
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
