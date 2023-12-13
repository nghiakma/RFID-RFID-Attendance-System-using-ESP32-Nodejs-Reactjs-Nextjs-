function convertDateTime(value){
    var dateTime = new Date(value);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    month = `0${month}`.slice(-2);
    day = `0${day}`.slice(-2);
    hour = `0${hour}`.slice(-2);
    min = `0${min}`.slice(-2);
    sec = `0${sec}`.slice(-2);
    return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
}

function getDateTime(){
    var dateTime = new Date();
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    month = `0${month}`.slice(-2);
    day = `0${day}`.slice(-2);
    hour = `0${hour}`.slice(-2);
    min = `0${min}`.slice(-2);
    sec = `0${sec}`.slice(-2);
    return `${year}/${month}/${day} ${hour}:${min}:${sec}`;
}

function getCurrentDate(){
    var dateTime = new Date();
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    month = `0${month}`.slice(-2);
    day = `0${day}`.slice(-2);
    hour = `0${hour}`.slice(-2);
    min = `0${min}`.slice(-2);
    sec = `0${sec}`.slice(-2);
    return `${year}-${month}-${day}`;
}

function getCurrentTime(){
    var dateTime = new Date();
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    month = `0${month}`.slice(-2);
    day = `0${day}`.slice(-2);
    hour = `0${hour}`.slice(-2);
    min = `0${min}`.slice(-2);
    sec = `0${sec}`.slice(-2);
    return `${hour}:${min}:${sec}`;
}

export{
    convertDateTime,
    getDateTime,
    getCurrentDate,
    getCurrentTime
}