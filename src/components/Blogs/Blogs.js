import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card,CardBody,CardTitle} from 'reactstrap';
import './Blogs.css';
import NEWS1 from '../../assets/images/news1.png';
import NEWS2 from '../../assets/images/news2.png';
import NEWS3 from '../../assets/images/news3.png';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  


const Blogs = (props) => {
    return (
        <div className="blogs" >
         <p> <span style={{color: "#EB3C34"}}>BLOG </span>ARTICLES</p>
        <div >
        <Carousel
                arrows={false}
                swipeable={true}
                draggable={true}
                slide={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-5-px"
            >
                <div>
                    <div>
                            <CardBody>
                                <img
                                alt="Card image cap"
                                src={NEWS1}
                                width="100%"
                                />
                                </CardBody>
                                <CardBody>
                                <CardTitle tag="h5" className="title">
                                Antimicrobial Resistance <br/>During COVID-19 Pandemic
                                 </CardTitle>
                                </CardBody>
                        </div>          
                </div>
                <div>
                    <div>
                            <CardBody>
                                <img
                                alt="Card image cap"
                                src={NEWS2}
                                width="100%"
                                />
                                </CardBody>
                                <CardBody>
                                <CardTitle tag="h5" className="title">
                                Social Media: A Tool for <br/>spreading awareness on <br/>Pharmacovigilance
                                 </CardTitle>
                                </CardBody>
                        </div>          
                </div>
                <div>
                    <div>
                            <CardBody>
                                <img
                                alt="Card image cap"
                                src={NEWS3}
                                width="100%"
                                />
                                </CardBody>
                                <CardBody>
                                <CardTitle tag="h5" className="title">
                                Venus RESETS Itself with <br/>The Consumer Healthcare Division
                                 </CardTitle>
                                </CardBody>
                        </div>          
                </div>
            </Carousel>
            </div>
    </div>
    )
}

export default Blogs;
