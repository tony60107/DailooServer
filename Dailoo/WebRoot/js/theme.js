/**
 * Created by Waiting on 2017/10/7.
 */
//獲取主題ID
var themeId = $('#themeId').val();

var themelist = $$("themelist");
var title = $$("title");

//增加返回按鈕
themelist.innerHTML = themelist.innerHTML +  '<div class="reply" onclick="$$(\'drop\').style.display = \'inline-block\'; themelist.style.display = \'none\';"><img src="images/viewlist/reply.png"/></div>';
history.replaceState(null, null, location.href);



//依據主題ID，從伺服器中獲取該主題下的景點
function getViewpointsDataFromServer(themeId, themeName, btn) {

    history.replaceState(null, null, "/theme/" + themeId);
    //更換標題文字
    if(themeName != null) title.innerHTML = themeName + '<span id="drop" class="drop"></span>';
    document.title =  themeName + "  - Dailoo帶路語音導覽服務";
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
        var dom = '<a class="view" href="/view/' + vps[i].name + '_' + vps[i].subtitle +'?utm_source=InSite&utm_campaign='+ vps[i].name + '_' + vps[i].subtitle +'">' +
            '<img src="/ResourceServlet?url=' + vps[i].behalfPhotoUrl + '">' +
            '<div class="cover"></div>' +
            '<div class="main-title">' + vps[i].name + '</div>' +
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
        var taitong = "4d0e9b6b-d077-46ba-b807-04ef0b8b6a10,af3bf83f-5995-401a-a58c-78a3fb119a3e,fcad3305-8b5a-4f4f-b508-bcbaf5a3d723,740d61bc-5ae8-48c8-8d33-07eddf8fa5f1"
        var chengkung = "37623549-9f15-46b4-b63a-7ebf20de0c09,eefdccd5-4ff7-4f1f-a51e-f7e98696ce99"

        themeId = location.pathname.split("/theme/")[1];

        if (jinfeng.indexOf(themeId) != -1) { //如果是金峰鄉主題
            changeCss("jinfeng");
        } else if(chenggong.indexOf(themeId) != -1){ //如果是成功鎮主題
            changeCss("none");
        } else if(taitong.indexOf(themeId) != -1){ //如果是台東市主題
            changeCss("taitong");
        } else if(chengkung.indexOf(themeId) != -1){ //如果是成功鎮主題
            changeCss("chengkung");
        } else if(themeId == "a897d838-1dfd-41ce-b6e0-b7b1487328cb") { //南迴線精選
            changeCss("jinfeng");
        }
    });
}
