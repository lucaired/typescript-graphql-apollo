import { RESTDataSource } from "@apollo/datasource-rest";

export class SpotifyAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.spotify.com/v1/";
    }

    getFeaturedPlaylists() {
        // TODO: add MSW to mock this request
        // this.get("/featured-playlists");
        return [
            {
                "id": "1be35ff1-e020-40c8-8515-43ce2e830047",
                "name": "Hello World",
                "description": "A playlist for the world to say hello",
            },
            {
                "id": "9f6db983-5a14-4659-9159-7bb0e693b84a",
                "name": "Hello Universe",
                "description": "A playlist for the universe to say hello",
            }
        ];
    }
}