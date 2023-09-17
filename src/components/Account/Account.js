import { Link } from 'react-router-dom';
import css from './Account.scss';
import images from '../../assets/images';
import classNames from 'classnames';

const cx = classNames.bind(css)

function Account(data) {
    const user = data.data || {};
    return (
        <div className={cx('account-item')}>
            <div className={cx('item')}>
                <Link to={`/${user.username}`} >
                    <img src={images.avt} className={cx('avatar')} alt='' />
                </Link>
                <div className={cx('info')}>
                    <Link to={`/${user.username}`} >
                        <strong className={cx('username')}>{user.username}<img src={user.email_verified_at ? images.icons.check : ''} alt='' /></strong>
                    </Link>
                    <span className={cx('name')}>{user.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Account;