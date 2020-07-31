export function getListOfIntervals(start, end) {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
        arr.push(i + 0.5);
    }
    return arr;
}