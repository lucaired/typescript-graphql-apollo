export type ArtistDto = {
    id: string;
    name: string;
    age: number;
    country: string;
    streamingNumbers: number;
};
export type PlaylistDto = {
    id: string;
    name: string;
    description?: string;
    tracks: TrackDto[];
};
export type TrackDto = {
    id: string;
    name: string;
    durationMs: number;
    explicit: boolean;
    uri: string;
    artist: ArtistDto;
};
export type UrisDto = {
    uris: string;
};
export type SnapshotOrError = {
    snapshot_id?: string;
    error?: string;
};