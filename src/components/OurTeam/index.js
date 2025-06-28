import classNames from "classnames/bind";
import styles from "./OurTeam.module.scss";

const cx = classNames.bind(styles);


function OurTeam() {
    return ( 
        <div className={cx('wrapper')} id={cx('ourteam')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Our Team</h2>

                <p className={cx('content')}>
                    Thanks to
                    <span className={cx('img1')}></span>
                    our clients, friends, partners. Thank you to
                    <span className={cx('img2')}></span>
                    our team of volunteers
                    <span className={cx('img3')}></span>
                    who made this journey possible.
                </p>

                <a href="" className={cx('button')}>Get Involved</a>
            </div>
        </div>
    );
}

export default OurTeam;