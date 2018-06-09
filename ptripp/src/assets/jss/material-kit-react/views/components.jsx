import { container } from "assets/jss/material-kit-react.jsx";

const componentsStyle = theme => ({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    marginTop: "51px",
    position: "relative",
    "@media (max-width: 576px)": {
      fontSize: "3.8rem",
      lineHeight: "1em",
      marginTop: "0px"
    }    
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "800px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
});

export default componentsStyle;
