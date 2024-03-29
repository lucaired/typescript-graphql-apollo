import { RESTDataSource } from "@apollo/datasource-rest";
import { Playlist } from "../types";

export class SpotifyAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://localhost:8080';
    }

    async getFeaturedPlaylists(): Promise<Playlist[]> {
        const response = await this.get("/featured-playlists");
        return response;
    }

    async getPlaylistById(id: string): Promise<Playlist> {
        // this.get(`/playlists/${id}`);
        return {
            "id": "1be35ff1-e020-40c8-8515-43ce2e830047",
            "name": "Hello World",
            "description": "A playlist for the world to say hello",
            "tracks": [
                {
                    "id": "1e35ff1-e020-40c8-8515-43ce2e830047",
                    "name": "Hello",
                    "durationMs": 1000,
                    "explicit": false,
                    "uri": "spotify:track:1e35ff1-e020-40c8-8515-43ce2e830047"
                }
            ],
        };
    }
}