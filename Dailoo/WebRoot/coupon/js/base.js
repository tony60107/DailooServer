/**
 * Created by Waiting on 2016/10/11.
 */

//自定義Alert
window.alert = function(msg, redirect) {
    //設定Alert方塊位置
    $('.pop-alert').css('margin-left', ((document.body.clientWidth - 720) / 2) + 'px');
    $('.pop-alert').css('top', ((document.body.clientHeight - 480) / 2) + 'px');
    //設置內容並顯示
    $('#popAlertMsg').html(msg);
    $('.pop-alert').css('display', 'block');
    $('.pop-mask').css('display', 'block');

    //如果有要求重定向
    if(redirect != undefined){
        setTimeout(function(){window.location.href= redirect;}, 1500);
    }
}

//激活下拉選單功能
function activeSelec(selec, optCallback) {
    var selecCont = $(selec).find(".cont").get(0); //下拉選單選中的內容
    var $popMenu = $(".pop-menu");    //彈出式菜單
    var $popMask = $(".pop-mask");    //彈出式遮罩
    var $data = $(selec).find(".opt-data");   //選項的所有資料
    var $opts = $data.find(".opt");         //所有選項的資料

    //設定菜單標題
    var dom = '<div class="title">' + $data.find(".title").get(0).innerHTML + '</div>';


    //將選項更新到下拉選單上
    for (var i = 0; i < $opts.length; i++) {
        //如果是選中的選項，則標示選中。且如果有設定data-value的值，也一併加上去，沒有則空白
        var dataValue = $opts.get(i).dataset.value;
        if ($opts.get(i).textContent == selecCont.innerHTML) {
            dom += '<div class="opt selected" data-value="' + (dataValue != undefined ? dataValue : '') + '">' + $opts.get(i).textContent + '</div>';
        } else {
            dom += '<div class="opt" data-value="' + (dataValue != undefined ? dataValue : '') + '">' + $opts.get(i).textContent + '</div>';
        }
    }
    $popMenu.html(dom);

    //設定Alert方塊位置
    $popMenu.css('margin-left', ((document.body.clientWidth - 880) / 2) + 'px');
    $popMenu.css('top', ((document.body.clientHeight - 1220) / 2) + 'px');

    //顯示彈出式菜單
    $popMask.css('display','block');
    $popMenu.css('display','block');

    $menuOpts = $(".pop-menu").find(".opt");    //彈出式菜單的選項

    for (var i = 0; i < $menuOpts.length; i++) {
        //菜單選項綁定點擊事件
        $($menuOpts.get(i)).bind('click', function () {
            //更改下拉選單內容
            selecCont.innerHTML = this.innerHTML;
            //如果是input則額外處理
            if($(selec).hasClass('input')) { $(selecCont).val(this.innerHTML)}

            //如果是縣市的下拉選單，更新鄉鎮下拉選單資料
            if(selecCont.id == 'city'){updateDist();}

            //如果是景點或地區的下拉選單，設定data-value值在點擊的下拉選單中
            if(selecCont.id == 'vpId' || selecCont.id == 'speakerId' || selecCont.id == 'vpSubtitle' || selecCont.id == 'subtitle' || $(selecCont).hasClass('region-cont') || $(selecCont).hasClass('theme-cont')){
                selecCont.dataset.value = this.dataset.value;
            }

            //呼叫回調函數
            if(optCallback != undefined) optCallback(selec);

            //關閉彈出式菜單
            $popMask.css('display','none');
            $popMenu.css('display','none');
        });
    }
}

//激活所有的下拉選單
function activeAllSelec(optCallback){
    $selecs = $(".selec");
    for (var i = 0; i < $selecs.length; i++) {
        selec = $selecs.get(i);
        $(selec).bind('click', function () {
            activeSelec(this, optCallback);
        });
    }

}

//點擊遮罩則關閉彈出式菜單
function initPopMenu() {
    $(".pop-mask").bind('click',function(e){
        //阻止冒泡，避免點擊到其他下拉選單
        window.event? window.event.returnValue = false : e.preventDefault();
        e.stopPropagation();
        //隱藏彈出物件
        $(".pop-mask").css('display', "none");
        $(".pop-menu").css('display', 'none');
        $(".pop-alert").css('display', 'none');
        $('.pop-func').css('display', 'none');
    });
}

//預覽上傳圖片
function previewUploadImg(event, id, callback){
    var input = event.target; //取得上傳檔案
    var reader = new FileReader(); //建立FileReader物件
    reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

    reader.onload = function(){ //FileReader取得上傳檔案後執行以下內容
        var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
        $('#' + id).attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
        //console.dir($('#' + id).get(0));
    };

    //呼叫回調函數
    if(callback != undefined) callback();
}

//初始化頭部與腳步
function initHeaderFooter(){
    $.get("header.html", function (data) {
        $("#header").html(data);
    });
    $.get("footer.html", function (data) {
        $("#footer").html(data);
    });
    //點選取消則返回上一頁
    $('.submit-btns>.submit-l').bind('click', function(){history.go(-1)})


    //桌機則將頁面比例調為50％
    if(window.screen.width > 980){$("body").css("zoom","50%");}
    $(window).resize(function() {if(window.screen.width > 980){$("body").css("zoom","50%");}});
}


/*地區下拉選單區塊開始*/
var taiwan = [
    {
        "city": "臺北市",
        "area": [
            {
                "-zip": "100",
                "district": "中正區"
            },
            {
                "-zip": "103",
                "district": "大同區"
            },
            {
                "-zip": "104",
                "district": "中山區"
            },
            {
                "-zip": "105",
                "district": "松山區"
            },
            {
                "-zip": "106",
                "district": "大安區"
            },
            {
                "-zip": "108",
                "district": "萬華區"
            },
            {
                "-zip": "110",
                "district": "信義區"
            },
            {
                "-zip": "111",
                "district": "士林區"
            },
            {
                "-zip": "112",
                "district": "北投區"
            },
            {
                "-zip": "114",
                "district": "內湖區"
            },
            {
                "-zip": "115",
                "district": "南港區"
            },
            {
                "-zip": "116",
                "district": "文山區"
            }
        ]
    },
    {
        "city": "新北市",
        "area": [
            {
                "-zip": "207",
                "district": "萬里區"
            },
            {
                "-zip": "208",
                "district": "金山區"
            },
            {
                "-zip": "220",
                "district": "板橋區"
            },
            {
                "-zip": "221",
                "district": "汐止區"
            },
            {
                "-zip": "222",
                "district": "深坑區"
            },
            {
                "-zip": "223",
                "district": "石碇區"
            },
            {
                "-zip": "224",
                "district": "瑞芳區"
            },
            {
                "-zip": "226",
                "district": "平溪區"
            },
            {
                "-zip": "227",
                "district": "雙溪區"
            },
            {
                "-zip": "228",
                "district": "貢寮區"
            },
            {
                "-zip": "231",
                "district": "新店區"
            },
            {
                "-zip": "232",
                "district": "坪林區"
            },
            {
                "-zip": "233",
                "district": "烏來區"
            },
            {
                "-zip": "234",
                "district": "永和區"
            },
            {
                "-zip": "235",
                "district": "中和區"
            },
            {
                "-zip": "236",
                "district": "土城區"
            },
            {
                "-zip": "237",
                "district": "三峽區"
            },
            {
                "-zip": "238",
                "district": "樹林區"
            },
            {
                "-zip": "239",
                "district": "鶯歌區"
            },
            {
                "-zip": "241",
                "district": "三重區"
            },
            {
                "-zip": "242",
                "district": "新莊區"
            },
            {
                "-zip": "243",
                "district": "泰山區"
            },
            {
                "-zip": "244",
                "district": "林口區"
            },
            {
                "-zip": "247",
                "district": "蘆洲區"
            },
            {
                "-zip": "248",
                "district": "五股區"
            },
            {
                "-zip": "249",
                "district": "八里區"
            },
            {
                "-zip": "251",
                "district": "淡水區"
            },
            {
                "-zip": "252",
                "district": "三芝區"
            }
        ]
    },
    {
        "city": "基隆市",
        "area": [
            {
                "-zip": "200",
                "district": "仁愛區"
            },
            {
                "-zip": "201",
                "district": "信義區"
            },
            {
                "-zip": "202",
                "district": "中正區"
            },
            {
                "-zip": "203",
                "district": "中山區"
            },
            {
                "-zip": "204",
                "district": "安樂區"
            },
            {
                "-zip": "205",
                "district": "暖暖區"
            },
            {
                "-zip": "206",
                "district": "七堵區"
            }
        ]
    },
    {
        "city": "宜蘭縣",
        "area": [
            {
                "-zip": "260",
                "district": "宜蘭市"
            },
            {
                "-zip": "261",
                "district": "頭城鎮"
            },
            {
                "-zip": "262",
                "district": "礁溪鄉"
            },
            {
                "-zip": "263",
                "district": "壯圍鄉"
            },
            {
                "-zip": "264",
                "district": "員山鄉"
            },
            {
                "-zip": "265",
                "district": "羅東鎮"
            },
            {
                "-zip": "266",
                "district": "三星鄉"
            },
            {
                "-zip": "267",
                "district": "大同鄉"
            },
            {
                "-zip": "268",
                "district": "五結鄉"
            },
            {
                "-zip": "269",
                "district": "冬山鄉"
            },
            {
                "-zip": "270",
                "district": "蘇澳鎮"
            },
            {
                "-zip": "272",
                "district": "南澳鄉"
            }
        ]
    },
    {
        "city": "新竹市",
        "area": [
            {
                "-zip": "300",
                "district": "東區"
            },
            {
                "-zip": "300",
                "district": "北區"
            },
            {
                "-zip": "300",
                "district": "香山區"
            }
        ]
    },
    {
        "city": "新竹縣",
        "area": [
            {
                "-zip": "302",
                "district": "竹北市"
            },
            {
                "-zip": "303",
                "district": "湖口鄉"
            },
            {
                "-zip": "304",
                "district": "新豐鄉"
            },
            {
                "-zip": "305",
                "district": "新埔鎮"
            },
            {
                "-zip": "306",
                "district": "關西鎮"
            },
            {
                "-zip": "307",
                "district": "芎林鄉"
            },
            {
                "-zip": "308",
                "district": "寶山鄉"
            },
            {
                "-zip": "310",
                "district": "竹東鎮"
            },
            {
                "-zip": "311",
                "district": "五峰鄉"
            },
            {
                "-zip": "312",
                "district": "橫山鄉"
            },
            {
                "-zip": "313",
                "district": "尖石鄉"
            },
            {
                "-zip": "314",
                "district": "北埔鄉"
            },
            {
                "-zip": "315",
                "district": "峨眉鄉"
            }
        ]
    },
    {
        "city": "桃園縣",
        "area": [
            {
                "-zip": "320",
                "district": "中壢市"
            },
            {
                "-zip": "324",
                "district": "平鎮市"
            },
            {
                "-zip": "325",
                "district": "龍潭鄉"
            },
            {
                "-zip": "326",
                "district": "楊梅鎮"
            },
            {
                "-zip": "327",
                "district": "新屋鄉"
            },
            {
                "-zip": "328",
                "district": "觀音鄉"
            },
            {
                "-zip": "330",
                "district": "桃園市"
            },
            {
                "-zip": "333",
                "district": "龜山鄉"
            },
            {
                "-zip": "334",
                "district": "八德市"
            },
            {
                "-zip": "335",
                "district": "大溪鎮"
            },
            {
                "-zip": "336",
                "district": "復興鄉"
            },
            {
                "-zip": "337",
                "district": "大園鄉"
            },
            {
                "-zip": "338",
                "district": "蘆竹鄉"
            }
        ]
    },
    {
        "city": "苗栗縣",
        "area": [
            {
                "-zip": "350",
                "district": "竹南鎮"
            },
            {
                "-zip": "351",
                "district": "頭份鎮"
            },
            {
                "-zip": "352",
                "district": "三灣鄉"
            },
            {
                "-zip": "353",
                "district": "南莊鄉"
            },
            {
                "-zip": "354",
                "district": "獅潭鄉"
            },
            {
                "-zip": "356",
                "district": "後龍鎮"
            },
            {
                "-zip": "357",
                "district": "通霄鎮"
            },
            {
                "-zip": "358",
                "district": "苑裡鎮"
            },
            {
                "-zip": "360",
                "district": "苗栗市"
            },
            {
                "-zip": "361",
                "district": "造橋鄉"
            },
            {
                "-zip": "362",
                "district": "頭屋鄉"
            },
            {
                "-zip": "363",
                "district": "公館鄉"
            },
            {
                "-zip": "364",
                "district": "大湖鄉"
            },
            {
                "-zip": "365",
                "district": "泰安鄉"
            },
            {
                "-zip": "366",
                "district": "銅鑼鄉"
            },
            {
                "-zip": "367",
                "district": "三義鄉"
            },
            {
                "-zip": "368",
                "district": "西湖鄉"
            },
            {
                "-zip": "369",
                "district": "卓蘭鎮"
            }
        ]
    },
    {
        "city": "臺中市",
        "area": [
            {
                "-zip": "400",
                "district": "中區"
            },
            {
                "-zip": "401",
                "district": "東區"
            },
            {
                "-zip": "402",
                "district": "南區"
            },
            {
                "-zip": "403",
                "district": "西區"
            },
            {
                "-zip": "404",
                "district": "北區"
            },
            {
                "-zip": "406",
                "district": "北屯區"
            },
            {
                "-zip": "407",
                "district": "西屯區"
            },
            {
                "-zip": "408",
                "district": "南屯區"
            },
            {
                "-zip": "411",
                "district": "太平區"
            },
            {
                "-zip": "412",
                "district": "大裡區"
            },
            {
                "-zip": "413",
                "district": "霧峰區"
            },
            {
                "-zip": "414",
                "district": "烏日區"
            },
            {
                "-zip": "420",
                "district": "豐原區"
            },
            {
                "-zip": "421",
                "district": "後裡區"
            },
            {
                "-zip": "422",
                "district": "石岡區"
            },
            {
                "-zip": "423",
                "district": "東勢區"
            },
            {
                "-zip": "424",
                "district": "和平區"
            },
            {
                "-zip": "426",
                "district": "新社區"
            },
            {
                "-zip": "427",
                "district": "潭子區"
            },
            {
                "-zip": "428",
                "district": "大雅區"
            },
            {
                "-zip": "429",
                "district": "神岡區"
            },
            {
                "-zip": "432",
                "district": "大肚區"
            },
            {
                "-zip": "433",
                "district": "沙鹿區"
            },
            {
                "-zip": "434",
                "district": "龍井區"
            },
            {
                "-zip": "435",
                "district": "梧棲區"
            },
            {
                "-zip": "436",
                "district": "清水區"
            },
            {
                "-zip": "437",
                "district": "大甲區"
            },
            {
                "-zip": "438",
                "district": "外埔區"
            },
            {
                "-zip": "439",
                "district": "大安區"
            }
        ]
    },
    {
        "city": "彰化縣",
        "area": [
            {
                "-zip": "500",
                "district": "彰化市"
            },
            {
                "-zip": "502",
                "district": "芬園鄉"
            },
            {
                "-zip": "503",
                "district": "花壇鄉"
            },
            {
                "-zip": "504",
                "district": "秀水鄉"
            },
            {
                "-zip": "505",
                "district": "鹿港鎮"
            },
            {
                "-zip": "506",
                "district": "福興鄉"
            },
            {
                "-zip": "507",
                "district": "線西鄉"
            },
            {
                "-zip": "508",
                "district": "和美鎮"
            },
            {
                "-zip": "509",
                "district": "伸港鄉"
            },
            {
                "-zip": "510",
                "district": "員林鎮"
            },
            {
                "-zip": "511",
                "district": "社頭鄉"
            },
            {
                "-zip": "512",
                "district": "永靖鄉"
            },
            {
                "-zip": "513",
                "district": "埔心鄉"
            },
            {
                "-zip": "514",
                "district": "溪湖鎮"
            },
            {
                "-zip": "515",
                "district": "大村鄉"
            },
            {
                "-zip": "516",
                "district": "埔鹽鄉"
            },
            {
                "-zip": "520",
                "district": "田中鎮"
            },
            {
                "-zip": "521",
                "district": "北斗鎮"
            },
            {
                "-zip": "522",
                "district": "田尾鄉"
            },
            {
                "-zip": "523",
                "district": "埤頭鄉"
            },
            {
                "-zip": "524",
                "district": "溪州鄉"
            },
            {
                "-zip": "525",
                "district": "竹塘鄉"
            },
            {
                "-zip": "526",
                "district": "二林鎮"
            },
            {
                "-zip": "527",
                "district": "大城鄉"
            },
            {
                "-zip": "528",
                "district": "芳苑鄉"
            },
            {
                "-zip": "530",
                "district": "二水鄉"
            }
        ]
    },
    {
        "city": "南投縣",
        "area": [
            {
                "-zip": "540",
                "district": "南投市"
            },
            {
                "-zip": "541",
                "district": "中寮鄉"
            },
            {
                "-zip": "542",
                "district": "草屯鎮"
            },
            {
                "-zip": "544",
                "district": "國姓鄉"
            },
            {
                "-zip": "545",
                "district": "埔里鎮"
            },
            {
                "-zip": "546",
                "district": "仁愛鄉"
            },
            {
                "-zip": "551",
                "district": "名間鄉"
            },
            {
                "-zip": "552",
                "district": "集集鎮"
            },
            {
                "-zip": "553",
                "district": "水裡鄉"
            },
            {
                "-zip": "555",
                "district": "魚池鄉"
            },
            {
                "-zip": "556",
                "district": "信義鄉"
            },
            {
                "-zip": "557",
                "district": "竹山鎮"
            },
            {
                "-zip": "558",
                "district": "鹿谷鄉"
            }
        ]
    },
    {
        "city": "嘉義市",
        "area": [
            {
                "-zip": "600",
                "district": "東區"
            },
            {
                "-zip": "600",
                "district": "西區"
            }
        ]
    },
    {
        "city": "嘉義縣",
        "area": [
            {
                "-zip": "602",
                "district": "番路鄉"
            },
            {
                "-zip": "603",
                "district": "梅山鄉"
            },
            {
                "-zip": "604",
                "district": "竹崎鄉"
            },
            {
                "-zip": "605",
                "district": "阿里山"
            },
            {
                "-zip": "606",
                "district": "中埔鄉"
            },
            {
                "-zip": "607",
                "district": "大埔鄉"
            },
            {
                "-zip": "608",
                "district": "水上鄉"
            },
            {
                "-zip": "611",
                "district": "鹿草鄉"
            },
            {
                "-zip": "612",
                "district": "太保市"
            },
            {
                "-zip": "613",
                "district": "朴子市"
            },
            {
                "-zip": "614",
                "district": "東石鄉"
            },
            {
                "-zip": "615",
                "district": "六腳鄉"
            },
            {
                "-zip": "616",
                "district": "新港鄉"
            },
            {
                "-zip": "621",
                "district": "民雄鄉"
            },
            {
                "-zip": "622",
                "district": "大林鎮"
            },
            {
                "-zip": "623",
                "district": "溪口鄉"
            },
            {
                "-zip": "624",
                "district": "義竹鄉"
            },
            {
                "-zip": "625",
                "district": "布袋鎮"
            }
        ]
    },
    {
        "city": "雲林縣",
        "area": [
            {
                "-zip": "630",
                "district": "斗南鎮"
            },
            {
                "-zip": "631",
                "district": "大埤鄉"
            },
            {
                "-zip": "632",
                "district": "虎尾鎮"
            },
            {
                "-zip": "633",
                "district": "土庫鎮"
            },
            {
                "-zip": "634",
                "district": "褒忠鄉"
            },
            {
                "-zip": "635",
                "district": "東勢鄉"
            },
            {
                "-zip": "636",
                "district": "台西鄉"
            },
            {
                "-zip": "637",
                "district": "崙背鄉"
            },
            {
                "-zip": "638",
                "district": "麥寮鄉"
            },
            {
                "-zip": "640",
                "district": "斗六市"
            },
            {
                "-zip": "643",
                "district": "林內鄉"
            },
            {
                "-zip": "646",
                "district": "古坑鄉"
            },
            {
                "-zip": "647",
                "district": "莿桐鄉"
            },
            {
                "-zip": "648",
                "district": "西螺鎮"
            },
            {
                "-zip": "649",
                "district": "二崙鄉"
            },
            {
                "-zip": "651",
                "district": "北港鎮"
            },
            {
                "-zip": "652",
                "district": "水林鄉"
            },
            {
                "-zip": "653",
                "district": "口湖鄉"
            },
            {
                "-zip": "654",
                "district": "四湖鄉"
            },
            {
                "-zip": "655",
                "district": "元長鄉"
            }
        ]
    },
    {
        "city": "臺南市",
        "area": [
            {
                "-zip": "700",
                "district": "中西區"
            },
            {
                "-zip": "701",
                "district": "東區"
            },
            {
                "-zip": "702",
                "district": "南區"
            },
            {
                "-zip": "704",
                "district": "北區"
            },
            {
                "-zip": "708",
                "district": "安平區"
            },
            {
                "-zip": "709",
                "district": "安南區"
            },
            {
                "-zip": "710",
                "district": "永康區"
            },
            {
                "-zip": "711",
                "district": "歸仁區"
            },
            {
                "-zip": "712",
                "district": "新化區"
            },
            {
                "-zip": "713",
                "district": "左鎮區"
            },
            {
                "-zip": "714",
                "district": "玉井區"
            },
            {
                "-zip": "715",
                "district": "楠西區"
            },
            {
                "-zip": "716",
                "district": "南化區"
            },
            {
                "-zip": "717",
                "district": "仁德區"
            },
            {
                "-zip": "718",
                "district": "關廟區"
            },
            {
                "-zip": "719",
                "district": "龍崎區"
            },
            {
                "-zip": "720",
                "district": "官田區"
            },
            {
                "-zip": "721",
                "district": "麻豆區"
            },
            {
                "-zip": "722",
                "district": "佳里區"
            },
            {
                "-zip": "723",
                "district": "西港區"
            },
            {
                "-zip": "724",
                "district": "七股區"
            },
            {
                "-zip": "725",
                "district": "將軍區"
            },
            {
                "-zip": "726",
                "district": "學甲區"
            },
            {
                "-zip": "727",
                "district": "北門區"
            },
            {
                "-zip": "730",
                "district": "新營區"
            },
            {
                "-zip": "731",
                "district": "後壁區"
            },
            {
                "-zip": "732",
                "district": "白河區"
            },
            {
                "-zip": "733",
                "district": "東山區"
            },
            {
                "-zip": "734",
                "district": "六甲區"
            },
            {
                "-zip": "735",
                "district": "下營區"
            },
            {
                "-zip": "736",
                "district": "柳營區"
            },
            {
                "-zip": "737",
                "district": "鹽水區"
            },
            {
                "-zip": "741",
                "district": "善化區"
            },
            {
                "-zip": "742",
                "district": "大內區"
            },
            {
                "-zip": "743",
                "district": "山上區"
            },
            {
                "-zip": "744",
                "district": "新市區"
            },
            {
                "-zip": "745",
                "district": "安定區"
            }
        ]
    },
    {
        "city": "高雄市",
        "area": [
            {
                "-zip": "800",
                "district": "新興區"
            },
            {
                "-zip": "801",
                "district": "前金區"
            },
            {
                "-zip": "802",
                "district": "苓雅區"
            },
            {
                "-zip": "803",
                "district": "鹽埕區"
            },
            {
                "-zip": "804",
                "district": "鼓山區"
            },
            {
                "-zip": "805",
                "district": "旗津區"
            },
            {
                "-zip": "806",
                "district": "前鎮區"
            },
            {
                "-zip": "807",
                "district": "三民區"
            },
            {
                "-zip": "811",
                "district": "楠梓區"
            },
            {
                "-zip": "812",
                "district": "小港區"
            },
            {
                "-zip": "813",
                "district": "左營區"
            },
            {
                "-zip": "814",
                "district": "仁武區"
            },
            {
                "-zip": "815",
                "district": "大社區"
            },
            {
                "-zip": "820",
                "district": "岡山區"
            },
            {
                "-zip": "821",
                "district": "路竹區"
            },
            {
                "-zip": "822",
                "district": "阿蓮區"
            },
            {
                "-zip": "823",
                "district": "田寮區"
            },
            {
                "-zip": "824",
                "district": "燕巢區"
            },
            {
                "-zip": "825",
                "district": "橋頭區"
            },
            {
                "-zip": "826",
                "district": "梓官區"
            },
            {
                "-zip": "827",
                "district": "彌陀區"
            },
            {
                "-zip": "828",
                "district": "永安區"
            },
            {
                "-zip": "829",
                "district": "湖內區"
            },
            {
                "-zip": "830",
                "district": "鳳山區"
            },
            {
                "-zip": "831",
                "district": "大寮區"
            },
            {
                "-zip": "832",
                "district": "林園區"
            },
            {
                "-zip": "833",
                "district": "鳥松區"
            },
            {
                "-zip": "840",
                "district": "大樹區"
            },
            {
                "-zip": "842",
                "district": "旗山區"
            },
            {
                "-zip": "843",
                "district": "美濃區"
            },
            {
                "-zip": "844",
                "district": "六龜區"
            },
            {
                "-zip": "845",
                "district": "內門區"
            },
            {
                "-zip": "846",
                "district": "杉林區"
            },
            {
                "-zip": "847",
                "district": "甲仙區"
            },
            {
                "-zip": "848",
                "district": "桃源區"
            },
            {
                "-zip": "849",
                "district": "三民區"
            },
            {
                "-zip": "851",
                "district": "茂林區"
            },
            {
                "-zip": "852",
                "district": "茄萣區"
            }
        ]
    },
    {
        "city": "澎湖縣",
        "area": [
            {
                "-zip": "880",
                "district": "馬公市"
            },
            {
                "-zip": "881",
                "district": "西嶼鄉"
            },
            {
                "-zip": "882",
                "district": "望安鄉"
            },
            {
                "-zip": "883",
                "district": "七美鄉"
            },
            {
                "-zip": "884",
                "district": "白沙鄉"
            },
            {
                "-zip": "885",
                "district": "湖西鄉"
            }
        ]
    },
    {
        "-zip": "T",
        "city": "屏東縣",
        "area": [
            {
                "-zip": "900",
                "district": "屏東市"
            },
            {
                "-zip": "901",
                "district": "三地門"
            },
            {
                "-zip": "902",
                "district": "霧台鄉"
            },
            {
                "-zip": "903",
                "district": "瑪家鄉"
            },
            {
                "-zip": "904",
                "district": "九如鄉"
            },
            {
                "-zip": "905",
                "district": "裡港鄉"
            },
            {
                "-zip": "906",
                "district": "高樹鄉"
            },
            {
                "-zip": "907",
                "district": "鹽埔鄉"
            },
            {
                "-zip": "908",
                "district": "長治鄉"
            },
            {
                "-zip": "909",
                "district": "麟洛鄉"
            },
            {
                "-zip": "911",
                "district": "竹田鄉"
            },
            {
                "-zip": "912",
                "district": "內埔鄉"
            },
            {
                "-zip": "913",
                "district": "萬丹鄉"
            },
            {
                "-zip": "920",
                "district": "潮州鎮"
            },
            {
                "-zip": "921",
                "district": "泰武鄉"
            },
            {
                "-zip": "922",
                "district": "來義鄉"
            },
            {
                "-zip": "923",
                "district": "萬巒鄉"
            },
            {
                "-zip": "924",
                "district": "崁頂鄉"
            },
            {
                "-zip": "925",
                "district": "新埤鄉"
            },
            {
                "-zip": "926",
                "district": "南州鄉"
            },
            {
                "-zip": "927",
                "district": "林邊鄉"
            },
            {
                "-zip": "928",
                "district": "東港鎮"
            },
            {
                "-zip": "929",
                "district": "琉球鄉"
            },
            {
                "-zip": "931",
                "district": "佳冬鄉"
            },
            {
                "-zip": "932",
                "district": "新園鄉"
            },
            {
                "-zip": "940",
                "district": "枋寮鄉"
            },
            {
                "-zip": "941",
                "district": "枋山鄉"
            },
            {
                "-zip": "942",
                "district": "春日鄉"
            },
            {
                "-zip": "943",
                "district": "獅子鄉"
            },
            {
                "-zip": "944",
                "district": "車城鄉"
            },
            {
                "-zip": "945",
                "district": "牡丹鄉"
            },
            {
                "-zip": "946",
                "district": "恆春鎮"
            },
            {
                "-zip": "947",
                "district": "滿州鄉"
            }
        ]
    },
    {
        "city": "臺東縣",
        "area": [
            {
                "-zip": "950",
                "district": "台東市"
            },
            {
                "-zip": "951",
                "district": "綠島鄉"
            },
            {
                "-zip": "952",
                "district": "蘭嶼鄉"
            },
            {
                "-zip": "953",
                "district": "延平鄉"
            },
            {
                "-zip": "954",
                "district": "卑南鄉"
            },
            {
                "-zip": "955",
                "district": "鹿野鄉"
            },
            {
                "-zip": "956",
                "district": "關山鎮"
            },
            {
                "-zip": "957",
                "district": "海端鄉"
            },
            {
                "-zip": "958",
                "district": "池上鄉"
            },
            {
                "-zip": "959",
                "district": "東河鄉"
            },
            {
                "-zip": "961",
                "district": "成功鎮"
            },
            {
                "-zip": "962",
                "district": "長濱鄉"
            },
            {
                "-zip": "963",
                "district": "太麻裡"
            },
            {
                "-zip": "964",
                "district": "金峰鄉"
            },
            {
                "-zip": "965",
                "district": "大武鄉"
            },
            {
                "-zip": "966",
                "district": "達仁鄉"
            }
        ]
    },
    {
        "city": "花蓮縣",
        "area": [
            {
                "-zip": "970",
                "district": "花蓮市"
            },
            {
                "-zip": "971",
                "district": "新城鄉"
            },
            {
                "-zip": "972",
                "district": "秀林鄉"
            },
            {
                "-zip": "973",
                "district": "吉安鄉"
            },
            {
                "-zip": "974",
                "district": "壽豐鄉"
            },
            {
                "-zip": "975",
                "district": "鳳林鎮"
            },
            {
                "-zip": "976",
                "district": "光復鄉"
            },
            {
                "-zip": "977",
                "district": "豐濱鄉"
            },
            {
                "-zip": "978",
                "district": "瑞穗鄉"
            },
            {
                "-zip": "979",
                "district": "萬榮鄉"
            },
            {
                "-zip": "981",
                "district": "玉裡鎮"
            },
            {
                "-zip": "982",
                "district": "卓溪鄉"
            },
            {
                "-zip": "983",
                "district": "富裡鄉"
            }
        ]
    },
    {
        "city": "金門縣",
        "area": [
            {
                "-zip": "890",
                "district": "金沙鎮"
            },
            {
                "-zip": "891",
                "district": "金湖鎮"
            },
            {
                "-zip": "892",
                "district": "金寧鄉"
            },
            {
                "-zip": "893",
                "district": "金城鎮"
            },
            {
                "-zip": "894",
                "district": "烈嶼鄉"
            },
            {
                "-zip": "896",
                "district": "烏坵鄉"
            }
        ]
    }
]; //台灣行政區Json資料
//初始化縣市下拉選單
function initCitySelec(){

    var cityList = $('#cityList').get(0); //縣市下拉選單
    for(var i = 0; i < taiwan.length; i++){
        cityList.innerHTML += '<div class="opt">' + taiwan[i].city + '</div>'
    }
}

//更新鄉鎮下拉選單資料
function updateDist(){
    var distList = $('#distList').get(0);  //鄉鎮下拉選單
    for(var i = 0; i < taiwan.length; i++) {
        //如果找到與選中縣市相同的縣市
        if(taiwan[i].city == $("#city").get(0).innerHTML){
            //鄉鎮列表初始化
            $('#dist').get(0).innerHTML = "請選擇";
            distList.innerHTML = "";
            distList.innerHTML = '<div class="title">切換至其他鄉鎮</div>';
            //將鄉鎮資料填入鄉鎮列表中
            for(var j = 0; j < taiwan[i].area.length; j++) {
                //console.dir(taiwan[i].area[j].district)
                distList.innerHTML += '<div class="opt">' + taiwan[i].area[j].district + '</div>';
            }
        }
    }
}

function delTheme(selec, event) {
    $(selec.parentNode.nextSibling).remove();
    $(selec.parentNode).remove();

    //阻止冒泡
    window.event?window.event.cancelBubble=true:event.stopPropagation();
}
/*地區下拉選單區塊結束*/



/*向伺服器取得資料區塊開始*/
//取得所有的講者
function getAllSpeakers(callback){
    $.ajax({
        url: "/SpeakerServlet", context: document.body,
        type: "POST",
        data: {"method": "findAllSpeakers"},
        success: function (speakers) {
            var speakerList = $("#speakerList").get(0);
            var speakers = eval("(" + speakers + ")");
            //console.dir(speakers);

            //將資料加到下拉選擇框
            var dom = '';
            for (var i = 0; i < speakers.length; i++) {
                dom += '<div class="opt" data-value="' + speakers[i].id + '">' + (speakers[i].name == '' ? '未設定該講者姓名' : speakers[i].name) + '</div>';
            }
            speakerList.innerHTML += dom;

            //呼叫回調函數
            if(callback != undefined) callback();
        },
        error: function(){
            setTimeout(function(){getAllSpeakers(callback);}, 1000);
        }
    });
}

//取得登入帳號旗下的所有景點
function getViewpointsByLoginUser(callback){
    var vpList = $('#vpList').get(0);
    $.ajax({
        url: "/ViewpointServlet", context: document.body,
        type: "POST",
        data: {"method": "getViewpointsByLoginUser"},
        success: function (data) {
            var vps = eval("(" + data + ")");

            //將資料加到下拉選擇框
            var dom = '';
            for(var i = 0; i < vps.length; i++) {
                dom +=  "<div class='opt' data-value='" + vps[i].id +"'>" + vps[i].name + "-" + vps[i].subtitle + "</div>";
            }
            vpList.innerHTML += dom;

            if(callback != undefined) callback();
        },
        error: function(){
            setTimeout(function(){getViewpointsByLoginUser(callback);}, 1000);
        }
    });
}

//取得所有的地區
function getAllRegions(callback) {
    var regions;
    $.ajax({
        url: "/RegionServlet", context: document.body,
        type: "POST",
        async:false,
        data: {"method": "getAllRegions"},
        success: function (data) {
            regions = eval("(" + data + ")");
            //console.dir(regions);

            //呼叫回調函數
            if(callback != undefined) callback();
        },
        error: function(){
            setTimeout(function(){getAllRegions(callback);}, 1000);
        }
    });
    return regions;
}

//填滿頁面中所有的地區列表（param:地區資料）
function fillAllRegionList(regions) {
    dom = '<div class="title">切換至其他主題類別</div>';
    for(var i = 0; i < regions.length; i++) {
        dom +=  "<div class='opt' data-value='" + regions[i].id +"'>" + regions[i].name + "</div>";
    }
    $('.region-list').html(dom);
}

//根據地區ID，取得該地區下的主題
function getThemesByRegionId(regionId, callback) {
    var themes;
    $.ajax({
        url: "/ThemeServlet", context: document.body,
        type: "POST",
        async:false,
        data: {"method": "getThemesByRegionId", "regionId": regionId},
        success: function (data) {

            themes = eval("(" + data + ")");
            //console.dir(themes);

            //呼叫回調函數
            if(callback != undefined) callback();
        },
        error: function(){
            setTimeout(function(){getThemesByRegionId(callback);}, 1000);
        }
    });
    return themes;
}

//換成短網址
function toShortUrl(url) {
    var shortUrl = "";
    $.ajax({
        url: "/ShortUrlServlet", context: document.body,
        type: "POST",
        data: {"method": "addShortUrl", "url": url},
        async: false,//同步
        success: function (data) {
            shortUrl =  "https://dailoo.com/" + data;
        },
        error: function(){
            setTimeout(function(){toShortUrl(url);}, 1000);
        }
    });
    return shortUrl;
}
/*向伺服器取得資料區塊結束*/

//複製到剪貼簿
function copy(s) {
    $('body').append('<textarea id="clip_area"></textarea>');

    var clip_area = $('#clip_area');

    clip_area.text(s);
    clip_area.select();

    document.execCommand('copy');

    clip_area.remove();
}

//左邊補齊全位數 Ex: 1 -> 0001, bits:長度（4）， 要填充的字元（0），要填充的數字（1）
function leftCompleting(bits, identifier, value) {
    value = Array(bits + 1).join(identifier) + value;
    return value.slice(-bits);
}

//確認圖片上傳格式
function checkImgFormat($input){
    var imgFormat = /\.(jpg|JPG|jpeg|JPEG|bmp|BMP|gif|GIF|png|PNG)$/i;
    if (imgFormat.test($input.val()) != true && $input.val() != '') {alert("照片檔案格式不正確");return false;}
    return true;
}

//初始化Google地圖
var map;
function initMap() {

    var markers = [];
    var initLocation = {lat: 22.925489, lng: 121.125867515};
    var form = $('#mainForm');
    var ipLat = form.find('input[name="latitude"]');
    var ipLng = form.find('input[name="longitude"]');

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: initLocation,
    });
    map.addListener('click', function (event) {
        addMarker(event.latLng);
    });

    //編輯景點時，設定Google Map 初始標記位置
    setTimeout(function(){
        map.setCenter({'lat': parseFloat(ipLat.val()), 'lng': parseFloat(ipLng.val())});
        addMarker({'lat': parseFloat(ipLat.val()), 'lng': parseFloat(ipLng.val())});
    }, 1500);



    //地圖上新增標記
    function addMarker(location) {
        deleteMarkers();
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        markers.push(marker);

        //將經緯度填入表單中
        if(!isNaN(location.lat))ipLat.val(location.lat);
        if(!isNaN(location.lng))ipLng.val(location.lng);
    }

    //地圖上刪除所有的標記
    function deleteMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    //地址欄失去焦點時，更新地圖中心點
    $('#address').bind('blur', function () {

        var url = "https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + $('#address').val() + "&key=AIzaSyCJIjW2-z9cgnh9rkciGazL7h3odXo44SI";
        $.ajax({
            url: url, context: document.body,
            type: "POST",
            success: function (data) {
                //console.dir(data);
                //如果獲取經緯度失敗，則0.5秒後再次查詢
                if(data.status != "OK"){ setTimeout(function(){$('#address').blur();}, 500); }
                //如果有正確查到經緯度
                if(data.results[0] != undefined) {
                    var loc = data.results[0].geometry.location;
                    //設定地圖中心點
                    map.setCenter(loc);
                    //設定地圖標記
                    deleteMarkers();
                    var marker = new google.maps.Marker({
                        position: loc,
                        map: map
                    });
                    markers.push(marker);
                    //設定經緯度欄位
                    if (loc.lat != 0 || loc.lng != 0) {
                        ipLat.val(loc.lat);
                        ipLng.val(loc.lng);
                    }
                }
            },
        });
    });
}


