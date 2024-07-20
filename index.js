const getTime = require('./getTime.js');
const onSecond = require('./onSecond.js');
const sumador = require('./sumador.js');

let currentTime = getTime();
onSecond(() => {
    const stringTime = `Son las ${currentTime[0]}:${currentTime[1]}:${currentTime[2]}`
    console.clear();
    console.log(stringTime);
    currentTime = sumador(currentTime);
})