import { ApolloServer } from "apollo-server-lambda";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  playground: true,
  tracing: true,
  introspection: true,
});

exports.graphqlHandler = (event, context, callback) => {
  const handler = server.createHandler({
    cors: {
      origin: "*",
      credentials: true,
      methods: ["POST", "GET"],
      allowedHeaders: ["Content-Type", "Origin", "Accept"],
    },
  });
  return handler(event, context, callback);
};
