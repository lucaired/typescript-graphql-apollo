import { HttpResponse, RequestHandler, http } from 'msw'

const baseURL = 'https://localhost:8080';

export const handlers: RequestHandler[] = [
    http.get(baseURL + "/featured-playlists", () => {
        console.log("MWS: GET /featured-playlists");
        return HttpResponse.json([
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
        ])
    })
];
