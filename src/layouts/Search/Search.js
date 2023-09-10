import classNames from 'classnames';
import css from './Search.scss';

const cx = classNames.bind(css);

function Search(prop) {
    return (
        <div className={cx(`search-slide ${prop.isShow}`)}>
            <div className={cx('search-container')}>
                <h1 className={cx('title')}>Search</h1>
                <div className={cx('input-form')}>
                    <input type='search' className={cx('input-search')} placeholder='Search...' />
                </div>
                <div className={cx('search-result')}>
                    <h3 className={cx('title')}>
                        Results
                    </h3>
                    <div className={cx('results')}>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                        <div className={cx('item')}>ad</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;