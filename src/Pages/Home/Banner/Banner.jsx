import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
             <Carousel>
                <div>
                    <img src='https://i.ibb.co/P9N4CMJ/whatisemployeemanagement.jpg' />
                </div>
                <div>
                    <img src="https://i.ibb.co/jHsXjPB/what-is-employee-management-2350-1625578567840.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/zP3GLXf/Image-3-1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/NVMNK0r/Employee-Management-Meaning-Importance-Tips-Tools-More.png" />
                </div>
            </Carousel>
    );
};

export default Banner;