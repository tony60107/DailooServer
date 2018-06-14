/**
 * Created by Waiting on 2017/7/19.
 */

var mainPhoto; //圖片輪播區的主照片
var tags; //進度條的Tag數據
var photoNumTxt; //播放到第幾張相片之文字區塊
var preLoadImgs; //用於預加載導覽照片
var preLoadImgNow; //現在預加載到第幾張照片
var floatPhoto; //浮動播放器照片

var imgSlider = Class.extend({

    init: function () {
        mainPhoto = $$("mainPhoto");
        floatPhoto = $$("floatPhoto");
        photoNumTxt = $$("photoNum");
        preLoadImgs = new Array();
        preLoadImgNow = 0;
    },

    bindEvent: function () {

    },

    initDataFromServer: function (tagsData) {
        tags = tagsData;

        if(typeof tags[0] == 'undefined'){ return;}

        imgSliderClass.updateMainPhoto(tags[0].photoUrl);

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

        //預加載導覽照片
        if(preLoadImgNow <= photoNum + 6) {
            var target = photoNum + 6;
            for(var i = preLoadImgNow; i < target; i++) {
                //console.dir("Pre: " + preLoadImgNow + " : " + photoNum + " : " + i);
                if(preLoadImgNow >= tags.length) break;
                preLoadImgs[i] = new Image();
                preLoadImgs[i].src = tags[i].photoUrl;
                preLoadImgNow++;
            }
        }
    },

    //根據圖片ID，更新輪播圖主相片
    updateMainPhoto: function(src) {
        var img = new Image();
        img.src = src;
        var imgWidth = img.width;
        var imgHeight = img.height;
        var aspRat = imgWidth / imgHeight; //寬高比
        if (aspRat <= 1) { // 直式照片
            mainPhoto.style.width = aspRat * 736 + "px";
            mainPhoto.style.height = "736px";
            mainPhoto.style.top = "0px";
            mainPhoto.style.left = (980 - aspRat * 736) / 2 + "px";
        } else { // 橫式照片
            mainPhoto.style.width = "980px";
            var height = 980 / aspRat > 736 ? 736 : 980 / aspRat;
            mainPhoto.style.height = height + "px";
            mainPhoto.style.top = (736 - height) / 2 + "px";
            mainPhoto.style.left = "0px";
        }
        mainPhoto.src = src;
        floatPhoto.src = src;
        imgSliderClass.updatePhotoNumTxt(); //更新正在第幾張相片文字
    }
});

var imgSliderClass = new imgSlider();