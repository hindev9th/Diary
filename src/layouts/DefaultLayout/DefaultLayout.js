import classNames from 'classnames';
import Menu from '../Menu';
import css from './DefaultLayout.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth } from '../../actions/authAction';

const cx = classNames.bind(css);

function DefaultLayout({ children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const authAction = await getAuth();
            dispatch(authAction);
        };
        fetchData();
    }, [dispatch])

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