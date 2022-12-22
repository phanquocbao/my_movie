import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); 

function Sidebar () {
    return <aside className={cx('wrapper col-start-10 col-end-13')}>
            <h2>Sidebar</h2>
    </aside>
}

export default Sidebar;