import React from 'react'
import {NavbarComp} from '../components/Navbar/NavbarComp';
import classes from './Home.module.css';
import HEADIMG from '../assets/images/Rectangle.png';
import image1 from '../assets/images/img1.png';
import image2 from '../assets/images/img2.png';
import image3 from '../assets/images/img3.png';
import Cards from '../components/Cards/Cards';
import img from '../assets/images/virus.jpeg';
import img2 from '../assets/images/Rectangle.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from '../components/Footer/Footer';
import MAP from '../assets/images/map.png';
import GRAPH from '../assets/images/graph.png';
import IMG24 from '../assets/images/image 24.png';
import IMG23 from '../assets/images/image 23.png';
import IMG22 from '../assets/images/image 22.png';
import Collab from '../components/Collab/Collab';
import Blogs from '../components/Blogs/Blogs';
import Focus from '../components/Focus/Focus';
import Testimonial  from '../components/Testimonial/Testimonial';
import ICON from '../assets/images/testIcon.png';
import ELLIPSE from '../assets/images/Ellipse.png';
import ELLIPSE2 from '../assets/images/Ellipse2.png';
import { Container,Col,Row,CardBody,UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap';
import { Timeline } from 'react-twitter-widgets'
import { Facebook, Instagram, KeyboardArrowRight, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from "@material-ui/icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const Home = (props) => {
    return (
        <>
            <NavbarComp/>


            <div className={classes.wrapper}>
                <div className={classes.head}>
                <p className={classes.text1} style={{color: '#EB3C34'}}>Anti Microbial
                    Resistance</p>
                    <p className={classes.text1} >
                    in the era of<br/>
                    COVID-19</p>
                <button id="PopoverFocus" className={classes.button1}>Know More</button>
                <UncontrolledPopover
                    placement="bottom"
                    target="PopoverFocus"
                    trigger="focus"
                >
                    <PopoverHeader>
                    Focus Trigger
                    </PopoverHeader>
                    <PopoverBody>
                    Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try.
                    </PopoverBody>
                </UncontrolledPopover>

                </div>
                <div className={classes.headimg}>
                    <img src={HEADIMG} width="90%"/>
                </div>
            </div>


            <div style={{ position: "relative"}}>
                <img className={classes.ellipse3} src={ELLIPSE}/>
                <p className={classes.text2}>TRENDING TOPICS</p>
                <div style={{marginLeft: '100px'}}>
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
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-5-px"
                    >
                    <div><Cards src={ img } text={`Cauvery Calling Initiative`}/></div>
                    <div><Cards src={ img2 } text={`Venus RESETS Itself with CHD`}/></div>
                    <div><Cards src={ img } text={`Prevent Antimicrobial Resistance`}/></div>
                    <div><Cards src={ img } text={`World AMR Congress 2017`}/></div>
                    <div><Cards src={ img } text={`World  Congress 2017`}/></div>
                    <div><Cards src={ img } text={`World AMR  2017`}/></div>
                    </Carousel>
                    </div>
            </div>


            <div className={classes.banner}>
                <div className={classes.bannertxt}>
                <h1 className={classes.title2}>Who We Are</h1>
                <p className={classes.text3}>We are a global biopharmaceutical company with the belief that everyone, everywhere deserves access to affordable quality medicines.</p>
                <button className={classes.button2}>About Us</button>
                </div>
            </div>

            <div style={{position: "relative"}}>
            <Container className={classes.serviceContainer}>
                <Row xs="3">
                    <Col>
                    <div className={classes.serviceimageDiv}>
                    <img src={image1} className={classes.serviceImage}/>
                    </div>
                     <h3>Research</h3>
                    </Col>
                    <Col>
                    <div className={classes.serviceimageDiv}>
                    <img src={image2} className={classes.serviceImage}/>
                    </div> 
                    <h3>Products</h3>
                    </Col>
                    <Col>
                    <div className={classes.serviceimageDiv}>
                    <img src={image3} className={classes.serviceImage}/>
                    </div>
                    </Col>
                </Row>
            </Container>
            
            <img className={classes.ellipse2} src={ELLIPSE2}/>
            </div>

            <div className={classes.banner2}>
                <p>WE ARE SPREAD ACROSS</p>
                <h1>70+ COUNTRIES</h1>
                <img src={MAP} width="1270px" height="600px" style={{marginLeft: "100px", marginTop: "40px"}}/>
                <button className={classes.button2}>Explore Now</button>
            </div>

            <div style={{marginBottom: "150px"}}>
            <Container>
                <Row xs="2">
                    <Col>
                        <div className={classes.graphCard}>
                            <CardBody>
                            <div  className={classes.graphHead}>
                            <button>NSE</button>
                            <button>BSE</button>
                            </div>
                            <div className={classes.cardTitle} >
                            <h5>
                            Venus Remedies Limited
                            </h5>
                            <p>(VENUSREM)</p>
                            </div>
                            
                            <h1>Rs 495.00</h1>
                            <img
                                alt="Card image cap"
                                src={GRAPH}
                                top
                                width="85%"
                                style={{marginLeft: "50px"}}
                                />
                            <div style={{display: "flex", justifyContent: "space-between", paddingLeft: "20px", paddingRight: "20px"}}>
                            <button className={classes.graphButton}>
                                1D
                            </button>
                            <button className={classes.graphButton}>
                                1W
                            </button>
                            <button className={classes.graphButton}>
                                1Y
                            </button>
                            <button className={classes.graphButton}>
                                All
                            </button>
                            </div>
                            </CardBody>
                         </div>
                    </Col>
                    <Col>
                        <div className={classes.graphContent} style={{display: "flex"}}>
                            <p style={{color: "#EB3C34", marginRight: "15px", letterSpacing: "0.61rem", fontSize: "24px"}}>LATEST</p> <p style={{marginRight: "15px", letterSpacing: "0.61rem", fontSize: "24px"}}>NEWS</p>
                        </div>
                        <div className={classes.graphContent}>
                            <img src={IMG24}/>
                            <h5>
                            Here’s how Venus Remedies is striking  ahead with cutting edge technology
                            </h5>
                            <p>At the forefront of technology, Venus Remedies
                                has a comprehensive software system for...</p>
                            </div>
                            <hr style={{color: '#EB3C34', height: "2px"}}/>

                            <div className={classes.graphContent}>
                            <img src={IMG23}/>
                            <h5>
                            Here’s how Venus Remedies is striking ahead with cutting edge technology
                            </h5>
                            <p>At the forefront of technology, Venus Remedies
                                has a comprehensive software system for...</p>
                            </div>
                            <hr style={{color: '#EB3C34', height: "2px"}}/>
                            <div className={classes.graphContent}>
                            <img src={IMG22}/>
                            <h5>
                            Here’s how Venus Remedies is striking ahead with cutting edge technology
                            </h5>
                            <p>At the forefront of technology, Venus Remedies
                                has a comprehensive software system for...</p>
                            </div>
                    </Col>
                </Row>
            </Container>
            </div>

           <Collab/>

           <Focus/>

           <div className={classes.newsFeed}>
           <Container>
                <Row xs="2">
                    <Col className={classes.newsFeed1}>
                        <p>NEWS FEED</p>
                        <h1>Be in touch with <br/>latest updates at Venus Remedies<br/>Limited</h1>
                        <div className={classes.socialContainer}>
                            <div className={classes.socialIcon}>
                                <Facebook/>
                            </div>
                            <div className={classes.socialIcon}>
                                <Instagram/>
                            </div>
                            <div className={classes.socialIcon}>
                                <Twitter/>
                            </div>
                            <div className={classes.socialIcon}>
                                <YouTube/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.twittFeed}>
                            <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'TwitterDev'
                            }}
                            options={{
                                chrome: "noheader",
                                height: '550',
                                width: '450'
                            }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
           </div>
            
            <div className={classes.testimonial}>
                <img className={classes.testIcon} src={ICON}/>
                <img className={classes.ellipse} src={ELLIPSE}/>
              <Testimonial/>
              <hr className={classes.bar1}/>
            </div>
          
           <Blogs/>
            <Footer/>
        </>
    )
}

export default Home;
