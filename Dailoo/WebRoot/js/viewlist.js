/**
 * Created by Waiting on 2017/10/7.
 */
//獲取主題ID
var themeId = location.href.split("id=")[1];
//如果沒有主題ID，則跳轉到鹿野地區主題列表
if(typeof themeId == 'undefined'){location.href = "/themelist.html?id=e3cfc0f0-a9f5-439b-a534-efff46ced2ce"}

var themelist = $$("themelist");
var title = $$("title");

//依據主題ID，從伺服器中獲取該主題下的景點
getViewpointsDataFromServer(themeId);

//獲取主題列表並新增到導航欄中
getThemesToNav();

history.replaceState(null, null, location.href);

//獲取主題列表並新增到導航欄中
function getThemesToNav(){
    $.ajax({
        url: "/ThemeServlet", context: document.body,
        type: "POST",
        data: {"method": "getThemesByThemeId", "id": themeId},
        success: function (data) {
            var themes = eval("(" + data + ")");
            //console.dir(themes);
            for(var i = 0; i < themes.length; i++){
                var dom = '<div class="theme" onclick="getViewpointsDataFromServer(\''+ themes[i].id +'\',\'' + themes[i].name.split(",")[0] + '\', this);">' + themes[i].name.split(",")[0] + '</div>';
                themelist.innerHTML = themelist.innerHTML + dom;
                if(themes[i].id == themeId) {
                    title.innerHTML = themes[i].name.split(",")[0] + '<span id="drop" class="drop"></span>';
                    $$("backward").href = "/themelist.html?id=" + themes[i].regionId;
                    document.title = themes[i].name.split(",")[0] + "  帶路語音導覽";
                }
            }
            //增加返回按鈕
            themelist.innerHTML = themelist.innerHTML +  '<div class="reply" onclick="$$(\'drop\').style.display = \'inline-block\'; themelist.style.display = \'none\';"><img src="images/viewlist/reply.png"/></div>';
        },
        error: function(){
            setTimeout(getThemesToNav, 500);
        }
    });
}

//依據主題ID，從伺服器中獲取該主題下的景點
function getViewpointsDataFromServer(themeId, themeName, btn) {

    //更換標題文字
    if(themeName != null) title.innerHTML = themeName + '<span id="drop" class="drop"></span>';
    document.title =  themeName + "  帶路語音導覽";
    $.ajax({
        url: "/ViewpointServlet", context: btn,
        type: "POST",
        data: {"method": "getViewpointSimplesByThemeIdAndPublish", "themeId": themeId},
        success: function (data) {
            var vps = eval("(" + data + ")");
            //console.dir(vps);
            initDataFromServer(vps);
        },
    });
}

//將該主題的景點資料，新增到景點列表中
function initDataFromServer(vps){
    themelist.style.display = "none";
    $$("viewlist").innerHTML = "";
    for(var i = 0; i < vps.length; i++) {
        var dom = '<a class="view" href="viewpoint.html?utm_source=InSite&utm_campaign='+ vps[i].name + '_' + vps[i].subtitle + '&id=' + vps[i].id +'">' +
            '<img src="/ResourceServlet?url=' + vps[i].behalfPhotoUrl + '">' +
            '<div class="cover"></div>' +
            '<div class="title">' + vps[i].name + '</div>' +
            '<img class="speaker-photo fl" src="/ResourceServlet?url='+ vps[i].speakerPhotoUrl +'" alt="">' +
            '<div class="fl">' +
            '<div class="speaker">' + vps[i].speakerName + '</div>' +
            '<div class="time">' + (vps[i].audioLength / 60 > 9 ? parseInt(vps[i].audioLength / 60) : '0' + parseInt(vps[i].audioLength / 60)) + '：' + (vps[i].audioLength % 60 > 9 ? vps[i].audioLength % 60 : '0' + vps[i].audioLength % 60) + '</div>' +
            '</div>' +
            '</a>';

        $$("viewlist").innerHTML = $$("viewlist").innerHTML + dom;
    }
}

function switchDrop(){
    var drop = $$('drop');
    if(themelist.style.display == 'none') { //如果主題下拉選單未顯示
        //顯示下拉選單
        drop.style.display = 'none';
        themelist.style.display = 'block';

        //設定當前選中主題
        var themes = $(".theme");
        for(var i = 0; i < themes.length; i++) {
            themes[i].className = "theme";
            if(themes[i].innerText == title.innerText){
                themes[i].className = "theme select";
            }
        }
    } else {
        drop.style.display = 'inline-block';
        themelist.style.display = 'none';
    }
}


window.onload = function() {

    $.get("footer.html",function(data){
        $("#footer").html(data);
        //更換Footer樣式
        var jinfeng = "03326ff3-cad4-42bc-a8aa-35fca64eb2ef,8daa252d-42e6-4535-a0b6-d794d7e5029d,e6862f47-a7a3-4b22-9647-763425705f0a,10c09cb8-355c-4db9-a852-fc3d20eca556,9de8cafd-203e-4f5e-8faf-aeda29264952,4652c369-be78-460d-90e3-e0e66267069f";
        var chenggong = "f0cbc265-6abd-4519-a176-9296b7e032a1";
        if (jinfeng.indexOf(themeId) != -1) { //如果是金峰鄉主題
            changeCss("jinfeng");
        } else if(chenggong.indexOf(themeId) != -1){ //如果是成功鎮主題
            changeCss("none");
        }
    });
}
