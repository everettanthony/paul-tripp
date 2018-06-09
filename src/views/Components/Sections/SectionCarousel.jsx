import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import author1 from "assets/img/ann-voskamp.png";
import author2 from "assets/img/matt-chandler.png";
import author3 from "assets/img/elyse-fitzpatrick.png";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card carousel className={classes.quotesCard}>
                <Carousel {...settings}>
                  <div className={classes.newCard}>
                      <div className={classes.author}>
                        <img src={author1} className={classes.authorImg} />
                      </div>
                      <h4 className={classes.quote}>"Simply put, I read everything that Paul Tripp writes. I can't afford to miss one word."  <span className={classes.authorName}>-- Ann Voskamp</span></h4>
                  </div>
                  <div className={classes.newCard}>
                      <div className={classes.author}>
                        <img src={author2} className={classes.authorImg} />
                      </div>
                      <h4 className={classes.quote}>"When Paul Tripp teaches, preaches, or writes he does so through the lens of the gospel."  <span className={classes.authorName}>-- Matt Chandler</span></h4>
                  </div>
                  <div className={classes.newCard}>
                      <div className={classes.author}>
                        <img src={author3} className={classes.authorImg} />
                      </div>
                    <h4 className={classes.quote}>"What I've come to expect from Paul Tripp is consistently deep, transparent, biblical, wise, practical, gospel-driven counsel."  <span className={classes.authorName}>-- Elyse Fitzpatrick</span></h4>
                  </div>                 
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  } 
}

export default withStyles(carouselStyle)(SectionCarousel);
