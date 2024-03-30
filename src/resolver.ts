import { ArtistDto } from "./models";
import { Artist, Resolvers } from "./types";

export const resolvers: Resolvers = {
    Query: {
        /**
         * 
         * @param _parent is the result of the previous resolver execution level
         * @param _args arguments passed into the query
         * @param contextValue is an object that's shared among all resolvers in a query
         *  - dataSources is an object that contains all the data sources that are available to the resolvers 
         * @returns featured playlists
         */
        featuredPlaylists: async (_parent: unknown, _args: unknown, { dataSources }) => {
            return dataSources.spotifyAPI.getFeaturedPlaylists();
        },
        /**
         * 
         * @param _parent is the result of the previous resolver execution level
         * @param args arguments passed into the query
         * @param contextValue is an object that's shared among all resolvers in a query
         *  - dataSources is an object that contains all the data sources that are available to the resolvers 
         * @returns playlist by id
         */
        playlist: async (_parent: unknown, args: { id: string }, { dataSources }) => {
            return dataSources.spotifyAPI.getPlaylistById(args.id);
        },
        artist: async (_parent: unknown, args: { id: string }, { dataSources }) => {
            return dataSources.spotifyAPI.getArtistById(args.id);
        }
    },
    Artist: {
        streams: async (parent: ArtistDto, _args: unknown, { dataSources }) => {
            return parent.streamingNumbers;
        }
    },
    Mutation: {
        addItemsToPlaylist: async (_parent: unknown, input: { playlistId: string, uris: string[] }, { dataSources }) => {
            try {
                const response = await dataSources.spotifyAPI.addItemsToPlaylist(input);
                if (response.snapshot_id) {
                    return {
                        code: 200,
                        success: true,
                        message: "Tracks added to playlist!",
                        playlist: null,
                    };
                } else {
                    throw Error("snapshot_id property not found");
                }
            } catch (err) {
                return {
                    code: 500,
                    success: false,
                    message: err.message,
                    playlist: null,
                };
            }
        }
    }
};