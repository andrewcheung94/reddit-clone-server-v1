export const timeSince = (time) => {
    // if under an hour, return how many mins ago
    // if under a min, return a few sec ago
    // if under a day , return how many hours
    // else return days
    const MS_PER_SECOND = 1000;
    const MS_PER_MINUTE = 1000*60;
    const MS_PER_HOUR = 1000*60*60;
    const MS_PER_DAY = 1000 * 60 *60*24;

    const now = new Date();
    const then = new Date(time);

    const msDiff = Math.abs(now - then);

    const secDiff = Math.floor(msDiff/ MS_PER_SECOND);
    const minDiff = Math.floor(msDiff/ MS_PER_MINUTE);
    const hourDiff = Math.floor(msDiff/ MS_PER_HOUR);
    const dayDiff = Math.floor(msDiff/ MS_PER_DAY);

    if (dayDiff > 0) return `${dayDiff} days`;
    if (hourDiff > 0) return `${hourDiff} hours`;
    if (minDiff > 0) return `${minDiff} minutes`;
    if (secDiff > 0) return `${secDiff} seconds`;

    return "a moment ago";
};