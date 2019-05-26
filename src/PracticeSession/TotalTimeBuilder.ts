const MINUTES_IN_AN_HOUR: number = 60;

export interface ITotalTime {
    readonly minutes: number;
    readonly hours: number;
}

export class TotalTimeBuilder {
    private totalMinutes = 0;
    private totalHours = 0;
    
    public AddTime(date: Date) {
        if (!date) {
            return;
        }

        this.totalMinutes += date.getMinutes();
        this.totalHours += date.getHours();
    }

    public Build(): ITotalTime {
        const minutes = this.totalMinutes % MINUTES_IN_AN_HOUR;
        const hours = this.totalHours + Math.floor(this.totalMinutes/MINUTES_IN_AN_HOUR);
        return { minutes, hours };
    }
}