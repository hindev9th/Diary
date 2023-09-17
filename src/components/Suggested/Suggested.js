import classNames from 'classnames';
import css from './Suggested.scss';
import Account from '../Account';
import Follow from '../Buttons/Follow';
import { useEffect, useState, memo } from 'react';
import { SuggestedService } from '../../services/user/SuggestedService';

const cx = classNames.bind(css);

function Suggested({ mode }) {
    const [suggested, setSuggested] = useState({});
    const [users, setSusers] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            let data = await SuggestedService();
            setSuggested(data);
        }
        fetch();

    }, [])

    useEffect(() => {
        setSusers(suggested.data || []);
    }, [suggested]);

    return (
        <div className={cx(`suggested ${mode || ''}`)}>
            <div className={cx('title')}>
                <span className={cx('text')}>Suggested</span>
                <span>Show all</span>
            </div>
            <div className={cx('users')}>
                {users.map((user, index) => {
                    return (
                        <div className={cx('user')} key={index}>
                            <Account data={user} />
                            <Follow />
                        </div>
                    )

                })}

            </div>
        </div>
    )
}

export default memo(Suggested);