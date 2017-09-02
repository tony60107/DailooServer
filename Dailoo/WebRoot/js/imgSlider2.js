/**
 * Created by Waiting on 2017/7/19.
 */

var mainPhoto; //圖片輪播區的主照片
var tags; //進度條的Tag數據
var photoNumTxt; //播放到第幾張相片之文字區塊
var temp = 0;

var imgSlider = Class.extend({

    init: function () {
        mainPhoto = $$("mainPhoto");
        photoNumTxt = $$("photoNum");
    },

    bindEvent: function () {

    },

    initDataFromServer: function (tagsData) {
        tags = tagsData;

        if(typeof tags[0] == 'undefined'){ return;}

        updateMainPhoto(tags[0].photoUrl);

        //預加載導覽圖片
        var t = setInterval(function(){
            if(temp >= tags.length - 1){clearInterval(t);}
            $$("tempImg").src = tags[temp].photoUrl; // 用於預加載圖片
            temp++;
        },200);
    },

    //更新現在是到第幾張相片
    updatePhotoNumTxt: function () {
        var photoNum = 1; //紀錄是第幾張相片

        for (var i = 0; i < tags.length; i++) {
            //console.dir(mainPhoto.src + ":" + tags[i].photoUrl);
            if (decodeURI(mainPhoto.src).indexOf(tags[i].photoUrl) != -1) {
                photoNum = i;
            }
        }
        photoNumTxt.innerHTML = (photoNum + 1) + "/" + tags.length;
    }
});

//根據圖片ID，更新輪播圖主相片
function updateMainPhoto(src) {
    var img = new Image();
    img.src = src;
    var imgWidth = img.width;
    var imgHeight = img.height;
    var aspRat = imgWidth / imgHeight; //寬高比
    if (aspRat <= 1) { // 直式照片
        mainPhoto.style.width = aspRat * 720 + "px";
        //調整其他控件樣式
        mainPhoto.style.height = "720px";
        $$("speakerSmallPhoto").style.marginTop = "-38px";
        $$("picShower").style.marginTop = "42px";
        $$("photoNum").style.top = "32px";
    } else { // 橫式照片
        //調整控件樣式
        mainPhoto.style.width = aspRat * 540 + "px";
        mainPhoto.style.height = "540px";
        $$("speakerSmallPhoto").style.marginTop = "40px";
        $$("picShower").style.marginTop = "144px";
        $$("photoNum").style.top = "-70px";
    }
    mainPhoto.src = src;
    imgSliderClass.updatePhotoNumTxt(); //更新正在第幾張相片文字
}

var imgSliderClass = new imgSlider();