import React from "react";
import {
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import classNames from "classnames";
import { Match, Link } from "@reach/router";
import { makeStyles } from "@material-ui/styles";

// TODO MAke this like LinkButton

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: "bold"
    }
  })
);

const NavItemLink = ({
  label,
  to,
  icon,
  exact,
  secondary
}: {
  label: string;
  to: string;
  exact?: boolean;
  icon?: React.ReactNode;
  secondary?: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <Match path={to}>
      {({ match }) => (
        <Link to={to} style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                className: classNames({
                  [classes.root]: !!match
                })
              }}
              secondary={secondary}
            />
          </ListItem>
        </Link>
      )}
    </Match>
  );
};

export default NavItemLink;
