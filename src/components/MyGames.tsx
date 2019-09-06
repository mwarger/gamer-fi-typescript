import * as React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import {
  useQuery,
  mutation,
  useCrudSubscription,
  useSubscription
} from "../graphql/queryHelpers";
import { oc } from "ts-optchain";
import { listGameItems } from "../graphql/queries";
import {
  ListGameItemsQuery,
  CreateGameItemMutation,
  CreateGameItemMutationVariables,
  UpdateGameItemMutation,
  UpdateGameItemMutationVariables
} from "../API";
import { Button, TextField, Grid, IconButton } from "@material-ui/core";
import { createGameItem, updateGameItem } from "../graphql/mutations";
import { Formik, Form, Field, FieldProps } from "formik";
import { notEmpty } from "../utils";
import { onUpdateGameItem } from "../graphql/subscriptions";
import ThumbsUpIcon from "@material-ui/icons/ThumbUpSharp";

const MyGames: React.FC<RouteComponentProps<{}>> = ({}) => {
  // DISCUSS: queries
  const { data, loading, refetch } = useQuery<ListGameItemsQuery>(
    listGameItems
  );

  return loading ? (
    <Typography>Loading...</Typography>
  ) : (
    <>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10
            }}
          >
            <Typography>My Games</Typography>
            <Button onClick={refetch} variant="contained">
              Refresh
            </Button>
          </div>
          {oc(data)
            .listGameItems.items([])
            .filter(notEmpty)
            .map(game => (
              <div
                key={game.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography key={game.id}>
                  {game.name} -{" "}
                  <Link
                    to={`/reviews/${game.id}`}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Reviews
                  </Link>
                </Typography>
                {/* <Typography>Rating: {game.rating || "No Rating"}</Typography> */}
                <LikeHandler id={game.id} currentLikes={Number(game.likes)} />
              </div>
            ))}
        </Grid>
        <Grid item sm={6}>
          <Typography>Add Game</Typography>
          <Formik
            initialValues={{ name: "" }}
            onSubmit={async values => {
              console.log(values);
              // DISCUSS: mutations
              await mutation<
                CreateGameItemMutation,
                CreateGameItemMutationVariables
              >(createGameItem, {
                input: values
              });
            }}
            render={() => (
              <Form style={{ display: "flex", alignItems: "center" }}>
                <Field
                  name="name"
                  render={({ field, form }: FieldProps) => (
                    <TextField
                      id="standard-name"
                      label="Name"
                      margin="normal"
                      {...field}
                    />
                  )}
                />
                <Button type="submit" variant="contained">
                  Add Game
                </Button>
              </Form>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

const LikeHandler: React.FC<{ id: string; currentLikes: number }> = ({
  id,
  currentLikes
}) => {
  // DISCUSS: subscriptions for realtime data
  const stuff = useSubscription({
    updateQuery: onUpdateGameItem,
    updatedObject: "onUpdateGameItem",
    args: { id }
  });

  console.log("stuff", stuff);
  let likes = currentLikes;

  if (stuff && stuff.id === id) {
    likes = stuff.likes;
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={async () => {
          await mutation<
            UpdateGameItemMutation,
            UpdateGameItemMutationVariables
          >(updateGameItem, {
            input: { id, likes: likes + 1 }
          });
        }}
      >
        <ThumbsUpIcon />
      </IconButton>

      <Typography>{likes}</Typography>
    </div>
  );
};

export default MyGames;
