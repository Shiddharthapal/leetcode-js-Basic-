//cascade of time basic algorithm
let hour = 0, minute = 0, second = 0, millisecond = 0;

setInterval(() => {
    millisecond++;

    if (millisecond === 1000) {
        millisecond = 0;
        second++;
    }

    if (second === 60) {
        second = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }

    if (hour === 24) {
        hour = 0;
    }

    console.log(
        `${String(hour).padStart(2, '0')}:` +
        `${String(minute).padStart(2, '0')}:` +
        `${String(second).padStart(2, '0')}.` +
        `${String(millisecond).padStart(3, '0')}`
    );
}, 1);