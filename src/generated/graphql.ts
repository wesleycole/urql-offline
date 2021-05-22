/* eslint-disable */
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};







export type Address = {
  __typename?: 'Address';
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

/** 'Address' input values */
export type AddressInput = {
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  network: Scalars['String'];
  number: Scalars['String'];
};

/** 'CreditCard' input values */
export type CreditCardInput = {
  network: Scalars['String'];
  number: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  /** The document's ID. */
  _id: Scalars['ID'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  creditCard: CreditCard;
  address: Address;
  telephone: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** 'Customer' input values */
export type CustomerInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  address: AddressInput;
  telephone: Scalars['String'];
  creditCard: CreditCardInput;
};

/** The pagination object for elements of type 'Customer'. */
export type CustomerPage = {
  __typename?: 'CustomerPage';
  /** The elements of type 'Customer' in this page. */
  data: Array<Maybe<Customer>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Order' */
  createOrder: Order;
  /** Delete an existing document in the collection of 'Order' */
  deleteOrder?: Maybe<Order>;
  /** Update an existing document in the collection of 'Order' */
  updateOrder?: Maybe<Order>;
  /** Update an existing document in the collection of 'Customer' */
  updateCustomer?: Maybe<Customer>;
  /** Delete an existing document in the collection of 'Store' */
  deleteStore?: Maybe<Store>;
  submitOrder: Order;
  /** Create a new document in the collection of 'Store' */
  createStore: Store;
  /** Delete an existing document in the collection of 'Customer' */
  deleteCustomer?: Maybe<Customer>;
  /** Update an existing document in the collection of 'Store' */
  updateStore?: Maybe<Store>;
  /** Create a new document in the collection of 'Product' */
  createProduct: Product;
  /** Update an existing document in the collection of 'Product' */
  updateProduct?: Maybe<Product>;
  /** Create a new document in the collection of 'Customer' */
  createCustomer: Customer;
  /** Delete an existing document in the collection of 'Product' */
  deleteProduct?: Maybe<Product>;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  data: OrderInput;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['ID'];
  data: CustomerInput;
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationSubmitOrderArgs = {
  customerId: Scalars['ID'];
  products?: Maybe<Array<Maybe<SubmitOrderProductInput>>>;
};


export type MutationCreateStoreArgs = {
  data: StoreInput;
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateStoreArgs = {
  id: Scalars['ID'];
  data: StoreInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data: ProductInput;
};


export type MutationCreateCustomerArgs = {
  data: CustomerInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};

export type Order = {
  __typename?: 'Order';
  shipDate?: Maybe<Scalars['Time']>;
  cart: Array<ProductCart>;
  /** The document's ID. */
  _id: Scalars['ID'];
  shipAddress: Address;
  creditCard: CreditCard;
  status: Scalars['String'];
  customer: Customer;
  creationDate: Scalars['Time'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** Allow manipulating the relationship between the types 'Order' and 'Customer' using the field 'Order.customer'. */
export type OrderCustomerRelation = {
  /** Create a document of type 'Customer' and associate it with the current document. */
  create?: Maybe<CustomerInput>;
  /** Connect a document of type 'Customer' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Order' input values */
export type OrderInput = {
  customer?: Maybe<OrderCustomerRelation>;
  cart: Array<ProductCartInput>;
  status: Scalars['String'];
  creationDate: Scalars['Time'];
  shipDate?: Maybe<Scalars['Time']>;
  shipAddress: AddressInput;
  creditCard: CreditCardInput;
};

/** The pagination object for elements of type 'Order'. */
export type OrderPage = {
  __typename?: 'OrderPage';
  /** The elements of type 'Order' in this page. */
  data: Array<Maybe<Order>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  name: Scalars['String'];
  quantity: Scalars['Int'];
  backorderLimit: Scalars['Int'];
  description: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  price: Scalars['Float'];
  store: Store;
  backordered: Scalars['Boolean'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type ProductCart = {
  __typename?: 'ProductCart';
  product: Product;
  quantity: Scalars['Int'];
  price: Scalars['Float'];
};

/** 'ProductCart' input values */
export type ProductCartInput = {
  product: Scalars['ID'];
  quantity: Scalars['Int'];
  price: Scalars['Float'];
};

/** Allow manipulating the relationship between the types 'ProductCart' and 'Product' using the field 'ProductCart.product'. */
export type ProductCartProductRelation = {
  /** Create a document of type 'Product' and associate it with the current document. */
  create?: Maybe<ProductInput>;
  /** Connect a document of type 'Product' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Product' input values */
export type ProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  store?: Maybe<ProductStoreRelation>;
  quantity: Scalars['Int'];
  backorderLimit: Scalars['Int'];
  backordered: Scalars['Boolean'];
};

/** The pagination object for elements of type 'Product'. */
export type ProductPage = {
  __typename?: 'ProductPage';
  /** The elements of type 'Product' in this page. */
  data: Array<Maybe<Product>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'Product' and 'Store' using the field 'Product.store'. */
export type ProductStoreRelation = {
  /** Create a document of type 'Store' and associate it with the current document. */
  create?: Maybe<StoreInput>;
  /** Connect a document of type 'Store' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Product' by its id. */
  findProductByID?: Maybe<Product>;
  /** Find a document from the collection of 'Order' by its id. */
  findOrderByID?: Maybe<Order>;
  allCustomers: CustomerPage;
  allProducts: ProductPage;
  allStores: StorePage;
  allOrders: OrderPage;
  /** Find a document from the collection of 'Store' by its id. */
  findStoreByID?: Maybe<Store>;
  /** Find a document from the collection of 'Customer' by its id. */
  findCustomerByID?: Maybe<Customer>;
};


export type QueryFindProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindOrderByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllCustomersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryAllProductsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryAllStoresArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryAllOrdersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindStoreByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindCustomerByIdArgs = {
  id: Scalars['ID'];
};

export type Store = {
  __typename?: 'Store';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
  address?: Maybe<Address>;
};

/** 'Store' input values */
export type StoreInput = {
  name: Scalars['String'];
  address?: Maybe<AddressInput>;
};

/** The pagination object for elements of type 'Store'. */
export type StorePage = {
  __typename?: 'StorePage';
  /** The elements of type 'Store' in this page. */
  data: Array<Maybe<Store>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type SubmitOrderProductInput = {
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type CreateStoreMutationVariables = Exact<{
  name: Scalars['String'];
  street: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zipCode: Scalars['String'];
}>;


export type CreateStoreMutation = (
  { __typename?: 'Mutation' }
  & { createStore: (
    { __typename?: 'Store' }
    & Pick<Store, '_id' | 'name'>
    & { address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'street' | 'city' | 'state' | 'zipCode'>
    )> }
  ) }
);

export type GetAllStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStoresQuery = (
  { __typename?: 'Query' }
  & { allStores: (
    { __typename?: 'StorePage' }
    & { data: Array<Maybe<(
      { __typename?: 'Store' }
      & Pick<Store, 'name'>
    )>> }
  ) }
);


export const CreateStore = gql`
    mutation CreateStore($name: String!, $street: String!, $city: String!, $state: String!, $zipCode: String!) {
  createStore(
    data: {name: $name, address: {street: $street, city: $city, state: $state, zipCode: $zipCode}}
  ) {
    _id
    name
    address {
      street
      city
      state
      zipCode
    }
  }
}
    `;
export const GetAllStores = gql`
    query GetAllStores {
  allStores {
    data {
      name
    }
  }
}
    `;

export const CreateStoreDocument = gql`
    mutation CreateStore($name: String!, $street: String!, $city: String!, $state: String!, $zipCode: String!) {
  createStore(
    data: {name: $name, address: {street: $street, city: $city, state: $state, zipCode: $zipCode}}
  ) {
    _id
    name
    address {
      street
      city
      state
      zipCode
    }
  }
}
    `;

export function useCreateStoreMutation() {
  return Urql.useMutation<CreateStoreMutation, CreateStoreMutationVariables>(CreateStoreDocument);
};
export const GetAllStoresDocument = gql`
    query GetAllStores {
  allStores {
    data {
      name
    }
  }
}
    `;

export function useGetAllStoresQuery(options: Omit<Urql.UseQueryArgs<GetAllStoresQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllStoresQuery>({ query: GetAllStoresDocument, ...options });
};
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Address",
        "fields": [
          {
            "name": "street",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "zipCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreditCard",
        "fields": [
          {
            "name": "network",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "number",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Customer",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "creditCard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CreditCard",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "address",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Address",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "telephone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_ts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerPage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Customer",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteStore",
            "type": {
              "kind": "OBJECT",
              "name": "Store",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "submitOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "customerId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "products",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStore",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Store",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateStore",
            "type": {
              "kind": "OBJECT",
              "name": "Store",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Order",
        "fields": [
          {
            "name": "shipDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "cart",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductCart",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "shipAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Address",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "creditCard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CreditCard",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "customer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "creationDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_ts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrderPage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Order",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "backorderLimit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "store",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Store",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "backordered",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_ts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductCart",
        "fields": [
          {
            "name": "product",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductPage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Product",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "findProductByID",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findOrderByID",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "allCustomers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "allProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "allStores",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "StorePage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "allOrders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderPage",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "findStoreByID",
            "type": {
              "kind": "OBJECT",
              "name": "Store",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findCustomerByID",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Store",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_ts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "address",
            "type": {
              "kind": "OBJECT",
              "name": "Address",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StorePage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Store",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;