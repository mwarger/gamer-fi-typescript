import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  }
}));

// DISCUSS: type generation
type GameType = {
  __typename: "Game";
  id: string;
  name: string | null;
  popularity: number | null;
  url: string | null;
  summary: string | null;
  cover: {
    __typename: "Image";
    id: string | null;
    url: string | null;
    width: number | null;
    height: number | null;
    cloudinary_id: string | null;
  } | null;
};

export const GameCard: React.FC<{ game: GameType }> = ({ game }) => {
  const classes = useStyles();
  return game && game.name ? (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h6">
            {game.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {game.summary}
          </Typography>
        </CardContent>
      </div>
      {game.cover && game.cover.url && (
        <CardMedia
          className={classes.cover}
          image={game.cover.url}
          title={game.name}
        />
      )}
    </Card>
  ) : null;
};
