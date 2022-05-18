class TimeModel {
    private static H_TO_SEC = 3600;
    private static M_TO_SEC = 60;

    /**
     * @function getTimeDelay
     * @param startTime string | hh:mm:ss
     * @param endTime string | hh:mm:ss
     */
    static getTimeDelay(startTime:string, endTime:string) {
        const startTimeList:string[] = startTime.split(':');
        const endTimeList:string[] = endTime.split(':');

        const startTimeSecondsList = TimeModel.convertListToSeconds(startTimeList);
        const endTimeSecondsList = TimeModel.convertListToSeconds(endTimeList);

        const startTimeInt = startTimeSecondsList.reduce((timeCurr, timePrev) => {
            return timeCurr + timePrev;
        });
        const endTimeInt = endTimeSecondsList.reduce((timeCurr, timePrev) => {
            return timeCurr + timePrev;
        });

        let timeDiff = endTimeInt - startTimeInt;

        /**
         * Train is delayed past midnight and were supposed to go before midnight.
         * This results in a negative time difference, which these lines fixes.
         */
        if (timeDiff < 0) {
            timeDiff += 24 * TimeModel.H_TO_SEC;
        }

        return this.getTimeFormattedString(timeDiff);
    }

    /**
     * @function getTimeInMinutes
     * @param time A string in the format hh:mm:ss
     */
    static getTimeInMinutes(time:string) {
        const seconds:number = time.split(':')
            .map((timeFragment, index) => {
                switch (index) {
                    case 0:
                        return parseInt(timeFragment) * TimeModel.H_TO_SEC;
                    case 1:
                        return parseInt(timeFragment) * TimeModel.M_TO_SEC;
                    case 2:
                        return parseInt(timeFragment);
                    default:
                        return 0;
                }
            })
            .reduce((prevSec, currSec) => { return prevSec + currSec; });

            return seconds / TimeModel.M_TO_SEC;
    }

    private static convertListToSeconds(timeList:string[]) {
        const timeListSeconds = timeList.map((timeFragment, index) => {
            switch (index) {
                case 0:
                    return parseInt(timeFragment) * TimeModel.H_TO_SEC;
                case 1:
                    return parseInt(timeFragment) * TimeModel.M_TO_SEC;
                case 2:
                    return parseInt(timeFragment);
                default:
                    return 0;
            }
        });

        return timeListSeconds;
    }

    private static getTimeFormattedString(timeDiffSeconds:number) {
        const numHours = Math.floor(timeDiffSeconds / TimeModel.H_TO_SEC);

        timeDiffSeconds -= numHours * TimeModel.H_TO_SEC;

        const numMinutes = Math.floor(timeDiffSeconds / TimeModel.M_TO_SEC);

        timeDiffSeconds -= numMinutes * TimeModel.M_TO_SEC;

        const numSeconds = timeDiffSeconds;

        const timeStringList = [numHours.toString(), numMinutes.toString(), numSeconds.toString()];

        for (let i = 0; i < timeStringList.length; i++) {
            if (timeStringList[i].length < 2) {
                timeStringList[i] = `0${timeStringList[i]}`;
            }
        }

        return `${timeStringList[0]}:${timeStringList[1]}:${timeStringList[2]}`;
    }
}

export default TimeModel;
