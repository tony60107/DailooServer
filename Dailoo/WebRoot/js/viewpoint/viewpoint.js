/**
 * Created by Waiting on 2017/7/16.
 */
window.onload = function () {
    var imgSliderClass = new imgSlider();
    scrollBarClass.bindEvent();
    imgSliderClass.bindEvent();
    audioClass.bindEvent();

    //避免網速過慢導致Youtube Api未啟用，手動調用
    onYouTubeIframeAPIReady();

    // 點擊分享按鈕
    $$("share").onclick = function () {
        $$("sharemask").style.display = "block";
        $$("sharebox").style.display = "block";
        $$("sharemask").style.overflowY = "hidden";
        $$("shareInput").value = document.shortUrl;
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

    //取得景點ID
    var vpId = location.href.split("id=")[1];
    //如果未提供景點ID，則跳轉到鹿野主題列表
    //if(typeof vpId == 'undefined'){location.href = "/themelist.html?id=e3cfc0f0-a9f5-439b-a534-efff46ced2ce"}

    //根據景點ID，取得景點資訊
    $.ajax({
        url: "/ViewpointServlet", context: document.body,
        type: "POST",
        data: {"method": "getViewpointInfo", "id": vpId},
        success: function (data) {
            var data = eval("(" + data + ")");
            if(data.error != undefined) alert(data.error);

            //修正照片URL
            var tags = data.audio.tags;
            if (typeof tags[0] != 'undefined') {
                for (var i = 0; i < tags.length; i++) {
                    tags[i].photoUrl = "/ResourceServlet?url=" + tags[i].photoUrl;
                }
            }
            //console.dir(data);
            speakerData = data.speaker;
            initDataFromServer(data);
        },
    });
    history.replaceState(null, null, location.href);


}

//處理所有從伺服器拿回來的資料
function initDataFromServer(serverData) {

    //初始化音檔
    audioClass.initDataFromServer(serverData.audio);
    //初始化圖片輪播區相片
    imgSliderClass.initDataFromServer(serverData.audio.tags);
    if (typeof serverData.audio.tags[0] != "undefined") {
        imgSliderClass.updateMainPhoto(serverData.audio.tags[0].photoUrl);
    }
    //初始化講者資訊
    initAuthorData(serverData.speaker);
    //初始化景點資訊
    initViewpointData(serverData);
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
    speakerIntro.innerHTML = speakerData.intro.replace(/\r\n\r\n/g,'<br/>');
    speakerIntro.innerHTML = speakerIntro.innerHTML.replace(/\n/g,'');
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

}

//初始化景點資訊
function initViewpointData(vpData) {

    //網頁標題
    document.title = vpData.name + " " + vpData.subtitle;
    //將短網址存入全局變量中
    document.shortUrl = vpData.shortUrl;
    //上一頁按鈕
    $$("backward").href = "/viewlist.html?id=" + vpData.theme.id;
    //景點名稱
    $$("vpName").innerHTML = vpData.name;
    //景點簡介標題
    $$("vpTitle").innerHTML = vpData.name;
    //景點簡介副標題
    if (vpData.subtitle != "") {
        $$("vpSubtitle").innerHTML = vpData.subtitle;
    }
    //景點行政區
    $$("area").innerHTML = vpData.city + vpData.town;

    //景點位置
    if(vpData.latLngPri == 1) {
        $$("vpLocation").href = "https://www.google.com.tw/maps/place/" + vpData.latitude + "," + vpData.longitude + "/@" + vpData.latitude + "," + vpData.longitude + ",19.5z";
    } else {
        $$("vpLocation").href = "https://www.google.com.tw/maps/place/" + vpData.address + "/@" + vpData.latitude + "," + vpData.longitude + ",19.5z";
    }
    //景點介紹內容
    var vpIntro = $$("vpIntro");
    vpIntro.innerHTML = vpData.intro.replace(/\r\n\r\n/g,'<br/>');
    vpIntro.innerHTML =  vpIntro.innerHTML.replace(/\n/g,'');
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
            moreAudioDiv.innerHTML = moreAudioDiv.innerHTML +
                '<a href="viewpoint.html?utm_source=InSite&utm_campaign=' + vpData.moreAudio[i].name + '_' +
                vpData.moreAudio[i].subtitle + '&id=' + vpData.moreAudio[i].id +
                '"><div class="audio">' + vpData.moreAudio[i].subtitle + '</div></a>';

            /*var dom = '<a class="view" href="viewpoint.html?utm_source=InSite&utm_campaign=' + vpData.moreAudio[i].name + '_' +
                            vpData.moreAudio[i].subtitle + '&id=' + vpData.moreAudio[i].id + '">' +
                            '<img src="/ResourceServlet?url=' + vpData.moreAudio[i].behalfPhotoUrl +'">' +
                            '<div class="cover"></div>' +
                            '<div class="title">' + vpData.moreAudio[i].name + '</div>' +
                            '<img class="speaker-photo fl" src="/ResourceServlet?url=' + vpData.moreAudio[i].speakerPhotoUrl +'" alt="">' +
                            '<div class="speaker-info fl">' +
                            '<div class="speaker">' + vpData.moreAudio[i].speakerName + '</div>' +
                            '<div class="time">1分56秒</div>' +
                        '</div>' +
                        '</a>';

            moreAudioDiv.innerHTML = moreAudioDiv.innerHTML + dom;*/

            //設定自動播放下一段語音資料
            if(vpData.id == vpData.moreAudio[i].id && vpData.moreAudio[i+1] != null) {
                //將下一段語音資料設為全域變量
                document.nextAudio = vpData.moreAudio[i+1];
            }
        }
    } else {
        $$("moreAudio").style.display = "none";
    }

    //週邊景點
    if (typeof vpData.neighView != "undefined") {
        var neighViewDiv = $$("neighView");
        neighViewData = vpData.neighView;
        for (var i = 0; i < neighViewData.length; i++) {
            /*var dom = '<a href="viewpoint.html?utm_source=InSite&amp;utm_campaign=' + vpData.neighView[i].name + '_' + vpData.neighView[i].subtitle + '' +
                '&id=' + vpData.neighView[i].id + '"><div class="view">' + vpData.neighView[i].name + '</div></a>';*/
            var dom = '<a class="view" href="viewpoint.html?utm_source=InSite&utm_campaign=' +vpData.neighView[i].name + '_' +
                vpData.moreAudio[i].subtitle + '&id=' + vpData.neighView[i].id + '">' +
                '<img src="/ResourceServlet?url=' + vpData.neighView[i].behalfPhotoUrl +'">' +
                '<div class="cover"></div>' +
                '<div class="title">' + vpData.neighView[i].name + '</div>' +
                '<img class="speaker-photo fl" src="/ResourceServlet?url=' + vpData.neighView[i].speakerPhotoUrl +'" alt="">' +
                '<div class="speaker-info fl">' +
                '<div class="speaker">' + vpData.neighView[i].speakerName + '</div>' +
                '<div class="time">1分56秒</div>' +
                '</div>' +
                '</a>';
            neighViewDiv.innerHTML = neighViewDiv.innerHTML + dom;
        }
    }

    //Footer樣式
    var jinfeng = "03326ff3-cad4-42bc-a8aa-35fca64eb2ef,8daa252d-42e6-4535-a0b6-d794d7e5029d,e6862f47-a7a3-4b22-9647-763425705f0a,10c09cb8-355c-4db9-a852-fc3d20eca556,9de8cafd-203e-4f5e-8faf-aeda29264952,4652c369-be78-460d-90e3-e0e66267069f";
    if(jinfeng.indexOf(vpData.theme.id) != -1){ //如果是金峰鄉主題
        $$("footerIframe").contentWindow.changeCss("orange");
    }

}

