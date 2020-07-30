const { gql } = require('apollo-server');

const typeDefs = gql`
  type Result {
    status: Boolean,
    message: String,
    error_message: String,
  }

  type MongodbResult {
    status: Boolean,
    inserted_id: String
    error_message: String,
  }

  type User {
    _id: String!,
    name: String!,
    gender: String!,
    age: Int!,
    eats_chocolate: Boolean
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!, gender: String!, age: Int!, eats_chocolate: Boolean): MongodbResult
  } 
`;

module.exports = {
  typeDefs
}
