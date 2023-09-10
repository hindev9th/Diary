import { Link } from 'react-router-dom';
import config from '../../config';
import css from './Account.scss';
import images from '../../assets/images';
import { BiSolidBadgeCheck } from 'react-icons/fa6'

const cx = className.bind(css)

function Account({ account }) {
    return (
        <Link to={config.routes.profile} className={cx('account-item')}>
            <div className={cx('item')}>
                <img src={images.avt} className={cx('avatar')} />
                <div className={cx('info')}>
                    <strong className={cx('username')}>username <span><BiSolidBadgeCheck /></span></strong>
                    <span className={cx('name')}>name</span>
                </div>
            </div>
        </Link>
    );
}

export default Account;