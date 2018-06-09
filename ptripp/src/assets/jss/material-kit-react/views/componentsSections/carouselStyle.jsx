import { container } from "assets/jss/material-kit-react.jsx";

const carouselStyle = theme => ({
  section: {
    padding: "70px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    }
  },
  container: {
    [theme.breakpoints.down("sm")]: {  
      marginLeft: "0",
      marginRight: "0"
    }
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  quotesCard: { 
    margin: "0 auto",
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      margin: "6px auto 25px"
    }
  },
  quote: {
    maxWidth: "375px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      maxWidth: "150px"
    }  
  },
  authorImg: {
    margin: "0 20px 0 0",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      width: "150px"
    } 
  },
  authorName: {
    display: "block",
    fontWeight: "600",
    textAlign: "right"
  },
  newCard: {
  	padding: "40px",
    display: "flex !important",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    } 
  },
  newCaption: {
    paddingBottom: "45px",
    position: "absolute",
    right: "15%",
    bottom: "20px",
    left: "15%",
    zIndex: "10",
    paddingTop: "20px",
    color: "#000000",
    textAlign: "center"
  }
});

export default carouselStyle;
