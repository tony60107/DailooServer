/**
 * Created by Waiting on 2017/7/16.
 */
var serverData;
window.onload = function () {
    scrollBarClass.bindEvent();
    imgSliderClass.bindEvent();
    audioClass.bindEvent();


    // 點擊分享按鈕
    $$("share").onclick = function () {
        $$("sharemask").style.display = "block";
        $$("sharebox").style.display = "block";
        $$("sharemask").style.overflowY = "hidden";
    }

    // 點擊分享的灰色背景
    $$("sharemask").onclick = function () {
        $$("sharemask").style.display = "none";
        $$("sharebox").style.display = "none";
    }

    // 點擊展開全文按鈕
    $$("readAllCont").onclick = function () {
        $$("summary").style.overflow = "none";
        $$("vpIntro").style.height = "100%";
        this.style.display = "none";
    }

    $$("readAllSpeakerIntro").onclick = function () {
        $$("speakerIntro").style.height = "100%";
        this.style.display = "none";
    }

    initData();
    //initDataFromServer(serverData);

}

function initData() {
    //取得網頁參數
    /*var strUrl = location.search;
     var getPara, ParaVal;
     var aryPara = [];

     if (strUrl.indexOf("?") != -1) {
     var getSearch = strUrl.split("?");
     getPara = getSearch[1].split("&");
     for (i = 0; i < getPara.length; i++) {
     ParaVal = getPara[i].split("=");
     aryPara.push(ParaVal[0]);
     aryPara[ParaVal[0]] = ParaVal[1];
     }
     }

     param = decodeURI(aryPara['utm_campaign']);*/

    var param = location.hash.substring(2, location.hash.length);
    $.ajax({
        url: "http://localhost:8080/Dailoo/ViewpointServlet", context: document.body,
        type:"POST",
        data: {"method": "getViewpointInfo", "viewpointId": param},
        success: function (data) {
            var data = eval("(" + data + ")");

            //修正照片URL
            var tags = data.audio.tags;
            if (typeof tags[0] != 'undefined') {
                for (var i = 0; i < tags.length; i++) {
                    tags[i].photoUrl = "/ResourceServlet?url=" + tags[i].photoUrl;
                }
            }
            console.dir(data);
            initDataFromServer(data);
        },
    });

}


//處理所有從伺服器拿回來的資料
function initDataFromServer(serverData) {

    //初始化音檔
    audioClass.initDataFromServer(serverData.audio);
    //初始化圖片輪播區相片
    imgSliderClass.initDataFromServer(serverData.audio.tags);
    if (typeof serverData.audio.tags[0] != "undefined") {
        updateMainPhoto(serverData.audio.tags[0].photoUrl);
    }
    //初始化景點資訊
    initViewpointData(serverData);
    //初始化講者資訊
    initAuthorData(serverData.speaker);

}

//初始化講者資訊
function initAuthorData(speakerData) {

    if (speakerData == null) {
        return;
    }

    //講者姓名
    $$("speakerName").innerHTML = speakerData.name;
    //講者相片
    if (speakerData.photoUrl != "") {
        $$("speakerPhoto").src = "/ResourceServlet?url=" + speakerData.photoUrl;
        $$("speakerSmallPhoto").src = "/ResourceServlet?url=" + speakerData.photoUrl;
    }
    //講者自我介紹
    var speakerIntro = $$("speakerIntro");
    speakerIntro.innerHTML = speakerData.intro;
    if (speakerIntro.offsetHeight <= 220) {
        $$("readAllSpeakerIntro").style.display = "none";
    } else if (speakerIntro.offsetHeight >= 334) {
        speakerIntro.style.height = "334px";
    }

    //講者手機
    if (speakerData.phoneNumber == null || speakerData.phoneNumber == '') {
        $$("speakerPhone").href = "#speaker";
        $$("speakerPhone").children[1].innerHTML = "無";
    } else {
        $$("speakerPhone").href = "tel:" + speakerData.phoneNumber;
        $$("speakerPhone").children[1].innerHTML = speakerData.phoneNumber;
    }

    //講者家電
    if (speakerData.homeNumber == null || speakerData.homeNumber == '') {
        $$("speakerHome").href = "#speaker";
        $$("speakerHome").children[1].innerHTML = "無";
    } else {
        $$("speakerHome").href = "tel:" + speakerData.homeNumber;
        $$("speakerHome").children[1].innerHTML = speakerData.homeNumber;
    }

    //講者Facebook
    if (speakerData.speakerUrl == null || speakerData.speakerUrl == '') {
        $$("speakerUrl").href = "#speaker";
        $$("speakerUrl").children[1].innerHTML = "無";
    } else {
        $$("speakerUrl").href = speakerData.speakerUrl;
        $$("speakerUrl").children[1].innerHTML = speakerData.speakerUrl;
    }

    //講者簡歷
    var resume = speakerData.resume.split(',');
    for (var i = 0; i < resume.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = resume[i];
        $$("speakerResume").appendChild(li);
    }

    //講者影片
    /*if (speakerData.videoUrl != "") {
     $$("ytplayer").src = speakerData.videoUrl;
     } else {
     $$("ytplayer").style.display = "none";
     $$("videoPrep").style.display = "block";
     }*/

    //講者影片
    var YTUrl = speakerData.youtubeUrl;
    if (YTUrl != '') {
        var YTID = YTUrl.substr(YTUrl.indexOf("v=") + 2, YTUrl.length);
        var ytplayer;
        ytplayer = new YT.Player('ytplayer', {
            height: '495',
            width: '880',
            videoId: YTID,
            events: {'onStateChange': onPlayerStateChange}
        });
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING) {
                document.getElementById("audio").pause();
            }
        }
        $$("videoPrep").style.display = "none";
    }
}

//初始化景點資訊
function initViewpointData(vpData) {
    document.title = vpData.name + " " + vpData.subtitle;
    //景點名稱
    $$("vpName").innerHTML = vpData.name;
    //景點簡介標題
    $$("vpTitle").innerHTML = vpData.name;
    //景點簡介副標題
    if (vpData.subtitle != "") {
        $$("vpSubtitle").innerHTML = vpData.subtitle;
    }

    //景點位置
    $$("vpLocation").href = vpData.navUrl;

    //景點介紹內容
    var vpIntro = $$("vpIntro")
    vpIntro.innerHTML = vpData.intro;
    if (vpIntro.offsetHeight <= 220) {
        $$("readAllCont").style.display = "none";
    } else if (vpIntro.offsetHeight >= 275) {
        vpIntro.style.height = "275px";
    }

    //還可以收聽區塊
    if (typeof vpData.moreAudio != "undefined") {
        $$("moreAudioTitle").innerHTML = vpData.name + "還有以下可以收聽：";
        var moreAudioDiv = $$("moreAudio");
        for (var i = 0; i < vpData.moreAudio.length; i++) {
            var audioA = document.createElement("a");
            audioA.href = "viewpoint.html?utm_source=InSite&utm_campaign=" + vpData.moreAudio[i].name + "_" + vpData.moreAudio[i].subtitle + "#!" + vpData.moreAudio[i].id;
            var audioDiv = document.createElement("div");
            audioDiv.className = "audio";
            audioDiv.innerHTML = vpData.moreAudio[i].subtitle;
            audioA.append(audioDiv);
            moreAudioDiv.appendChild(audioA);
        }
    } else {
        $$("moreAudio").style.display = "none";
    }

    //週邊景點
    if (typeof vpData.neighView != "undefined") {
        var neighViewDiv = $$("neighView");
        neighViewData = vpData.neighView;
        for (var i = 0; i < neighViewData.length; i++) {
            var viewA = document.createElement("a");
            viewA.href = "viewpoint.html?utm_source=InSite&utm_campaign=" + neighViewData[i].title + "_" + neighViewData[i].subtitle;
            var viewDiv = document.createElement("div");
            viewDiv.className = "view";
            viewDiv.innerHTML = neighViewData[i].title;
            viewA.append(viewDiv);
            neighViewDiv.appendChild(viewA);
        }
    }
}

