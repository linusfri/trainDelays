import geometry from './Igeometry';

interface Station {
    AdvertisedLocationName: string,
    Geometry: geometry,
    LocationSignature: string,
    PlatformLine: string[]
}

export default Station;
