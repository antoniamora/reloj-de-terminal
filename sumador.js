const sumador = function(date) {
    const hoursCurr = date[0];
    const minutesCurr = date[1];
    const secondsCurr = date[2];
    if(secondsCurr < 59) {
        return [hoursCurr, minutesCurr, secondsCurr + 1]
    } else if(minutesCurr < 59) {
        return [hoursCurr, minutesCurr + 1, 0]
    } else if(hoursCurr < 23) {
        return [hoursCurr + 1, 0, 0]
    } else {
        return [0, 0, 0]
    }
}

module.exports = sumador;