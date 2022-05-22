import React from 'react'
import './users.css'
import { useInView } from 'react-intersection-observer';
const User = ({ imageSrc2, title, subtitle, filpped,users }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
    });
    const renderContent = () => {
        // eslint-disable-next-line no-sequences
        if (!filpped) {
            return (
                <>
                    <img src={imageSrc2} alt="travel" className='slider_image' />
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
                <img src={imageSrc2} alt="travel" className='slider_image' />


            </>)
        }
        
    };
    
    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>{renderContent()}</div>
    )
}

export default User