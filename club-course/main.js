$(function(){
    $("#courseTable").append( "<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    let topicCount = topic.length;

    let millisecsPerDay = 24*60*60*1000;

    for (let x = 0; x < topicCount; x++) {
        let thisDate = new Date(startDate.getTime() + (Math.floor(x/2)*7 + x%2)*millisecsPerDay);
        let dayOfWeek = thisDate.getDay();
        let topicColor = "";
        if (topic[x] === "0325停課") {
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
});

