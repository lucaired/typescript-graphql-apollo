import { RESTDataSource } from "@apollo/datasource-rest";
import { Playlist } from "../types";
import { ArtistDto, PlaylistDto } from "../models";

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
}