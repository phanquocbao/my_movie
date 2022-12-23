import { MenuItems } from "./MenuItems";
import classNames from "classnames/bind";
import styles from './Nav.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Dropdown (submenu){
    return(<ul className={cx("dropdown text-sm absolute top-[50px] left-0 min-w-[160px]")}>
    {MenuItems.map((submenu, index) => (
         <li className={cx('')}
          key={submenu.title}>
         {" "}
         <Link
           title={submenu.title}
           className={cx(
             "text-white bg-darkblueb hover:text-cyan-400 block transition ease-in-out delay-80 py-4 px-4"
           )}
           to={`/${submenu.index}`}
         >
          
           {submenu.title}
         </Link>
       </li>
    ))}
  </ul>)
}

export default Dropdown;