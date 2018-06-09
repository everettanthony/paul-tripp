import { container } from "assets/jss/material-kit-react.jsx";

const aboutStyle = theme => ({
  section: {
    padding: "10px 0 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  leftCol: {
  	color: "#000",
  	padding: "20px 0"
  },
  rightCol: {
  	textAlign: "right",
    [theme.breakpoints.down("sm")]: {
		  textAlign: "center"
    }
  },
  aboutTitle: {
  	color: "#000",
  	fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
    	lineHeight: "1.1",
		  margin: "0 0 16px"
    }
  },
  imgPaul: {
    transform: "translate(25px, 0)",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
		  transform: "translate(0, 0)",
		  width: "252px"
    }
  },
  imgProduct: {
  	margin: "20px 0 30px",
  	width: "400px",
    [theme.breakpoints.down("sm")]: {
		  width: "285px"
    } 
  },
  buy: {
  	fontSize: "15px"
  },
  buyNow: {
  	color: "#000",
  	fontSize: "22px",
  	marginTop: "15px"
  },
  buyNowLabel: {
  	fontWeight: "600"
  },
  price: {
  	color: "#e74137",
  	fontWeight: "bold"
  },
  priceOld: {
  	fontWeight: "600",
  	textDecoration: "line-through"
  },
  aboutPaul: {
  	float: "right",
    margin: "10px 0 0",
  	textAlign: "left",
  	width: "350px",
    [theme.breakpoints.down("sm")]: {
		  margin: "6px 0 0",
		  width: "257px"
    }  	
  },
  aboutPaulTitle: {
  	fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
		  fontSize: "22px"
    } 
  },
  aboutVideo: {
    float: "right",
    margin: "10px 0 0",
    textAlign: "left",
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      margin: "6px 0 0",
      width: "257px"
    }   
  },
  aboutVideoTitle: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px"
    } 
  },
  video: {
    border: "none",
    width: "343px",
    height: "193px",
    [theme.breakpoints.down("sm")]: {
      width: "261px",
      height: "147px",
      marginBottom: "20px"
    } 
  }
});

export default aboutStyle;
