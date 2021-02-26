import { Track } from '../../data/entities/track';
import { TrackModel } from './track-model';

describe('TrackModel', () => {
    let track: Track;
    let trackModel: TrackModel;

    beforeEach(() => {
        track = new Track('/home/user/Music/track1.mp3');
        track.trackNumber = 5;
        track.fileName = 'track1';
        track.trackTitle = 'Track title';
        track.artists = ';Artist 1;;Artist 2;';
        track.duration = 45648713213;
        track.fileSize = 7704126;

        trackModel = new TrackModel(track);
    });

    describe('constructor', () => {
        it('should create', async () => {
            // Arrange

            // Act

            // Assert
            expect(trackModel).toBeDefined();
        });
    });

    describe('path', () => {
        it('should return the track path', () => {
            // Arrange

            // Act
            const path: string = trackModel.path;

            // Assert
            expect(path).toEqual('/home/user/Music/track1.mp3');
        });
    });

    describe('fileName', () => {
        it('should return the track file name', () => {
            // Arrange

            // Act
            const path: string = trackModel.fileName;

            // Assert
            expect(path).toEqual('track1');
        });
    });

    describe('number', () => {
        it('should return the track number', () => {
            // Arrange

            // Act
            const number: number = trackModel.number;

            // Assert
            expect(number).toEqual(5);
        });
    });
    describe('title', () => {
        it('should return the track title', () => {
            // Arrange

            // Act
            const title: string = trackModel.title;

            // Assert
            expect(title).toEqual('Track title');
        });
    });

    describe('artists', () => {
        it('should return the track artists', () => {
            // Arrange
            const expectedArtists: string[] = ['Artist 1', 'Artist 2'];

            // Act
            const artists: string[] = trackModel.artists;

            // Assert
            expect(artists).toEqual(expectedArtists);
        });
    });

    describe('durationInMilliseconds', () => {
        it('should return the track duration in milliseconds', () => {
            // Arrange

            // Act
            const durationInMilliseconds: number = trackModel.durationInMilliseconds;

            // Assert
            expect(durationInMilliseconds).toEqual(45648713213);
        });
    });

    describe('fileSizeInBytes', () => {
        it('should return the track file size in bytes', () => {
            // Arrange

            // Act
            const fileSizeInBytes: number = trackModel.fileSizeInBytes;

            // Assert
            expect(fileSizeInBytes).toEqual(7704126);
        });
    });
});
