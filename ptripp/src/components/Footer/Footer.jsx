import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles } from "material-ui";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

import IconButton from "components/CustomButtons/IconButton.jsx";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
         <div className={classes.left}>
          &copy; {1900 + new Date().getYear()} Paul Tripp
        </div>     
        <div className={classes.right}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-twitter"
                title="Follow Paul on Twitter"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  href="https://twitter.com/paultripp"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink + " " + classes.socialIconsButton}
                >
                  <i className={classes.socialIcons + " fab fa-twitter"} />
                </IconButton>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-facebook"
                title="Follow Paul on Facebook"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  color="transparent"
                  href="https://www.facebook.com/pdtripp"
                  target="_blank"
                  className={classes.navLink + " " + classes.socialIconsButton}
                >
                  <i className={classes.socialIcons + " fab fa-facebook"} />
                </IconButton>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow Paul on Instagram"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  color="transparent"
                  href="https://www.instagram.com/pauldavidtripp"
                  target="_blank"
                  className={classes.navLink + " " + classes.socialIconsButton}
                >
                  <i className={classes.socialIcons + " fab fa-instagram"} />
                </IconButton>
              </Tooltip>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
