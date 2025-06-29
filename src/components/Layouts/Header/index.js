import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return ( 

          <header className={cx('header')}>
              <a className={cx('logo')} href="#">GiveWell</a>

              <div className={cx('nav-container')}>
                <nav className={cx('nav')}>
                  <ul className={cx('nav-list')}>
                      <li className={cx('nav-item')}><a href="#ourmission">Our mission</a></li>
                      <li className={cx('nav-item')}><a href="#empower">Empower</a></li>
                      <li className={cx('nav-item')}><a href="#ourteam">Our Team</a></li>
                      <li className={cx('nav-item')}><a href="#ourvision">Our Vision</a></li>
                      <li className={cx('nav-item')}><a href="#ourimpact">Our Impact</a></li>
                  </ul>
                </nav> 

                <div className={cx('donate-button')}>
                    <a href="#donate" className={cx('button')}>Donate</a>  
                </div> 
              </div>
               
          </header>

     );
}

export default Header;