/**
 * Created by Waiting on 2017/7/16.
 */
window.onload = function () {
    var imgSliderClass = new imgSlider();
    scrollBarClass.bindEvent();
    imgSliderClass.bindEvent();
    audioClass.bindEvent();
    var neighSwiper; //週邊景點滾動欄

    //避免網速過慢導致Youtube Api未啟用，手動調用
    onYouTubeIframeAPIReady();

    // 點擊分享按鈕
    $$("share").onclick = function () {
        $$("sharemask").style.display = "block";
        $$("sharebox").style.display = "block";
        $$("sharemask").style.overflowY = "hidden";
        $$("shareInput").value = document.shortUrl;
    }

    //點擊複製短網址
    $$("copyShortUrl").onclick = copyShortUrl;
    $$("shareInput").onclick = copyShortUrl;
    function copyShortUrl(){
        $('body').append('<textarea id="clip_area"></textarea>');
        var clip_area = $('#clip_area');
        clip_area.text(document.shortUrl);
        clip_area.select();
        document.execCommand('copy');
        clip_area.remove();
        alert(document.shortUrl + " 複製成功");
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

    //點擊查看講者簡介
    $$("readAllSpeakerIntro").onclick = function () {
        $$("speakerIntro").style.height = "100%";
        this.style.display = "none";
    }

    //廣告區點擊關閉按鈕
    $$("adClose").onclick = function() {
        $$("admask").style.display = "none";
        $$("adbox").style.display = "none";
    }

    //廣告區點擊QRCode
    $$("adQRC").onclick = function(){
        $$("admask").style.display = "none";
        $$("adbox").style.display = "none";
        $$("sharemask").style.display = "block";
        $$("sharebox").style.display = "block";
        $$("sharemask").style.overflowY = "hidden";
        $$("shareInput").value = document.shortUrl;
    }

    //廣告區點擊更多
    $$("adMore").onclick = function(){
        $$("admask").style.display = "none";
        $$("adbox").style.display = "none";
        $$("sharemask").style.display = "block";
        $$("sharebox").style.display = "block";
        $$("sharemask").style.overflowY = "hidden";
        $$("shareInput").value = document.shortUrl;
    }

    //分享區塊點擊關閉按鈕
    $$("shareClose").onclick = function() {
        $$("sharemask").style.display = "none";
        $$("sharebox").style.display = "none";
    }

    //控制浮動播放器何時顯示
    window.addEventListener('scroll',function(){
        var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
        var playHeight = $$("player").clientHeight;
        if(scrollTop > playHeight) { //當主播放器消失時顯示
            $$("floatPlayer").style.display = "block";
        }else { //當主播放器出現時消失
            $$("floatPlayer").style.display = "none";
        }
    },false);

    //取得景點ID
    var vpId = location.href.split("id=")[1];
    if(vpId != undefined) vpId = vpId.split("#")[0];
    //如果未提供景點ID，則跳轉到鹿野主題列表
    if(typeof vpId == 'undefined'){location.href = "/themelist.html?id=e3cfc0f0-a9f5-439b-a534-efff46ced2ce"}

    //根據景點ID，取得景點資訊
    $.ajax({
        url: "/ViewpointServlet", context: document.body,
        type: "POST",
        data: {"method": "getViewpointInfo", "id": vpId},
        success: function (data) {
            var data = eval("(" + data + ")");
            if (data.error != undefined) alert(data.error);

            //修正照片URL
            var tags = data.audio.tags;
            if (typeof tags[0] != 'undefined') {
                for (var i = 0; i < tags.length; i++) {
                    tags[i].photoUrl = "/ResourceServlet?url=" + tags[i].photoUrl;
                }
            }
            speakerData = data.speaker;
            initDataFromServer(data);
            console.dir(data);
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
    speakerIntro.innerHTML = speakerData.intro.replace(/\r\n/g, '<br/>');
    //speakerIntro.innerHTML = speakerIntro.innerHTML.replace(/\n/g, '');
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
    $$("backward").href = "/viewlist.html?id=" + vpData.theme[0].id;
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
    //儲存地區ID變量
    $$("regionId").value = vpData.theme[0].regionId;

    //分享區塊 QRCode
    $('#qrcode').qrcode({width: 440,height: 440,text: vpData.shortUrl});

    //廣告區塊 - 重播
    $$("replayTitle").innerHTML = vpData.subtitle;
    $$("replaySpeaker").innerHTML = vpData.speaker.name;
    var time = vpData.audio.length;
    $$("replayTime").innerHTML = (time / 60 > 9 ? parseInt(time / 60) : '0' + parseInt(time / 60)) + ':' + (time % 60 > 9 ? time % 60 : '0' + time % 60);

    //廣告區塊 - 下一段
    if(vpData.name == vpData.nextAudio.name){ //如果是同一景點下的其他副標題，則顯示副標題
        $$("nextAudioTitle").innerHTML = vpData.nextAudio.subtitle;
    } else { //如果不是同一景點，則顯示主標題
        $$("nextAudioTitle").innerHTML = vpData.nextAudio.name;
    }
    $$("nextAudioSpeaker").innerHTML = vpData.nextAudio.speakerName;
    time = vpData.nextAudio.audioLength;
    $$("nextAudioTime").innerHTML = (time / 60 > 9 ? parseInt(time / 60) : '0' + parseInt(time / 60)) + ':' + (time % 60 > 9 ? time % 60 : '0' + time % 60);
    $$("nextAudio").href = "/viewpoint.html?utm_source=InSite&utm_campaign=" + vpData.nextAudio.name + '_' + vpData.nextAudio.subtitle + '&id=' +vpData.nextAudio.id;


    //景點位置
    if (vpData.latLngPri == 1) {
        $$("vpLocation").href = "https://www.google.com.tw/maps/place/" + vpData.latitude + "," + vpData.longitude + "/@" + vpData.latitude + "," + vpData.longitude + ",19.5z";
    } else {
        $$("vpLocation").href = "https://www.google.com.tw/maps/place/" + vpData.address + "/@" + vpData.latitude + "," + vpData.longitude + ",19.5z";
    }
    //景點介紹內容
    var vpIntro = $$("vpIntro");
    vpIntro.innerHTML = vpData.intro.replace(/\n/g, '<br/>');
    //vpIntro.innerHTML = vpIntro.innerHTML.replace(/\n/g, '');
    if (vpIntro.offsetHeight <= 220) {
        $$("readAllCont").style.display = "none";
    } else if (vpIntro.offsetHeight >= 275) {
        vpIntro.style.height = "275px";
    }

    //還可以收聽區塊
    if (typeof vpData.moreAudio != "undefined") {
        $$("moreAudioTitle").innerHTML = vpData.name + "共有以下" + vpData.moreAudio.length + "段可以收聽：";
        var moreAudioDiv = $$("moreAudio");
        for (var i = 0; i < vpData.moreAudio.length; i++) {
            var vp = vpData.moreAudio[i];
            var subtitle = vp.subtitle;

            //if(subtitle.length > 13){subtitle = subtitle.substr(0,13); subtitle = subtitle + "..."}
            moreAudioDiv.innerHTML = moreAudioDiv.innerHTML +
                '<a href="viewpoint.html?utm_source=InSite&utm_campaign=' + vp.name + '_' + vp.subtitle + '&id=' + vp.id + '">' +
                '<div class="audio">' +
                '<div class="audio-name fl">' + subtitle + '</div>' +
                '<div class="fl" style="display: none;">...</div>' +
                '<div class="time fr">' + (vp.audioLength / 60 > 9 ? parseInt(vp.audioLength / 60) : '0' + parseInt(vp.audioLength / 60)) + ':' + (vp.audioLength % 60 > 9 ? vp.audioLength % 60 : '0' + vp.audioLength % 60) + '</div>' +
                '</div>' +
                '</a>';

        }
        for(var i = 0; i < $(".audio-name").length; i++) {
            var dom = $(".audio-name").get(i);
            if(dom.offsetWidth > 525) {
                dom.style.width = "500px";
                dom.nextSibling.style.display = "block";
            }
        }
    } else {
        $$("moreAudio").style.display = "none";
    }

    //週邊景點
    if (typeof vpData.neighView != "undefined") {
        var neighViewDiv = $$("neighView");
        neighView = vpData.neighView;
        for (var i = 0; i < neighView.length; i++) {
            /*var dom = '<a href="viewpoint.html?utm_source=InSite&amp;utm_campaign=' + vpData.neighView[i].name + '_' + vpData.neighView[i].subtitle + '' +
             '&id=' + vpData.neighView[i].id + '"><div class="view">' + vpData.neighView[i].name + '</div></a>';*/
            var dom = '<a class="view swiper-slide" href="viewpoint.html?utm_source=InSite&utm_campaign=' + neighView[i].name + '_' +
                neighView[i].subtitle + '&id=' + neighView[i].id + '">' +
                '<img src="/ResourceServlet?url=' +neighView[i].behalfPhotoUrl + '">' +
                '<div class="cover"></div>' +
                '<div class="title">' + neighView[i].name + '</div>' +
                '<img class="speaker-photo fl" src="/ResourceServlet?url=' + neighView[i].speakerPhotoUrl + '" alt="">' +
                '<div class="speaker-info fl">' +
                '<div class="speaker">' + neighView[i].speakerName + '</div>' +
                '<div class="time">' + (neighView[i].audioLength / 60 > 9 ? parseInt(neighView[i].audioLength / 60) : '0' + parseInt(neighView[i].audioLength / 60)) + '：' + (neighView[i].audioLength % 60 > 9 ? neighView[i].audioLength % 60 : '0' + neighView[i].audioLength % 60) + '</div>' +
                '</div>';

            //計算景點距離顯示文字
            var dt = neighView[i].distance;
            if(dt >= 0.995) {
                dom += '<div class="distance">距離' + dt.toFixed(1) + 'KM</div></a>';
            } else {
                dom += '<div class="distance">距離' + (dt.toFixed(2) * 1000) + 'M</div></a>';
            }
            neighViewDiv.innerHTML = neighViewDiv.innerHTML + dom;
        }

        //初始化週邊景點滾動欄
        neighSwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
        });

    }

    //Footer樣式
    $.get("footer.html",function(data){

        $("#footer").html(data);
        //更換Footer樣式
        var jinfeng = "03326ff3-cad4-42bc-a8aa-35fca64eb2ef,8daa252d-42e6-4535-a0b6-d794d7e5029d,e6862f47-a7a3-4b22-9647-763425705f0a,10c09cb8-355c-4db9-a852-fc3d20eca556,9de8cafd-203e-4f5e-8faf-aeda29264952,4652c369-be78-460d-90e3-e0e66267069f";
        if (jinfeng.indexOf(vpData.theme[0].id) != -1) { //如果是金峰鄉主題
            changeCss("jinfeng");
        }
    });
}


