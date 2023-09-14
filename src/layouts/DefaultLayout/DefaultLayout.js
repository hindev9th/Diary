import classNames from 'classnames';
import Menu from '../Menu';
import css from './DefaultLayout.scss';
import { useEffect } from 'react';

const cx = classNames.bind(css);

function DefaultLayout({ children }) {
    useEffect(() => {
        console.log("ok");
    }, [])

    return (
        <div className={cx("wrapper")}>
            <Menu />
            <div className={cx("container")}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;