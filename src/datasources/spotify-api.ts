import { RESTDataSource } from "@apollo/datasource-rest";
import { ArtistDto, PlaylistDto, SnapshotOrError } from "../models";

export class SpotifyAPI extends RESTDataSource {
    constructor(args: any) {
        super(args);
        this.baseURL = 'https://localhost:8080';
    }

    async getFeaturedPlaylists(): Promise<PlaylistDto[]> {
        return this.get("/featured-playlists");
    }

    async getPlaylistById(id: string): Promise<PlaylistDto> {
        return this.get(`/playlist/${id}`);
    }

    async getArtistById(id: string): Promise<ArtistDto> {
        return this.get(`/artist/${id}`);
    }

    async addItemsToPlaylist(input: { playlistId: string, uris: string[] }): Promise<SnapshotOrError> {
        const { playlistId, uris } = input;
        console.log('playlistId', playlistId);
        return this.post(`playlists/${playlistId}/tracks`, {
            body: {
                uris: uris.join(',')
            }
        });
    }
}