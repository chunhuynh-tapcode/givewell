import classNames from "classnames/bind";
import styles from "./OurMission.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);

function OurMission() {
    return ( 
        <div className={cx('wrapper')} id={cx('ourmission')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Our Mission</h2>

                <p className={cx('content')}>Our mission is to empower creators and changemakers by providing a platform that connects their visions with generous supporters. We believe that every story deserves to be told and every dream deserves a chance to flourish.</p>

                <div className={cx('button')}>
                    <a href="#" className={cx('impact-button')}>Our Impact</a>
                    <div className={cx('donate-button-wrapper')}>
                        <a href="" className={cx('donate-button')}>
                            Donate
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMission;