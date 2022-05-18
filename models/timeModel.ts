class TimeModel {
    private static H_TO_SEC = 3600;
    private static M_TO_SEC = 60;

    /**
     * @function getTimeDelay
     * @param startTime string | xx:xx:xx
     * @param endTime string | xx:xx:xx
     */
    static getTimeDelay(startTime:string, endTime:string) {
        const startTimeList = startTime.split(':');
        const endTimeList = endTime.split(':');

        startTimeList.map(time => {
            if (time.length < 2) {
                return new Error('Invalid time format');
            }
        });
        endTimeList.map(time => {
            if (time.length < 2) {
                return new Error('Invalid time format');
            }
        });

        const startTimeSecondsList = TimeModel.convertListToInt(startTimeList);
        const endTimeSecondsList = TimeModel.convertListToInt(endTimeList);

        const startTimeInt = startTimeSecondsList.reduce((timeCurr, timePrev) => {
            return timeCurr + timePrev;
        });
        const endTimeInt = endTimeSecondsList.reduce((timeCurr, timePrev) => {
            return timeCurr + timePrev;
        });

        if (endTimeInt < startTimeInt) {
            throw new Error('endTime must be greater than startTime.');
        }

        const timeDiff = endTimeInt - startTimeInt;

        return this.getTimeFormattedString(timeDiff);
    }

    private static convertListToInt(timeList:string[]) {
        const timeSecondsList = timeList.map((timeFragment, index) => {
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

        return timeSecondsList;
    }

    private static getTimeFormattedString(timeDiffSeconds:number) {
        const numHours = Math.floor(timeDiffSeconds / TimeModel.H_TO_SEC);

        timeDiffSeconds -= numHours * TimeModel.H_TO_SEC;

        const numMinutes = Math.floor(timeDiffSeconds / TimeModel.M_TO_SEC);

        timeDiffSeconds -= numMinutes * TimeModel.M_TO_SEC;

        const numSeconds = timeDiffSeconds.toString();

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
