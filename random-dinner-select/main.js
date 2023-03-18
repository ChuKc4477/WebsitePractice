let imageURLs=[
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://shoplineimg.com/5bc4292088891600051d9fe8/61512f0b901bb1002f339a9a/800x.jpg?",
    "https://cc.tvbs.com.tw/img/program/upload/2023/02/21/20230221112523-bb25abfe.jpg",
];


$(function(){
    var lastRandomNumber;
    // 當使用者點擊 input 元素時，執行以下的程式
    $("input").on("click",function(){ 
        let numberOfListItem = $("li").length;// 取得網頁上 li 元素的總數量
        let randomNumber = Math.floor(Math.random()*numberOfListItem); // 產生 0 ~ numberOfListItem-1 之間的隨機整數

        // 利用 while 迴圈來避免產生連續相同的隨機數
        // 如果產生的隨機數與上一次相同，就繼續產生新的隨機數
        while (randomNumber === lastRandomNumber) {
            randomNumber = Math.floor(Math.random()*numberOfListItem);
        }

        console.log(randomNumber);//網頁上開發人員工具監測產生數值

        lastRandomNumber = randomNumber;  // 儲存產生的隨機數，以便下一次判斷
        $("h1").text($("li").eq(randomNumber).text()); // 將 h1 元素的文字改成所選擇的 li 元素的文字
        $("img").attr("src",imageURLs[randomNumber]); // 將 img 元素的 src 屬性改成對應的圖片 URL
    });
});
