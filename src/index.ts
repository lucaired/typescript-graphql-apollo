import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag"; // Converts GraphQL strings into format that Apollo can use
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";

export const mockSpotifyAPI = setupServer(...handlers);


import { resolvers } from "./resolver";
import { SpotifyAPI } from "./datasources/spotify-api";

const typeDefs = gql(
    readFileSync(path.resolve(__dirname, "./schema.graphql"), {
        encoding: "utf-8",
    })
);

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    // Pass the context to the resolvers, so that the data sources are available to them
    const { url } = await startStandaloneServer(server, {
        context: async () => {

            // Create a cache object that will be shared across all resolvers
            // It is created by Apollo Server and passed to the context function
            const { cache } = server;

            return {
                dataSources: {
                    spotifyAPI: new SpotifyAPI({ cache }),
                },
            };
        }
    });
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
}

if (process.env.NODE_ENV === "development") {
    mockSpotifyAPI.listen();
}

startApolloServer();