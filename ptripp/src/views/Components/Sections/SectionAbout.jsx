import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import aboutStyle from "assets/jss/material-kit-react/views/componentsSections/aboutStyle.jsx";

import paulImg from "assets/img/paultripp.png";
import product from "assets/img/faith.png";

class SectionAbout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} className={classes.leftCol}>
              <h2 className={classes.aboutTitle}>Faith: What Are You Hoping For?</h2>

              <p>Join pastor and best-selling author Paul David Tripp on a powerful 9 session journey through Hebrews 11 to discover how to live a hope-filled life of faith in Jesus Christ.</p>

              <p>This video series also includes a study guide, filled with helpful application questions, to assist you, your small group, or your church bring faith to life.</p>

              <img src={product} className={classes.imgProduct} alt="DVD and Study Guide Bundle" />

              <p>Using Hebrews 11 as a guide, Paul Tripp will contend that there are no heroes of faith in the Bible. Noah, Abraham, Moses and the others enshrined were weak and messy Christians just like us, who often felt that the call of God was too big for them.</p>

              <p>You will also discover:</p>

              <ul><li>How God accomplishes big things through little people who have faith</li>
              <li>How a lifestyle of faith will radically change your life</li>
              <li>How to live by faith when life is hard and doesn't make sense</li>
              <li>How personal weakness and inability is a cornerstone to a lifestyle of faith</li></ul>

              <p>And other important lessons! Don’t miss out on the opportunity to deepen your faith with renowned Bible teacher Paul Tripp.</p>

              <div className={classes.buy}>
                <div className={classes.buyNow}><span className={classes.buyNowLabel}>Price: </span><span className={classes.price}>$59.99</span> (On sale from <span className={classes.priceOld}>$79.99</span>)</div>
              </div>

              <Button
                href="https://paul-tripp.myshopify.com/cart/39815533129:1"
                color="cartBig"
                target="_blank"
              >
                <i class="material-icons">shopping_cart</i> Add to Cart
              </Button>
            </GridItem>
             <GridItem xs={12} sm={12} md={6} className={classes.rightCol}>
              <img src={paulImg} className={classes.imgPaul} alt="Paul Tripp" />

              <div className={classes.aboutPaul}>
                <h4 className={classes.aboutPaulTitle}>About Paul Tripp</h4>
                <p>Dr. Paul David Tripp is a pastor and an award-winning and best-selling author. With more than 30 books and video series on Christian living, Paul’s driving passion is to connect the transforming power of Jesus Christ to everyday life. Paul and his wife Luella live in Philadelphia; they have four grown children.</p>
              </div>

               <div className={classes.aboutVideo}>
                <h4 className={classes.aboutVideoTitle}>Is Your Faith Working For You?</h4>
                <iframe src="https://player.vimeo.com/video/225462165" className={classes.video} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>              </div>             
            </GridItem>           
          </GridContainer>
        </div>
      </div>
    );
  } 
}

export default withStyles(aboutStyle)(SectionAbout);
