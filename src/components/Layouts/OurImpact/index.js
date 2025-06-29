import styles from './OurImpact.module.scss'
import classNames from 'classnames/bind';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const cx = classNames.bind(styles)


function OurImpact() {
    const { ref, inView } = useInView({
        triggerOnce: true, // chỉ chạy 1 lần
        threshold: 0.5,     // 50% phần tử nằm trong viewport
    });

    return ( 
        <div className={cx('wrapper')} id={cx('ourimpact')}>
            <div className={cx('top')}> 
                <h3 className={cx('title')}>
                    <span>From quiet efforts to real results:</span>
                    <span>The ripple effect of every donation</span>
                </h3>
                <p className={cx('description')}>
                    With every donation, we've been able to reach farther and do more. In just the past 12 months, we’ve provided resources to over 50 grassroots initiatives, supported 100+ volunteers working on the ground, and directly impacted communities facing real challenges—with real solutions. From mental health support to educational access, you turned ideas into measurable change.
                </p>
            </div>

            <div className={cx('bottom')}>
                <div className={cx('bottom-left')}>
                    <div className={cx('container')}>  
                        <div>
                            <p className={cx('sub-title')}>Projects supported through local programs</p>
                        </div>

                        <div className={cx('desciption-wrapper')} ref={ref}>
                            <CountUp className={cx('counting')} start={inView ? 0 : null} end={256} duration={2} separator="," />

                            <div className={cx('content')}>
                                <p>Over 25,000 people directly supported through community programs, crisis response, and ongoing care initiatives.</p>
                            </div>
                        </div>
                    </div>  

                    <img className={cx('background-content')} src='https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802fc54afb8dcd46830bebd_pinkish.avif'></img>
                </div>

                <div className={cx('bottom-right')}>
                    <div className={cx('bottom-right-left')}>
                        <div className={cx('image-container')}>
                            <img className={cx('image')} src='https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802ffe149a2a4778ecfa085_nurse.jpg'></img>
                        </div>
                        <div className={cx('container-small-orange')}>
                            <div className={cx('content-wrapper')}>
                                <div>
                                    <p className={cx('sub-title')}>Volunteer & Project Support</p>
                                </div>

                                <div className={cx('desciption-wrapper')} ref={ref}>
                                    <CountUp className={cx('counting')} start={inView ? 0 : null} end={120} suffix={'+'} duration={2} separator="," />
                                    
                                    <div className={cx('content')}>
                                        <p>120+ local volunteers mobilized across 60+ grassroots projects in the past year.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <img className={cx('background-content-small-orange')} src='https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802fc54afb8dcd46830bebd_pinkish.avif'></img>
                            
                        </div>
                    </div>

                    <div className={cx('bottom-right-right')}>

                        <div className={cx('container-small-blue')}>
                            <div className={cx('content-wrapper')}>
                                <div>
                                    <p className={cx('sub-title')}>Resource Distribution</p>
                                </div>

                                <div className={cx('desciption-wrapper')} ref={ref}>
                                    <CountUp className={cx('counting')} start={inView ? 0 : null} end={85} suffix={'%'} duration={2} separator="," />

                                    <div className={cx('content')}>
                                        <p>of every dollar goes directly to on-the-ground efforts, tools, and services making a difference where it’s needed most.</p>
                                    </div>
                                </div>
                            </div>

                            <img className={cx('background-content-small-blue')} src='https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802fc54afb8dcd46830bebd_pinkish.avif'></img>
                        </div>

                        <div className={cx('image-container')}>
                            <img className={cx('image')} src='https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/6802ffdf040da19bc8546b7a_speach.jpg'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurImpact;