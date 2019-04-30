import * as React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Observable } from "zen-observable-ts";

export const mutation = async <
  ResultType extends {},
  VariablesType extends {} = {}
>(
  query: string,
  variables?: VariablesType
) => gqlOp<ResultType, VariablesType>(query, variables);

export const gqlOp = async <
  ResultType extends {},
  VariablesType extends {} = {}
>(
  query: string,
  variables?: VariablesType
) => {
  const { data } = (await API.graphql(graphqlOperation(query, variables))) as {
    data: ResultType;
  };
  return data;
};

type TODO = any;

// export const QueryResult = <ResultType extends {}>({
//   render,
//   loading,
//   error,
//   data
// }: {
//   loading: boolean;
//   error: TODO;
//   data: ResultType;
//   render: (data: ResultType) => React.ReactNode;
// }): React.ReactNode => {
//   return loading ? (
//     <Spinner />
//   ) : error ? (
//     <ErrorBox>{error}</ErrorBox>
//   ) : data ? (
//     render(data)
//   ) : null;
// };

type UseQueryType<ResultType> = {
  loading: boolean;
  error: TODO;
  data: ResultType;
  refetch: () => void;
};

// export const QueryHandler = ({
//   loading,
//   error,
//   children
// }: {
//   loading: boolean;
//   error: any;
//   children?: React.ReactNode;
// }) => {
//   if (loading) {
//     return <Spinner />;
//   }

//   if (error) {
//     return <ErrorBox>{error}</ErrorBox>;
//   }

//   return <>{children}</>;
// };

export const useQuery = <ResultType extends {}, VariablesType extends {} = {}>(
  query: string,
  variables?: VariablesType
): UseQueryType<ResultType> => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState({} as ResultType);

  const fetchQuery = async (query: string, variables?: VariablesType) => {
    try {
      const { data } = (await API.graphql(
        graphqlOperation(query, variables)
      )) as {
        data: ResultType;
      };
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchQuery(query, variables);
  };

  React.useEffect(() => {
    fetchQuery(query, variables);
  }, [query]);

  return {
    loading,
    data,
    error,
    refetch
  };
};

enum ActionType {
  "update",
  "create",
  "remove"
}

type Action<T> = { type: ActionType; payload: T };

export const useCrudSubscription = <ListItemType extends { id: string }>(
  listData: ListItemType[],
  updatedConfig?: { updateQuery: string; updatedObject: string },
  createdConfig?: { createQuery: string; createdObject: string },
  deletedConfig?: { deleteQuery: string; deletedObject: string }
) => {
  function reducer(
    state: ListItemType[],
    { type, payload }: Action<ListItemType>
  ) {
    switch (type) {
      case ActionType.update:
        return state.map(item => (item.id === payload.id ? payload : item));
      case ActionType.create:
        return [...state, payload];
      case ActionType.remove:
        return [...state.filter(item => item.id !== payload.id)];
      default:
        throw new Error();
    }
  }

  const [list, dispatch] = React.useReducer(reducer, listData);

  React.useEffect(() => {
    if (updatedConfig) {
      const { updateQuery, updatedObject } = updatedConfig;
      const subscription = API.graphql(graphqlOperation(updateQuery));
      if (subscription instanceof Observable) {
        const sub = subscription.subscribe({
          next: ({
            value: {
              data: { [updatedObject]: update }
            }
          }: {
            value: { data: { [updatedObject: string]: ListItemType } };
          }) => {
            try {
              console.log("subscription UPDATED", update.id);

              dispatch({ type: ActionType.update, payload: update });
            } catch (error) {
              console.error(
                `${
                  error.message
                } - Check the updatedObject property: the current value is ${updatedObject}`
              );
            }
          }
        });
        return () => {
          sub.unsubscribe();
        };
      }
    }
    return undefined;
  }, []);

  React.useEffect(() => {
    if (createdConfig) {
      const { createQuery, createdObject } = createdConfig;
      const subscription = API.graphql(graphqlOperation(createQuery));
      if (subscription instanceof Observable) {
        const sub = subscription.subscribe({
          next: ({
            value: {
              data: { [createdObject]: create }
            }
          }: {
            value: { data: { [createdObject: string]: ListItemType } };
          }) => {
            try {
              console.log("subscription create", create.id);
              dispatch({ type: ActionType.create, payload: create });
            } catch (error) {
              console.error(
                `${
                  error.message
                } - Check the createdObject property: the current value is ${createdObject}`
              );
            }
          }
        });
        return () => {
          sub.unsubscribe();
        };
      }
    }
    return undefined;
  }, []);

  React.useEffect(() => {
    if (deletedConfig) {
      const { deleteQuery, deletedObject } = deletedConfig;
      const subscription = API.graphql(graphqlOperation(deleteQuery));
      if (subscription instanceof Observable) {
        const sub = subscription.subscribe({
          next: ({
            value: {
              data: { [deletedObject]: deleted }
            }
          }: {
            value: { data: { [deletedObject: string]: ListItemType } };
          }) => {
            try {
              console.log("subscription deleted DELETING", deleted.id);
              dispatch({ type: ActionType.remove, payload: deleted });
            } catch (error) {
              console.error(
                `${
                  error.message
                } - Check the deletedObject property: the current value is ${deletedObject}`
              );
            }
          }
        });
        return () => {
          sub.unsubscribe();
        };
      }
    }
    return undefined;
  }, []);

  console.log("useCrudSubscription subscription", list);
  return [list];
};

export const useSubscription = ({ updateQuery, updatedObject }: any) => {
  function reducer(state: any, { type, payload }: Action<any>) {
    switch (type) {
      case ActionType.update:
        return { ...state, ...payload };
      default:
        throw new Error();
    }
  }

  const [stuff, dispatch] = React.useReducer(reducer, {});
  React.useEffect(() => {
    const subscription = API.graphql(graphqlOperation(updateQuery));
    if (subscription instanceof Observable) {
      const sub = subscription.subscribe({
        next: ({
          value: {
            data: { [updatedObject]: update }
          }
        }: {
          value: { data: any };
        }) => {
          try {
            console.log("subscription UPDATED", update);

            dispatch({ type: ActionType.update, payload: update });
          } catch (error) {
            console.error(
              `${
                error.message
              } - Check the updatedObject property: the current value is ${updatedObject}`
            );
          }
        }
      });
      return () => {
        sub.unsubscribe();
      };
    }
  }, []);

  return stuff;
};
