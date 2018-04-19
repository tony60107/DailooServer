/**
 * Created by Waiting on 2017/10/7.
 */
//取得地區ID
var regionId = location.href.split("id=")[1];

//如果未提供地區ID，則跳轉到鹿野地區主題列表
if(regionId == undefined){location.href = "/themelist.html?id=e3cfc0f0-a9f5-439b-a534-efff46ced2ce"};


window.onload = function () {

    $.get("footer.html",function(data){
        $("#footer").html(data);
        if (regionId == "61ae4ab6-ed11-4131-85e2-9f2be7651e65") { //如果是金峰鄉地區
            changeCss("jinfeng");
        } else if(regionId == "fa179ec9-a754-45a2-8dc2-96b837594a6d"){ //如果是成功鎮''主題
            changeCss("none");
        } else if(regionId == "e031f31d-7f41-4380-b1fc-ed156a0bd96e"){ //如果是台東市主題
            changeCss("taitong");
        }
    });
}

//根據地區ID取得主題資料，並新增到主題列表中
getThemesData();

//取得地區名稱
getRegionData();

history.replaceState(null, null, location.href);

//根據地區ID取得主題資料，並新增到主題列表中
function getThemesData() {
    $.ajax({
        url: "/ThemeServlet", context: document.body,
        type: "POST",
        data: {"method": "getThemesByRegionId", "regionId": regionId},
        success: function (data) {
            var themes = eval("(" + data + ")");
            //console.dir(data);
            $$("themelist").innerHTML = "";
            for (var i = 0; i < themes.length; i++) {
                var title = themes[i].name.split(",");
                var dom = '<a href="viewlist.html?id=' + themes[i].id + '">' +
                    '<div class="theme">' +
                    '<div class="cover">' +
                    '<div class="main-title">' + title[0] + '</div>' +
                    '<div class="title-eng">' + (title[1] == undefined ? "" : title[1]) + '</div>' +
                    '</div>' +
                    '<img alt="" src="/ResourceServlet?url=' + themes[i].behalfPhotoUrl + '"/>' +
                    '</div>' +
                    '</a>';
                $$("themelist").innerHTML = $$("themelist").innerHTML + dom;
            }
        },
        error: function(){
            setTimeout(getThemesData, 500);
        }
    });
}

//取得地區名稱
function getRegionData() {
    $.ajax({
        url: "/RegionServlet", context: document.body,
        type: "POST",
        data: {"method": "getRegionById", "id": regionId},
        success: function (data) {
            var region = eval("(" + data + ")");
            $$("title").innerHTML = region.name + "行動語音導覽";
            document.title = region.name + " 帶路語音導覽";
        },
        error: function(){
            setTimeout(getRegionData, 500);
        }
    });
}