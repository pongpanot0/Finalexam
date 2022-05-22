import React from 'react'
import './slider.css'
import { useInView } from 'react-intersection-observer';
const Slider = ({ imageSrc, title, subtitle, filpped,users }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
    });
    const renderContent = () => {
        // eslint-disable-next-line no-sequences
        if (!filpped) {
            return (
                <>
                    <img src={imageSrc} alt="travel" className='slider_image' />
                    <div className='slider_content'>
                        <h1 className='slider_title'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
            )
        }
        else {
            return (<>

                <div className='slider_content'>
                    <h1 className='slider_title'>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <img src={imageSrc} alt="travel" className='slider_image' />


            </>)
        }
        
    };
    
    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>{renderContent()}</div>
    )
}

export default Slider