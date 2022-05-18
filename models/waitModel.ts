class WaitModel {
    private static METERS_WALKED_PER_MINUTE = 100;

    static async calculateDistance(minutes:number) {
        /**
         * Take into account that the person walking will have to have some margins
         * so he/she doesn't miss the train. Two minutes should suffice.
         */
        minutes -= 2;

        return minutes * WaitModel.METERS_WALKED_PER_MINUTE;
    }
}

export default WaitModel;
