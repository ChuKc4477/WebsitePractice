// let topic = [
//     "尚未開學",
//     "國定假日",
//     "環境準備",
//     "隨機性",
//     "重複性"
// ];

// 新明課表
let topic = [
        "Intro to HTML/CSS/JS",
        "Intro to JS/JS + <br> random dinner selector",
        "club course + Mind Quiz",
        "YoutubePlayer",
        "上傳雲端",
        "0319",
        "0325停課"
    ];

let startDate = new Date();

// function def
function setMoonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

// call function to set Month and day
setMoonthAndDay(3, 4)