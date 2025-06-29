import classNames from "classnames/bind";
import styles from "./Overlay.module.scss";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Overlay() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ chạy 1 lần
        threshold: 0.2,     // 20% xuất hiện mới kích hoạt
    });

    // Animation cho H1
    const gProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 500
    });
    const iProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 700
    });
    const vProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 400
    });
    const eProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 700
    });
    const wProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 500
    });
    const lProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 700
    });


    return ( 
        <div className={cx('wrapper')}>
          <div className={cx('overlay')}>
              <div className={cx('overlay-background')}>
                  <img className={cx('background-image')} src="https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802f26cb1c279ff927f7887_visualelectric-1744594470866.avif" alt="Background Livewell" />
                  <div className={cx('dark-gradient')}></div>
              </div>
              <div className={cx('overlay-content')} ref={ref}>
                  <div className={cx('text-wrapper')}>
                    <animated.h1 className={cx('overlay-name')}>
                        <animated.span style={gProps}>G</animated.span>
                        <animated.span style={iProps}>i</animated.span>
                        <animated.span style={vProps}>v</animated.span>
                        <animated.span style={eProps}>e</animated.span>
                        <animated.span style={wProps}>w</animated.span>
                        <animated.span style={eProps}>e</animated.span>
                        <animated.span style={lProps}>l</animated.span>
                        <animated.span style={lProps}>l</animated.span>
                    </animated.h1>
                  </div>
                  <div className={cx('overlay-description')}>
                    <p>
                        Join us in transforming dreams into reality. Your support can make a significant impact on the causes that matter most.
                    </p>
                  </div>
              </div>
          </div>
        </div>
     );
}

export default Overlay;