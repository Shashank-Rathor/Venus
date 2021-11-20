import { Container,Col,Row,CardBody } from 'reactstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./Testimonial.module.css";
import TEST from "../../assets/images/test1.png";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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



const Testimonial = (props) => {
    return (
        <div style={{width: "90%"}}>
            <Carousel
                swipeable={true}
                minimumTouchDrag={5}
                arrows={false}
                className = {classes.testCar}
                responsive={responsive}
                draggable={true}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform fadeInOut 5s"
                transitionDuration={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-20-px"
            >
                    <div>
                    <Container>
                          <Row xs="2" noGutters >
                            <Col>
                                <img src={TEST} style={{width: "100%"}}/>
                            </Col>
                            <div style={{backgroundColor: "white", paddingLeft: "50px"}}>
                                <div className={classes.testText}>
                                <h6>Venus’s research pipeline consists of innovative solutions that promise to address some of the world's most challenging issues, including Antimicrobial Resistance, Cancer, and Pain.</h6>
                                </div>
                                <div className={classes.name}>
                                  <h4>Dr. Manu Chaudhary </h4>
                                  <p>Joint Managing Director,</p>
                                  <p>Venus Remedies Limited</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                    
                    <button className={classes.bar1}/>
                    </div>  
                    <div>
                    <Container>
                          <Row xs="2" noGutters >
                            <Col>
                                <img src={TEST} style={{width: "100%"}}/>
                            </Col>
                            <div style={{backgroundColor: "white", paddingLeft: "50px"}}>
                                <div className={classes.testText}>
                                <h6>Venus’s research pipeline consists of innovative solutions that promise to address some of the world's most challenging issues, including Antimicrobial Resistance, Cancer, and Pain.</h6>
                                </div>
                                <div className={classes.name}>
                                  <h4>Dr. Manu Chaudhary </h4>
                                  <p>Joint Managing Director,</p>
                                  <p>Venus Remedies Limited</p>
                                </div>
                            </div>
                            
                        </Row>
                    </Container>
                    <button className={classes.bar2}/>
                    </div>  

                    <div>
                    <Container>
                          <Row xs="2" noGutters >
                            <Col>
                                <img src={TEST} style={{width: "100%"}}/>
                            </Col>
                            <div style={{backgroundColor: "white", paddingLeft: "50px"}}>
                                <div className={classes.testText}>
                                <h6>Venus’s research pipeline consists of innovative solutions that promise to address some of the world's most challenging issues, including Antimicrobial Resistance, Cancer, and Pain.</h6>
                                </div>
                                <div className={classes.name}>
                                  <h4>Dr. Manu Chaudhary </h4>
                                  <p>Joint Managing Director,</p>
                                  <p>Venus Remedies Limited</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                    <button className={classes.bar3}/>
                    </div>  
            </Carousel>
        </div>
    )
}

export default Testimonial
