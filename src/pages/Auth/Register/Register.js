import { Link, Navigate, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import css from './Register.scss';
import config from '../../../config';
import { useState } from 'react';
import { RegisterService } from '../../../services/auth/RegisterService';

const cx = classNames.bind(css);

function Register() {
    document.title = 'Sign up - Diary'
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();

    const navigate = useNavigate();


    const register = async (e) => {
        e.preventDefault();
        const data = { email, name, username, password, password_confirmation: passwordConfirmation };
        const res = await RegisterService(data);
        console.log(res);
        if (res.status === 200) {
            localStorage.setItem('user', res.token);
            navigate(config.routes.home);
        }

    }

    if (localStorage.getItem('user')) {
        return <Navigate to={config.routes.home} />;
    }
    return (
        <div className={cx('login-container')}>
            <form className={cx('form-login')} onSubmit={register}>
                <div className={cx('title')}>
                    <h1>Diary</h1>
                    <h4 className={cx('description')}>Sign up to see photos from your friends.</h4>
                </div>

                <div className={cx('input input-box')}>
                    <input type='email' onChange={e => setEmail(e.target.value)} required placeholder="Email" />
                </div>

                <div className={cx('input input-box')}>
                    <input type='text' onChange={e => setName(e.target.value)} required placeholder="Name" />
                </div>

                <div className={cx('input input-box')}>
                    <input type='text' onChange={e => setUsername(e.target.value)} required placeholder="Username" />
                </div>

                <div className={cx('input input-box')}>
                    <input type='password' onChange={e => setPassword(e.target.value)} required placeholder="Password" />
                </div>

                <div className={cx('input input-box')}>
                    <input type='password' onChange={e => setPasswordConfirmation(e.target.value)} required placeholder="Confirm password" />
                </div>

                <button>Sign up</button>
            </form>
            <span className={cx('message-sign-up')}>Have an account?  <Link to={config.routes.login}>Log in</Link></span>

        </div>
    )
}

export default Register;