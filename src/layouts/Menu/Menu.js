import { Link, useLocation } from 'react-router-dom';
import className from 'classnames';
import config from '../../config';
import css from './Menu.scss';
import images from '../../assets/images';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs'
import Search from '../Search/Search';
import { useState } from 'react';

const cx = className.bind(css);

function Menu() {
    const location = useLocation();
    const [state, setState] = useState({ isShowSearch: false, })


    const toggleSearch = () => {
        setState({ isShowSearch: !state.isShowSearch })
    }

    return (
        <div className={cx(`menu ${state.isShowSearch ? 'small' : ''}`)}>
            <div className={cx('items')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    Diary
                </Link>
                <Link to={config.routes.home} className={cx(`item ${location.pathname === config.routes.home ? 'active' : ''}`)}>
                    <div className={cx('item-icon')}>
                        <img src={location.pathname === config.routes.home ? images.icons.homeDark : images.icons.home} alt='' />
                    </div>
                    <div className={cx('item-name')}>Home</div>
                </Link>
                <div className={cx(`item ${state.isShowSearch ? 'active' : ''}`)} id='search-slide' onClick={toggleSearch}>
                    <div className={cx('item-icon')}><BsSearch /></div>
                    <div className={cx('item-name')}>Search</div>
                </div>
                <Link to={config.routes.messages} className={cx(`item ${location.pathname === config.routes.messages ? 'active' : ''}`)}>
                    <div className={cx('item-icon')}>
                        <img src={location.pathname === config.routes.messages ? images.icons.messageDark : images.icons.message} alt='' />
                    </div>
                    <div className={cx('item-name')}>Messages</div>
                </Link>
                <div className={cx('item')}>
                    <div className={cx('item-icon')}><FaRegSquarePlus /></div>
                    <div className={cx('item-name')}>Create</div>
                </div>
                <Link to={`/nana`} className={cx(`item ${location.pathname === `/nana` ? 'active' : ''}`)}>
                    <div className={cx('item-icon')}>
                        <img src={images.avt} className={cx('avatar')} alt='avatar' />
                    </div>
                    <div className={cx('item-name')}>Profile</div>
                </Link>
            </div>

            <Search isShow={state.isShowSearch ? 'active' : ''} />
        </div>
    );
}

export default Menu;