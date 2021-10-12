const { ApolloServer, gql } = require("apollo-server-lambda");
import { schema } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  playground: true,
  tracing: true,
  introspection: true,
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type", "Origin", "Accept"],
  },
});
