import Header from "../../Layout/components/Header/Header";
import Sidebar from "../../Layout/DefaultLayout/Sidebar/Sidebar";
function Watchmovie (){
    return(
        <div>
            <Header />
            <div className="content">
                 <h2> Watchmovie </h2>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Watchmovie;