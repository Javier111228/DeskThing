// I think technically the way this was supposed to work
// was that all of the below types were the TypedURI with
// additional properties - TODO rewrite this to do that
export type TypedURI = {
    type: any;
    id?: any;
    context?: any;
    play?: any;
    anchor?: string;
    tracks?: any[]
    index?: number;
    query?: string;
    toplist?: any;
    name?: string;
    uid?: string;
    extension?: string;
    username?: string;
    origin?: string;
    data?: any;
    global?: any;
    country?: any;
    args?: any[];
    artist?: string;
    album?: string;
    track?: string;
    duration?: number;
    category?: string;
    ids?: string[];
    disc?: any;
};
export type AdURI = any;
export type AlbumURI = any;
export type ApplicationURI = any;
export type ArtistURI = any;
export type ArtistToplistURI = any;
export type AudioFileURI = any;
export type CollectionURI = any;
export type CollectionAlbumURI = any;
export type CollectionArtistURI = any;
export type CollectionMissingAlbumURI = any;
export type CollectionTrackListURI = any;
export type ConcertURI = any;
export type ContextGroupURI = any;
export type DailyMixURI = any;
export type EmptyURI = any;
export type EpisodeURI = any;
export type FacebookURI = any;
export type FolderURI = any;
export type FollowersURI = any;
export type FollowingURI = any;
export type ImageURI = any;
export type InboxURI = any;
export type InterruptionURI = any;
export type LibraryURI = any;
export type LiveURI = any;
export type LocalURI = any;
export type LocalTrackURI = any;
export type LocalAlbumURI = any;
export type LocalArtistURI = any;
export type MosaicURI = any;
export type PlaylistURI = any;
export type PlaylistV2URI = any;
export type ProfileURI = any;
export type PublishedRootlistURI = any;
export type RadioURI = any;
export type RootlistURI = any;
export type SearchURI = any;
export type ShowURI = any;
export type SocialSessionURI = any;
export type SpecialURI = any;
export type StarredURI = any;
export type StationURI = any;
export type TemporaryPlaylistURI = any;
export type ToplistURI = any;
export type TrackURI = any;
export type TracksetURI = any;
export type UserToplistURI = any;
export type UserTopTracksURI = any;