import { HttpResponse, RequestHandler, http } from 'msw'
import { ArtistDto, PlaylistDto, UrisDto } from '../models';

const baseURL = 'https://localhost:8080';

const idToArtist: Map<string, ArtistDto> = new Map(Object.entries({
    "1be35ff1-e020-40c8-8515-43ce2e830047": {
        "id": "1be35ff1-e020-40c8-8515-43ce2e830047",
        "name": "John World",
        "age": 30,
        "country": "USA",
        "streamingNumbers": 1000000000,
    },
    "9f6db983-5a14-4659-9159-7bb0e693b84a": {
        "id": "9f6db983-5a14-4659-9159-7bb0e693b84a",
        "name": "John Universe",
        "age": 30,
        "country": "USA",
        "streamingNumbers": 500000,
    },
    "1e35ff1-e020-40c8-8515-43ce2e830047": {
        "id": "1e35ff1-e020-40c8-8515-43ce2e830047",
        "name": "John",
        "age": 30,
        "country": "USA",
        "streamingNumbers": 100500,
    },
}));

const idToPlaylist: Map<string, PlaylistDto> = new Map(Object.entries({
    "1be35ff1-e020-40c8-8515-43ce2e830047": {
        "id": "1be35ff1-e020-40c8-8515-43ce2e830047",
        "name": "Hello World",
        "description": "A playlist for the world to say hello",
        "tracks": [
            {
                "id": "1e35ff1-e020-40c8-8515-43ce2e830047",
                "name": "Hello",
                "durationMs": 1000,
                "explicit": false,
                "uri": "spotify:track:1e35ff1-e020-40c8-8515-43ce2e830047",
                "artist": {
                    "id": "1be35ff1-e020-40c8-8515-43ce2e830047",
                    "name": "John World",
                    "age": 30,
                    "country": "USA",
                    "streamingNumbers": 1000000000,

                }
            }
        ],
    },
    "9f6db983-5a14-4659-9159-7bb0e693b84a": {
        "id": "9f6db983-5a14-4659-9159-7bb0e693b84a",
        "name": "Hello Universe",
        "description": "A playlist for the universe to say hello",
        "tracks": [
            {
                "id": "9f6db983-5a14-4659-9159-7bb0e693b84a",
                "name": "Hello",
                "durationMs": 1000,
                "explicit": false,
                "uri": "spotify:track:9f6db983-5a14-4659-9159-7bb0e693b84a",
                "artist": {
                    "id": "9f6db983-5a14-4659-9159-7bb0e693b84a",
                    "name": "John Universe",
                    "age": 30,
                    "country": "USA",
                    "streamingNumbers": 500000,
                }
            }
        ],
    }
}));

export const handlers: RequestHandler[] = [
    http.get(baseURL + "/featured-playlists", () => {
        console.log("MWS: GET /featured-playlists");
        return HttpResponse.json(Array.from(idToPlaylist.values()));
    }),
    http.get(baseURL + "/playlist/:id", ({ params }) => {
        console.log("MWS: GET /artist/:id");
        const { id } = params;
        const playlist = idToPlaylist.get(id as string);
        return HttpResponse.json(playlist);
    }),
    http.get(baseURL + "/artist/:id", ({ params }) => {
        console.log("MWS: GET /artist/:id");
        const { id } = params;
        const arist = idToArtist.get(id as string);
        return HttpResponse.json(arist);
    }),
    http.post(baseURL + "/playlists/:playlistId/tracks", async ({ params, request }) => {
        console.log("MWS: POST /playlists/:playlistId/tracks");
        const { playlistId } = params;
        const body = await request.json() as UrisDto;
        console.log('body %j', body);
        return HttpResponse.json({
            snapshot_id: "snapshot_id",
            playlistId,
            uris: body.uris,
        });
    })
];
