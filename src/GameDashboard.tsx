import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { API, graphqlOperation } from "aws-amplify";
import { popularGames } from "./graphql/queries";
import { PopularGamesQuery } from "./API";

export const GameDashboard: React.FC = () => {
  const [gameData, setGameData] = React.useState<PopularGamesQuery | undefined>(
    undefined
  );
  React.useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = (await API.graphql(
          graphqlOperation(popularGames)
        )) as { data: PopularGamesQuery };

        setGameData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <Typography variant="h3">My Games</Typography>
    </>
  );
};
