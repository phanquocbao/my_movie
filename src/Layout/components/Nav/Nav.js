import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Nav (){
    const menus = [
    {
        id: '/',
        title :'Trang Chủ',
    },
    {
        id: 'the-loai',
        title : 'Thể Loại',
        submenu: [
        {
            title: "Huyền Huyễn",
        },
        {
            title: "Xuyên không",
        },
        {
            title: "Trùng sinh",
        },
        {
            title: "Tiên hiệp",
        },
        ]
    },
    {
        id: 'phim-le',
        title: 'Phim Lẻ'
    },
    {   id: 'phim-dang-chieu',
        title: 'Phim Đang Chiếu'
    },
    {   id: 'lich-chieu',
        title: 'Lịch Chiếu'
    },
    {   id: 'phim-hoan-thanh',
        title: 'Phim Hoàn Thành'
    },
    {
        id: 'phim-sap-chieu',
        title: 'Phim Sắp Chiếu',
    }];
    return <div className={cx('wrapper bg-darkbluea min-h-[50px] flex items-center justify-center')}>
               <div className={cx('container-main w-[1170px] ')}>
                    <ul className={cx('inner flex text-sm')}>
                         {menus.map((menu,index)=> (
                            <li key={menu.id}> <Link title={menu.title} className={cx('text-white block transition ease-in-out delay-80 py-4 px-4 hover:bg-black hover:text-cyan-400')} to={`/${menu.id}`}>{menu.title}</Link></li>
                         ))} 
                    </ul>
               </div>
            </div>
}
export default Nav;