import classNames from "classnames/bind";
import styles from "./Overlay.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <div className={cx('wrapper')}>
          <div className={cx('overlay')}>
              <div className={cx('overlay-background')}>
                  <img className={cx('background-image')} src="https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802f26cb1c279ff927f7887_visualelectric-1744594470866.avif" alt="Background Livewell" />
                  <div className={cx('dark-gradient')}></div>
              </div>
              <div className={cx('overlay-content')}>
                  <div className={cx('text-wrapper')}>
                      <h1 className={cx('overlay-name')} >GiveWell</h1>
                  </div>
                  <div className={cx('overlay-description')}>
                      <p>Join us in transforming dreams into reality. Your support can make a significant impact on the causes that matter most.</p>
                  </div>
              </div>
          </div>
        </div>
     );
}

export default Header;