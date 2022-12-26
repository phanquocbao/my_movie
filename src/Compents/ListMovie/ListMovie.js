import { Link } from "react-router-dom";


function ListMovie({data}) {
  return (
    <>
    <li className="list-search-result-item">
      <Link href="#">
        <div className="list-search-result_list_item">
          <div className="image">
            <img src="https://hoathinh3d.com/wp-content/uploads/2022/10/052600006364701B13EB6609DE15125E-300x450.jpg" alt="" />
          </div>
          <div className="info">
              <span className="label">Bách Luyện Thành Thần</span><br/>
              <span className="enName">Elevation to the Status of a God</span>
          </div>
        </div>
      </Link>
    </li>
    </>
  );
}

export default ListMovie;
