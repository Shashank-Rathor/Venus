import { Container,Col,Row,CardBody } from 'reactstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import FOCUS1 from '../../assets/images/Focus1.png';
import FOCUS2 from '../../assets/images/Focus2.png';
import classes from './Focus.module.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
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

const Focus = (props) => {
    return (
        <div style={{overflow: "hidden"}}>
            <Container>
                <Row xs="2">
                    <Col>
                    
                    <div className={classes.focusTitle} >
                        <p>FOCUS AREAS</p>
                        <h1>Our pledge to <br/>Fight superbugs!</h1>
                        <h3>
                        We are acting to surpass AMR by fueling stewardship against WHO's declared deadliest pathogens.
                        </h3>
                        <button className={classes.button2}>Read More</button>
                    </div >
                    </Col>
                    <Col>
                    <div className={classes.imageCar}>
        <Carousel
                arrows={false}
                swipeable={true}
                draggable={true}
                slide={true}
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
                itemClass="carousel-item-padding-20-px"
            >
                    <div>
                                <img
                                className={classes.image}
                                alt="Card image cap"
                                src={FOCUS1}
                                />
                        </div>  
                    <div>
                                <img
                                className={classes.image}
                                alt="Card image cap"
                                src={FOCUS2}
                                />       
                </div>
            </Carousel>
            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Focus
