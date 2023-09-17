import classNames from 'classnames';
import Account from '../../components/Account';
import css from './Home.scss';
import Logout from '../../components/Buttons/Logout';
import Suggested from '../../components/Suggested';
import { useSelector } from 'react-redux';

const cx = classNames.bind(css);

function Home() {
    const auth = useSelector(state => state.authState);
    return (
        <div className={cx('home-container')}>
            <div className={cx('posts')}>
                <h1>Post</h1>
            </div>
            <div className={cx('feed-right')}>
                <div className={cx('user-auth user')}>
                    <Account data={auth} />
                    <Logout />
                </div>
                <Suggested />
            </div>
        </div>
    )
}

export default Home;