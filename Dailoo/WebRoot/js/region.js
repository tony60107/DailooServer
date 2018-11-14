/**
 * Created by Waiting on 2017/10/7.
 */
//取得地區ID
var regionId = $('#regionId').val();

window.onload = function () {

    $.get("footer.html",function(data){
        $("#footer").html(data);
        $.ajax({
            url: "/ThemeServlet", context: document.body,
            type: "POST",
            data: {"method": "getThemesByRegionId", "regionId": regionId},
            success: function (data) {
                var themes = eval("(" + data + ")");
                setMapUrls(themes[0].id);
            },
        });
       /* if (regionId == "61ae4ab6-ed11-4131-85e2-9f2be7651e65") { //如果是金峰鄉地區
            changeCss("jinfeng");
        } else if(regionId == "fa179ec9-a754-45a2-8dc2-96b837594a6d"){ //如果是台東觀光地區
            changeCss("chengkung");
        } else if(regionId == "e031f31d-7f41-4380-b1fc-ed156a0bd96e"){ //如果是台東市地區
            changeCss("taitong");
        } else if(regionId == "0371ba44-8bf4-4135-9ac2-c7aea7717ed5"){ //如果是安平區地區
            changeCss("anping");
        } else if(regionId == "16a0bff7-7238-4f48-b873-71e9dcee4ff0"){ //如果是台東縣地區
            changeCss("taitongcounty");
        } else if(regionId == "2390ab9b-508e-4838-a57d-e4c34079c0a8"){ //如果是關山鎮地區
            changeCss("guanshan");
        }*/
    });
}

history.replaceState(null, null, location.href);

