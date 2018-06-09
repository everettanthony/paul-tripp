const parallaxStyle = theme => ({
  parallax: {
    height: "90vh",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "0",
    padding: "0",
    position: "relative",
    border: "0",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundPositionX: "-33rem"
    }
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
});

export default parallaxStyle;
