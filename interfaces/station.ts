import geometry from './geometry';

interface Station {
    AdvertisedLocationName: string,
    Geometry: geometry,
    LocationSignature: string,
    PlatformLine: string[]
}

export default Station;
