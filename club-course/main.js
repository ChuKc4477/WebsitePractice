//課堂基本 lab
// $(function(){
//     $("#courseTable").append( "<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

//     let topicCount = topic.length;

//     let millisecsPerDay = 24*60*60*1000;

//     for (let x = 0; x < topicCount; x++) {
//         $("#courseTable").append(
//             "<tr>"+
//              `<td>${x+1}</td>`+
//              `<td>${(new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString()}</td>` +
//              `<td>${topic[x]}</td>` +
//             "</tr>"
//         );
//     }
// });

//去掉年份lab
// $(function(){
//     $("#courseTable").append( "<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

//     let topicCount = topic.length;

//     let millisecsPerDay = 24*60*60*1000;

//     for (let x = 0; x < topicCount; x++) {
//         $("#courseTable").append(
//             "<tr>"+
//              `<td>${x+1}</td>`+
//              `<td>${(new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString(undefined, {month: 'numeric', day: 'numeric'})}</td>` +
//              `<td>${topic[x]}</td>` +
//             "</tr>"
//         );
//     }
// });

//網頁開發課程課表遇到停課變色lab
$(function(){
    $("#courseTable").append( "<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    let topicCount = topic.length;

    let millisecsPerDay = 24*60*60*1000;

    for (let x = 0; x < topicCount; x++) {
        let thisDate = new Date(startDate.getTime() + 7*x*millisecsPerDay);
        let dayOfWeek = thisDate.getDay();
        if (dayOfWeek == 0) { // 如果是週日
            let topicColor = "";
            if(topic[x] === "0325停課"){
                topicColor = "cancelled";
            }
            $("#courseTable").append(
                "<tr>"+
                 `<td>${x+1}</td>`+
                 `<td>${thisDate.toLocaleDateString(undefined, {month: 'numeric', day: 'numeric'})}</td>` +
                 `<td class="${topicColor}">${topic[x]}</td>` +
                "</tr>"
            );
        } else if (dayOfWeek == 6) { // 如果是週六
            let topicColor = "";
            if(topic[x] === "0325停課"){
                topicColor = "cancelled";
            }
            $("#courseTable").append(
                "<tr>"+
                 `<td>${x+1}</td>`+
                 `<td>${thisDate.toLocaleDateString(undefined, {month: 'numeric', day: 'numeric'})}</td>` +
                 `<td class="${topicColor}">${topic[x]}</td>` +
                "</tr>"
            );
        }
        
    }
    
});

