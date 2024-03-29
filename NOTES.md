# GraphQL

## GraphQL Operations

Query Operations are shaped as a JSON object with a `query` key. The value of the `query` key is a string that contains the GraphQL query, with the fields the client wants to retrieve. Other operations include `mutation` and `subscription`.

```json
{
  "query": "query { hello }"
}
```

They are transmitted via GET or POST requests to the GraphQL server.

On the server the HTTP request is received, the operation is parsed, and the server executes the operation. Every query is validated against the schema before it is executed. This is done using an AST (Abstract Syntax Tree) that is generated from the query. For the field in 
the query, the server checks if the field is defined in the schema. If it is not, the server returns an error.

The server then resolves the query by executing the resolver functions. The resolver functions are functions that return the data for the fields in the query. The server executes the resolver functions for each field in the query, and returns the data to the client.

## Schema-first design
Involes three main steps:
1. Define the schema
2. Implement the resolvers and connect them to the schema
3. Consume data fomr the clients

### Schmemas
The schema is a blueprint of the data that the server can return. It defines the types of the data that the server can return, and the relationships between the data. The schema is defined using the GraphQL Schema Definition Language (SDL). The schema is defined using the `schema` keyword, and the types are defined using the `type` keyword.

```graphql
type Query {
  id: String
  user: User
}
```

The schema is the contract between the client and the server. The client can only request the fields that are defined in the schema. If the client requests a field that is not defined in the schema, the server returns an error.

Types are the building blocks of the schema. They define the shape of the data that the server can return. Types can be scalar types, object types, interface types, union types, enum types, and input types.

Schemas can be documented using comments. Comments are ignored by the server, but they can be used to document the schema.

```graphql
# This is a comment
type Article {
  # This is a comment
  id: !String
  title: !String
}
```

