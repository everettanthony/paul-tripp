import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionAbout from "./Sections/SectionAbout.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import logo from "assets/img/logo-small.png";
import logoBlack from "assets/img/logo-small-black.png";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand={logo}
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 50,
            color: "altWhite"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/cross.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>What is faith?</h1>
                  <h3 className={classes.subtitle}>
                    We all know that the Bible defines faith as "the assurance of things hoped for and the conviction of things not seen" - but do we know how to live by faith in the street-level situations and relationships of our daily Christianity?
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
           <SectionAbout />
          <SectionCarousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
