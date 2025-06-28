import styles from './Empower.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Empower() {
    return ( 
        <div className={cx('wrapper')} id={cx('empower')}>
            <div className={cx('section')}>
                <div className={cx('container')}>
                    <h2 className={cx('title')}>Empower</h2>
                    <div className={cx('content')}>
                        <ul className={cx('list')}>
                            <div className={cx('item-group')}>
                                <li className={cx('item')}><a>01 Mission & engagement</a></li>
                            </div>

                            <div className={cx('item-group')}>
                                <li className={cx('item')}><a>02 Spread Global Awareness</a></li>
                            </div>

                            <div className={cx('item-group')}>
                                <li className={cx('item')}><a>03 Organize grant funding</a></li>
                            </div>

                            <div className={cx('item-group')}>
                                <li className={cx('item')}><a>04 Ignite sustainable Impact</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Empower;