import { RESTDataSource } from "@apollo/datasource-rest";
import { Playlist } from "../types";

export class SpotifyAPI extends RESTDataSource {
    async getFeaturedPlaylists(): Promise<Playlist[]> {
        // TODO: add MSW to mock this request
        // this.get("/featured-playlists");
        return [
            {
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
            },
            {
                "id": "9f6db983-5a14-4659-9159-7bb0e693b84a",
                "name": "Hello Universe",
                "description": "A playlist for the universe to say hello",
                "tracks": [
                    {
                        "id": "9f6db983-5a14-4659-9159-7bb0e693b84a",
                        "name": "Hello",
                        "durationMs": 1000,
                        "explicit": false,
                        "uri": "spotify:track:9f6db983-5a14-4659-9159-7bb0e693b84a"
                    }
                ],
            }
        ];
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