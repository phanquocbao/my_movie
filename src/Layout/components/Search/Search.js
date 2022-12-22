import styles from '../Header/Header.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); 
function Search () {
    return (
        <div className={cx('search col-span-2 col-start-4 col-end-8')}>
            <form>
                <input className={cx('w-full block text-sm px-10 py-3 rounded-3xl border-2 border-solid border-darkblue outline-none bg-transparent caret-blue-300')} type="search" placeholder="Search with Tìm kiếm movie..." required/>
            </form>
        </div>
    )
          
         
}

export default Search;