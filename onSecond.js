const ONE_SECOND = 1000; 

const onSecond = function(callback) {
    let count = 0;
    setInterval(() => {
        callback(count);
        count++;
    }, ONE_SECOND) 
}

module.exports = onSecond;