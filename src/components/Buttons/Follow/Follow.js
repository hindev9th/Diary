import classNames from 'classnames';
import css from './Follow.scss';

const cx = classNames.bind(css)

function Follow(user) {
    return <span className={cx('btn-follow')}>Follow</span>
}

export default Follow;