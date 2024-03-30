import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema.graphql",
    generates: {
        "./src/types.d.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: "./context#DataSourceContext",
                mappers: {
                    Playlist: "./models#PlaylistDto",
                    Track: "./models#TrackDto",
                    Artist: "./models#ArtistDto",
                },
            }
        },
    },
};

export default config;