import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { useQuery, mutation } from "../graphql/queryHelpers";
import {
  ListGameItemsQuery,
  CreateGameItemMutation,
  CreateGameItemMutationVariables,
  CreateReviewMutation,
  CreateReviewMutationVariables,
  GetGameItemQuery,
  GetGameItemQueryVariables
} from "../API";
import { listGameItems, getGameItem } from "../graphql/queries";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import { oc } from "ts-optchain";
import { notEmpty } from "../utils";
import { Formik, Form, Field, FieldProps } from "formik";
import { createGameItem, createReview } from "../graphql/mutations";

const Reviews: React.FC<RouteComponentProps<{ id: string }>> = ({ id }) => {
  // how do nested queries work?
  const { data, loading, refetch } = useQuery<
    GetGameItemQuery,
    GetGameItemQueryVariables
  >(getGameItem, { id: String(id) });

  if (!id) {
    return <Typography>Must provide ID</Typography>;
  }

  console.log("GAME DATA", data);

  return loading ? (
    <Typography>Loading...</Typography>
  ) : (
    <>
      <Grid container spacing={16}>
        <Grid item sm={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10
            }}
          >
            <Typography>Reviews for {oc(data).getGameItem.name()}</Typography>
            <Button onClick={refetch} variant="contained">
              Refresh
            </Button>
          </div>
          {oc(data)
            .getGameItem.reviews.items([])
            .map(review => (
              <Typography>{oc(review).content()}</Typography>
            ))}
        </Grid>
        <Grid item sm={6}>
          <Typography>Add Review</Typography>
          <Formik
            initialValues={{ content: "", rating: "" }}
            onSubmit={async (values, { resetForm }) => {
              console.log(values);
              await mutation<
                CreateReviewMutation,
                CreateReviewMutationVariables
              >(createReview, {
                input: {
                  reviewGameId: id,
                  content: values.content,
                  score: Number(values.rating)
                }
              });
              resetForm();
            }}
            render={() => (
              <Form style={{ display: "flex", alignItems: "center" }}>
                <Field
                  name="content"
                  render={({ field, form }: FieldProps) => (
                    <TextField
                      id="standard-name"
                      label="Content"
                      margin="normal"
                      multiline
                      {...field}
                    />
                  )}
                />
                <Field
                  name="rating"
                  render={({ field, form }: FieldProps) => (
                    <TextField
                      id="standard-name"
                      label="Name"
                      margin="normal"
                      type="number"
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

export default Reviews;
