import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { popularGames } from "../graphql/queries";
import { PopularGamesQuery } from "../API";
import { RouteComponentProps } from "@reach/router";
import { useQuery } from "../graphql/queryHelpers";
import { oc } from "ts-optchain";
import { notEmpty } from "../utils";
import { GameCard } from "./GameCard";
import Grid from "@material-ui/core/Grid";

const PopularGames: React.FC<RouteComponentProps> = () => {
  const { data, loading } = useQuery<PopularGamesQuery>(popularGames);

  return loading ? (
    <Typography>Loading...</Typography>
  ) : (
    <>
      <Typography variant="h5" style={{ marginBottom: 10 }}>
        Popular Games
      </Typography>
      <Grid container spacing={8}>
        {oc(data)
          .popularGames([])
          .filter(notEmpty)
          .map(game => (
            <Grid key={game.id} item sm={12} md={6}>
              <GameCard game={game} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default PopularGames;
