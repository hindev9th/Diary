import { useNavigate } from "react-router-dom";
import config from "../../../config";
import classNames from "classnames";
import css from './Logout.scss';

const cx = classNames.bind(css);

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            navigate(config.routes.login);
        }
    }

    return <span className={cx('btn-logout')} onClick={handleLogout}>Logout</span>
}

export default Logout;