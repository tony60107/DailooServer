/**
 * Created by Waiting on 2017/7/18.
 */


var playBtn, preTagBtn, nextTagBtn; //聲音播放器按紐
var audio; //播放聲音的控件
var audioLength; //聲音總長度
var nowTime; //現在播放到的時間
var tags; //音檔標記的JSON數據

var imgSliderClass;

var Audio = Class.extend({
    init: function () {
        preTagBtn = $$("preTagBtn");
        playBtn = $$("playBtn");
        nextTagBtn = $$("nextTagBtn");
        audio = $$("audio");
        audio.currentTime = 0;
        nowTime = 0;
        audio.volume = 1.0;
        imgSliderClass = new imgSlider();

        setInterval(function(){audioClass.updateTagState()}, 300);

        audio.onloadeddata = function () { //等待音檔加載完成
            audioLength = audio.attributes.src.ownerElement.duration;
            //設定音檔總長度文字
            if (audioLength % 60 < 10) {
                allTimeTxt.innerHTML = parseInt(audioLength / 60) + ":0" + parseInt(audioLength % 60);
            } else {
                allTimeTxt.innerHTML = parseInt(audioLength / 60) + ":" + parseInt(audioLength % 60);
            }
            //設定音檔的Tag標記
            for (var i = 0; i < tags.length; i++) {
                var tagNode = document.createElement("div");
                tagNode.className = "tag";
                tagNode.time = tags[i].time; //Node同時保存時間屬性
                tagNode.photoUrl = tags[i].photoUrl; //Node同時保存對應的相片ID
                tagNode.style.left = tags[i].time / audioLength * scrollBarWidth - 8 + "px"; //計算Tag在進度條中的位置, 8 為bar寬度的一半
                scrollBar.appendChild(tagNode);
            }

            //自動播放語音
            /*function autoPlayAudio(e){
                //如果瀏覽器帶有要求自動播放參數，則點下播放鍵
                if(location.href.split("autoplay=")[1] == 'true') {playBtn.click();}
                document.removeEventListener("touchstart", autoPlayAudio);
                console.dir(e);
                e.stopImmediatePropagation();
            }
            document.addEventListener("touchstart", autoPlayAudio);*/
        }

    },
    bindEvent: function () {

        playBtn.addEventListener("click", function (event) { //點下了播放按鈕
            if (audio.paused == true) { //如果為暫停狀態
                playBtn.style.backgroundImage = "url(images/viewpoint/pause.png)";
                audio.play();
                audio.timer = setInterval(function () { //每0.3秒更新進度條狀態
                    updateProgTime(false);
                }, 300);
            } else { //如果為播放狀態
                playBtn.style.backgroundImage = "url(images/viewpoint/play.png)";
                audio.pause();
                clearInterval(audio.timer); //清除進度條狀態更新計時器
            }
        });

        nextTagBtn.addEventListener("click", function () { //跳到下一個Tag標記
            var curTime = audio.currentTime;
            var tempTime = audioLength - 5;//tags[tags.length -1].time; //用於保存最接近且大於currentTime的Tag時間

            //找出符合條件的Tag時間
            for (var i = 0; i < tags.length; i++) {
                if (tags[i].time > curTime && tags[i].time < tempTime) {
                    tempTime = tags[i].time;
                }
            }
            audio.currentTime = tempTime; //將當前音檔時間更改為符合條件Tag所提供的時間
            audioClass.updateTagState(); //更新Tag狀態
        });
        preTagBtn.addEventListener("click", function () { //跳到上一個Tag標記
            var curTime = audio.currentTime;
            var tempTime = -1; //用於保存最接近且小於currentTime的Tag時間

            //找出符合條件的Tag時間
            for (var i = 0; i < tags.length; i++) {
                if (tags[i].time < curTime - 3 && tags[i].time > tempTime) {
                    tempTime = tags[i].time;
                }
            }
            audio.currentTime = tempTime; //將當前音檔時間更改為符合條件Tag所提供的時間
        });

        audio.onpause = function(){ //音檔突然暫停時，更改Play按鈕圖示
            playBtn.style.backgroundImage = "url(images/viewpoint/play.png)";
        }

    },

    initDataFromServer : function(audioData){
        //audio.src = audioData.src;
        audio.src = "/ResourceServlet?url=" + audioData.src;
        tags = audioData.tags;
    },

    //更新Tag狀態
    updateTagState: function(){
        var childs = scrollBar.children; // 保存scrollBar中的子元素，來找出Tag
        var curTime = audio.currentTime; //當前聲音時間
        var tempTime = -1; //記錄最接近且小於curTime的時間
        var tempTag = -1; //記錄最接近且小於curTime時間的Tag
        var tempphotoUrl = -1; //記錄該Tag的相片URL

        for (var i = 0; i < childs.length; i++) { //遍歷所有子節點
            if (childs[i].className.indexOf("tag") != -1) { //如果是Tag
                if (curTime >= childs[i].time && childs[i].time >= tempTime) { //找出小於curTime且大於目前紀錄最小時間的Tag
                    tempTag = i;
                    tempTime = childs[i].time;
                    tempphotoUrl = childs[i].photoUrl;
                }
            }
        }
        //更改Tag樣式
        for (var i = 0; i < childs.length; i++) {
            if (childs[i].className.indexOf("tag") != -1) { //如果是Tag
                if (i == tempTag) { //如果是剛剛找到符合條件的Tag
                    childs[i].className = "tag cur"; //標記該Tag為當前的Tag
                    imgSliderClass.updateMainPhoto(tempphotoUrl); //更新圖片輪播區主相片
                } else {
                    childs[i].className = "tag";
                    imgSliderClass.updateMainPhoto($$("mainPhoto").src);
                }
            }
        }

        //設定如果播放到尾端，自動播放下一段語音
        var nextAudio = document.nextAudio;
        if(curTime > audioLength - 0.5 && audio.paused == false && nextAudio != null){
            location.href = "/viewpoint.html?utm_source=InSite&utm_campaign=" + nextAudio.name + "_" + nextAudio.subtitle +"&id=" + nextAudio.id + "&autoplay=true";
        }
    }
});



var audioClass = new Audio();