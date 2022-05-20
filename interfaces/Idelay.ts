import location from './Ilocation';

interface Delay {
    ActivityId: string,
    ActivityType: string,
    AdvertisedTimeAtLocation: string,
    EstimatedTimeAtLocation: string,
    AdvertisedTrainIdent: string,
    Canceled: boolean,
    FromLocation: Array<location>,
    ToLocation: Array<location>
}

export default Delay;
