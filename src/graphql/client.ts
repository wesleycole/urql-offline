import { createClient, dedupExchange, fetchExchange } from "urql";
import { makeOperation } from "@urql/core";
import { offlineExchange } from "@urql/exchange-graphcache";
import { authExchange } from "@urql/exchange-auth";
import { makeDefaultStorage } from "@urql/exchange-graphcache/default-storage";
import schema, { GetAllStores } from "../generated/graphql";

const storage = makeDefaultStorage({
  idbName: "graphcache-v3", // The name of the IndexedDB database
  maxAge: 7, // The maximum age of the persisted data in days
});

const cache = offlineExchange({
  schema,
  storage,
  updates: {
    Mutation: {
      createStore(result, _args, cache, _info) {
        cache.updateQuery<any>({ query: GetAllStores }, (data) => {
          data.allStores.data.push(result.createStore);
          return data;
        });
      },
    },
  },
  optimistic: {
    createStore: (variables: any) => {
      return {
        __typename: "Store",
        _id: variables?.data?.id,
        name: variables?.data?.name,
        address: {
          __typename: "Address",
          street: variables?.data?.address?.street,
          city: variables?.data?.address?.city,
          state: variables?.data?.address?.state,
          zipCode: variables?.data?.address?.zipCode,
        },
      };
    },
  },
});

export const client = createClient({
  url: "https://graphql.fauna.com/graphql",
  exchanges: [
    dedupExchange,
    cache,
    authExchange({
      addAuthToOperation: ({
        authState,
        operation,
      }: {
        authState: any;
        operation: any;
      }) => {
        // the token isn't in the auth state, return the operation without changes
        if (!authState || !authState.token) {
          return operation;
        }

        // fetchOptions can be a function (See Client API) but you can simplify this based on usage
        const fetchOptions =
          typeof operation.context.fetchOptions === "function"
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {};

        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: `Bearer ${authState.token}`,
            },
          },
        });
      },
      willAuthError: ({ authState }) => {
        if (!authState) return true;
        // e.g. check for expiration, existence of auth etc
        return false;
      },
      didAuthError: ({ error }) => {
        // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
        return error.graphQLErrors.some(
          (e) => e.extensions?.code === "FORBIDDEN"
        );
      },
      getAuth: async ({ authState, mutate }) => {
        // for initial launch, fetch the auth state from storage (local storage, async storage etc)
        if (!authState) {
          const token = process.env.REACT_APP_FAUNA_SECRET;
          if (token) {
            return { token };
          }
          return null;
        }

        return null;
      },
    }),
    fetchExchange,
  ],
});
