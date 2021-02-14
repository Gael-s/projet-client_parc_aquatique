
const getNextDay = (current, n) => {
    let nextDay = current;
    let number = 0;
    while (n !== nextDay) {
        if (nextDay > 5) {
            nextDay = 0;
        } else {
            nextDay += 1;
        }
        number += 1;
    }
    return number;
}

const getHour = (time) => {
    const hour = Math.floor(time);
    const minute = ((time - hour).toFixed(2) * 100);
    return {hour, minute};
}

module.exports = {
    getNextDay,
    getHour,
}
