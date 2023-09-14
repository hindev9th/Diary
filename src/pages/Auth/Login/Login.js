import { Link, Navigate, useNavigate } from "react-router-dom";
import config from '../../../config';
import { useState } from 'react';
import css from './Login.scss';
import classNames from "classnames";
import { login } from "../../../services/auth/LoginService";

const cx = classNames.bind(css);

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    if (localStorage.getItem('user')) {
        return <Navigate to={config.routes.home} />;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await login({ email, password });
        if (result.status === 200) {
            localStorage.setItem('user', result.token);
            navigate(config.routes.home);
        }

    };
    return (
        <div className={cx('login-container')}>
            <form className={cx('form-login')} onSubmit={handleLogin}>
                <div className={cx('title')}>
                    <h1>Diary</h1>
                </div>

                <div className={cx('input input-box')}>
                    <input type='email' onChange={e => setEmail(e.target.value)} id='email' required placeholder="Email" />
                </div>
                <div className={cx('input input-box')}>
                    <input type='password' onChange={e => setPassword(e.target.value)} id='password' required placeholder="Password" />
                </div>
                <button>Login</button>
            </form>
            <span className={cx('message-sign-up')}>Don't have an account? <Link to={config.routes.register}>Sign up</Link></span>

        </div>
    );
}

export default Login;