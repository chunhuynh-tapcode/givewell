import classNames from "classnames/bind";
import styles from "./OurMission.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


const cx = classNames.bind(styles);

function OurMission() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ chạy 1 lần
        threshold: 0.2,     // 20% xuất hiện mới kích hoạt
    });

    // Animation cho H1
    const line1Props = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 300
    });
    const line2Props = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 400
    });
    const line3Props = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 500
    });
    const line4Props = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 600
    });
    const line5Props = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 700
    });
    const line6Props = useSpring({
        opacity: inView ? 1 : 0,
        config: { tension: 120, friction: 20 },
        delay: 800
    });

    return ( 
        <div className={cx('wrapper')} id={cx('ourmission')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Our Mission</h2>

                <p className={cx('content')} ref={ref}>  
                    <animated.span style={line1Props}>Our mission is to empower creators and</animated.span>{' '}
                    <animated.span style={line2Props}>changemakers by providing a platform</animated.span>{' '}
                    <animated.span style={line3Props}>that connects their visions with generous</animated.span>{' '}
                    <animated.span style={line4Props}>supporters. We believe that every story</animated.span>{' '}
                    <animated.span style={line5Props}>deserves to be told and every dream</animated.span>{' '}
                    <animated.span style={line6Props}>deserves a chance to flourish.</animated.span>
                </p>
                
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