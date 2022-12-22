import Header from "../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "../components/Nav/Nav";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles); 

function DefaultLayout({children}){
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Nav />
           <div className={cx('flex justify-center')}>
               <div className={cx('w-[1170px]')}>
                    <div className={cx('grid grid-cols-12')}>
                        <div className={cx('content col-start-1 col-end-9')}>
                                {children}
                        </div>
                         <Sidebar />
                    </div>
               </div>
           </div>
        </div>
    )
}

export default DefaultLayout;