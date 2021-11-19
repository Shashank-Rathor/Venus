import React from 'react';
import {collabData} from '../../assets/data/collabData';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from './Collab.module.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7.5,
      slidesToSlide: 1 // optional, default to 1.
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

const Collab = (props) => {
    return (
        <div className={classes.collab}>
        <h1>Our Collaborations</h1>
        <div style={{marginLeft: '180px'}}>
            <Carousel
                arrows={false}
                swipeable={true}
                draggable={true}
                slide={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out	"
                transitionDuration={3000}
                containerClass={classes.carouselContainer}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-5-px"
            >
                    <div className={classes.collabContainer}><img src={ collabData[0] }/></div>
                    <div className={classes.collabContainer}><img src={ collabData[1] }/></div>
                    <div className={classes.collabContainer}><img src={ collabData[2] }/></div>
                    <div className={classes.collabContainer}><img src={ collabData[3] }/></div>
                    <div className={classes.collabContainer}><img src={ collabData[4] }/></div>
                    <div className={classes.collabContainer}><img src={ collabData[5] }/></div>
                    <div className={classes.collabContainer}><img src={ collabData[6] }/></div>
                    <div className={classes.collabContainer}><img src={ collabData[7] }/></div>
            </Carousel>
            </div>
    </div>
    )
}

export default Collab;
