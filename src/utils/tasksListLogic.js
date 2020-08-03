export function getListOfIntervals(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i % 12);
        if (i < end) {
            arr.push((i % 12) + 0.5);
        }
    }
    return arr;
}

export function formatHour(hour) {
    return Number.isInteger(hour) ? `${hour}:00` : `${parseInt(hour)}:30`
}