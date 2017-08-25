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
    initDataFromServer(serverData);

}

function initData() {
    //取得網頁參數
    var strUrl = location.search;
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

    param = decodeURI(aryPara['utm_campaign']);

    if (param == "春一枝鹿野76誠信商店_名稱由來") {
        serverData = {
            "name": "春一枝鹿野76誠信商店",
            "subtitle": "名稱由來",
            "location": "https://goo.gl/maps/uFRirj8rG1S2",
            "intro": "春一枝鹿野76位於台東縣鹿野鄉永安村上的鹿野高台，一個兩層樓的休憩平台，一樓為樹林與草坪、洗手台、男女廁所；二樓為涼風平台與春一枝商品展示處，這個開放空間由春一枝提供，每日自白天到天黑全面開放，民眾可自由入內參觀休憩，想吃冰棒與茶水則自行投幣與煮沸，並有小型救護箱，整日無干擾招呼，提供旅者一個安靜自在的空間。內並有彈珠台供戲玩。自平台望出，迎面為中央山脈，由後方眺去則為台東都蘭山，俗稱美人山，高台旁則有小綠纜仁，春夏秋冬四季顯色。晨有雲霧嬝繞，午有清風吹拂，其地之景色，優雅豐美，無論天雨抑或朗朗天光，皆適合遊走散步。",
            "speaker": {
                "name": "李承澤",
                "photo": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0001_icon  高台 李承澤x300p.jpg",
                "resume": ["負責人", "廠長"],
                "intro": "嗨 大家好，我是春一枝商行的負責人，我叫李承澤，大家來到高台看到我可以叫我廠長，我們這邊有非常棒的地方，一間冰棒故事館，可以在裡面休息乘涼，也有很好的風景，往東邊看就是都蘭山，樓下也有很乾淨的洗手間大家可以使用。這邊最重要的是有好吃的冰棒，我們用純粹的水果、水、跟砂糖下去做的。為什麼這邊的冰棒這麼的好吃呢？因為我們有三個重點原則：我們秉持良心、用心做、希望大家吃了都開心！歡迎大家來到春一枝鹿野76這邊乘涼，也希望能支持台灣的農業，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/Oogid3HaNPg",
                "homeNumber": "089 552 295",
                "phoneNumber": "09 7817 8553",
                "FBUrl": "http://www.fruit-ice.com.tw"
            },
            "audio": {
                "src": "audio/A高台散步/GT0001高台 李承澤 2017-07-05 春一枝/GT0001高台 李承澤 2017-07-05 14-30 春一枝1名稱由來.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0001名稱由來/GT0001_0000_.jpg"
                    }, {
                        "time": 13,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0001名稱由來/GT0001_0013_.jpg"
                    }, {
                        "time": 41,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0001名稱由來/GT0001_0041_.jpg"
                    },
                ],
            },
            "moreAudio": ["創辦緣由", "理念故事", "設施環境"],
            "neighView": [
                {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "春一枝鹿野76誠信商店_創辦緣由") {
        serverData = {
            "name": "春一枝鹿野76誠信商店",
            "subtitle": "創辦緣由",
            "location": "https://goo.gl/maps/uFRirj8rG1S2",
            "intro": "",
            "speaker": {
                "name": "李承澤",
                "photo": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0001_icon  高台 李承澤x300p.jpg",
                "resume": ["負責人", "廠長"],
                "intro": "嗨 大家好，我是春一枝商行的負責人，我叫李承澤，大家來到高台看到我可以叫我廠長，我們這邊有非常棒的地方，一間冰棒故事館，可以在裡面休息乘涼，也有很好的風景，往東邊看就是都蘭山，樓下也有很乾淨的洗手間大家可以使用。這邊最重要的是有好吃的冰棒，我們用純粹的水果、水、跟砂糖下去做的。為什麼這邊的冰棒這麼的好吃呢？因為我們有三個重點原則：我們秉持良心、用心做、希望大家吃了都開心！歡迎大家來到春一枝鹿野76這邊乘涼，也希望能支持台灣的農業，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/Oogid3HaNPg",
                "homeNumber": "089 552 295",
                "phoneNumber": "09 7817 8553",
                "FBUrl": "http://www.fruit-ice.com.tw"
            },
            "audio": {
                "src": "audio/A高台散步/GT0001高台 李承澤 2017-07-05 春一枝/GT0002高台 李承澤 2017-07-05 14-30 春一枝2創辦緣由.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0002創辦原由/GT0002_0000_.jpg"
                    }, {
                        "time": 55,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0002創辦原由/GT0002_0055_.jpg"
                    }, {
                        "time": 78,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0002創辦原由/GT0002_0078_.jpg"
                    }, {
                        "time": 113,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0002創辦原由/GT0002_0113_.jpg"
                    },
                ],
            },
            "moreAudio": ["名稱由來", "理念故事", "設施環境"],
            "neighView": [
                {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "春一枝鹿野76誠信商店_理念故事") {
        serverData = {
            "name": "春一枝鹿野76誠信商店",
            "subtitle": "理念故事",
            "location": "https://goo.gl/maps/uFRirj8rG1S2",
            "intro": "",
            "speaker": {
                "name": "李承澤",
                "photo": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0001_icon  高台 李承澤x300p.jpg",
                "resume": ["負責人", "廠長"],
                "intro": "嗨 大家好，我是春一枝商行的負責人，我叫李承澤，大家來到高台看到我可以叫我廠長，我們這邊有非常棒的地方，一間冰棒故事館，可以在裡面休息乘涼，也有很好的風景，往東邊看就是都蘭山，樓下也有很乾淨的洗手間大家可以使用。這邊最重要的是有好吃的冰棒，我們用純粹的水果、水、跟砂糖下去做的。為什麼這邊的冰棒這麼的好吃呢？因為我們有三個重點原則：我們秉持良心、用心做、希望大家吃了都開心！歡迎大家來到春一枝鹿野76這邊乘涼，也希望能支持台灣的農業，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/Oogid3HaNPg",
                "homeNumber": "089 552 295",
                "phoneNumber": "09 7817 8553",
                "FBUrl": "http://www.fruit-ice.com.tw"
            },
            "audio": {
                "src": "audio/A高台散步/GT0001高台 李承澤 2017-07-05 春一枝/GT0003高台 李承澤 2017-07-05 14-30 春一枝3理念故事.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0000_.jpg"
                    }, {
                        "time": 18,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0018_.jpg"
                    }, {
                        "time": 36,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0036_.jpg"
                    }, {
                        "time": 51,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0051_.jpg"
                    }, {
                        "time": 70,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0070_.jpg"
                    }, {
                        "time": 90,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0090_.jpg"
                    }, {
                        "time": 108,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0108_.jpg"
                    }, {
                        "time": 120,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0003理念故事/GT0003_0120_.jpg"
                    },
                ],
            },
            "moreAudio": ["名稱由來", "創辦緣由", "設施環境"],
            "neighView": [
                {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "春一枝鹿野76誠信商店_設施環境") {
        serverData = {
            "name": "春一枝鹿野76誠信商店",
            "subtitle": "設施環境",
            "location": "https://goo.gl/maps/uFRirj8rG1S2",
            "intro": "",
            "speaker": {
                "name": "李承澤",
                "photo": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0001_icon  高台 李承澤x300p.jpg",
                "resume": ["負責人", "廠長"],
                "intro": "嗨 大家好，我是春一枝商行的負責人，我叫李承澤，大家來到高台看到我可以叫我廠長，我們這邊有非常棒的地方，一間冰棒故事館，可以在裡面休息乘涼，也有很好的風景，往東邊看就是都蘭山，樓下也有很乾淨的洗手間大家可以使用。這邊最重要的是有好吃的冰棒，我們用純粹的水果、水、跟砂糖下去做的。為什麼這邊的冰棒這麼的好吃呢？因為我們有三個重點原則：我們秉持良心、用心做、希望大家吃了都開心！歡迎大家來到春一枝鹿野76這邊乘涼，也希望能支持台灣的農業，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/Oogid3HaNPg",
                "homeNumber": "089 552 295",
                "phoneNumber": "09 7817 8553",
                "FBUrl": "http://www.fruit-ice.com.tw"
            },
            "audio": {
                "src": "audio/A高台散步/GT0001高台 李承澤 2017-07-05 春一枝/GT0004高台 李承澤 2017-07-05 14-30 春一枝4設施環境.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0000_.jpg"
                    }, {
                        "time": 6,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0006_.jpg"
                    }, {
                        "time": 23,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0023_.jpg"
                    }, {
                        "time": 40,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0040_.jpg"
                    }, {
                        "time": 51,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0051_.jpg"
                    }, {
                        "time": 60,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0060_.jpg"
                    }, {
                        "time": 84,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0084_.jpg"
                    }, {
                        "time": 94,
                        "photoSrc": "images/photo/A高台散步/GT0001高台 李承澤 春一枝/GT0004設施環境/GT0004_0094_.jpg"
                    },
                ],
            },
            "moreAudio": ["名稱由來", "創辦緣由", "理念故事"],
            "neighView": [
                {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "鹿野遊客中心_簡介") {
        serverData = {
            "name": "鹿野遊客中心",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/J6L6pkYg1Ro",
            "intro": "我們來到鹿野高台，經過一個大茶壺的地標之後，右轉上來之後，最先看到的就是花東縱谷國家風景區管理處在鹿野設置的遊客中心。這處遊客中心正好是前往熱氣球場地必經的地點，大家若有需要，可以先來這裡休息一下。鹿野遊客中心的設施非常好，有多媒體介紹縱谷景點之外，還有很多旅遊資訊可以詢問，有摺頁、地圖可以索取閱讀，也有乾淨的廁所可以免費使用。而為了配合國家南向發展政策，這裡也設置了一間穆斯林的祈禱室，有需要的遊客也可以多多利用。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/A高台散步/GT0005高台 韋立琦 2017-07-01 鹿野遊客中心.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005高台 韋立琦 鹿野遊客中心/GT0005_0000.jpg"
                    }, {
                        "time": 14,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005高台 韋立琦 鹿野遊客中心/GT0005_0014.jpg"
                    }, {
                        "time": 22,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005高台 韋立琦 鹿野遊客中心/GT0005_0022.jpg"
                    },
                ],
            }, "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "鹿野高台_概述") {
        serverData = {
            "name": "鹿野高台",
            "subtitle": "概述",
            "location": "https://goo.gl/maps/dfCb3mEMSY12",
            "intro": "鹿野高台近年熱門的活動除了熱氣球嘉年華在每年的暑假期間舉辦之外，其他白天的時間就是飛行傘活動。台灣有三大飛行傘場北部的金山、萬里，南部(屏東)的賽嘉、以及台東的鹿野高台。遊客來到這裡可以欣賞到藍天白雲和朵朵彩色的飛行傘飛舞在天空中，這樣的景色真的是美不勝收！來到高台可以觀賞不遠處的中央山脈，以及美麗的海岸山脈，鹿野高台正好位於這兩大山脈的花東縱谷平原之上。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/A高台散步/GT0006高台 韋立琦 2017-07-01 鹿野高台/GT0006高台 韋立琦 2017-07-01 A鹿野高台概述.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0000_.jpg"
                    }, {
                        "time": 4,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0004_.jpg"
                    }, {
                        "time": 14,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0014_.jpg"
                    }, {
                        "time": 25,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0025_.jpg"
                    }, {
                        "time": 39,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0039_.jpg"
                    }, {
                        "time": 47,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0047_.jpg"
                    }, {
                        "time": 57,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0057_.jpg"
                    }, {
                        "time": 74,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0074_.jpg"
                    }, {
                        "time": 88,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0088_.jpg"
                    }, {
                        "time": 110,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0006高台 韋立琦 A鹿野高台概述/GT0006_0110_.jpg"
                    },
                ],
            },
            "moreAudio": ["飛行傘", "遠眺都蘭山", "高台涼亭(高眺亭)"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "鹿野高台_飛行傘") {
        serverData = {
            "name": "鹿野高台",
            "subtitle": "飛行傘",
            "location": "https://goo.gl/maps/EvADQob152E2",
            "intro": "每年熱氣球的熱季正是來鹿野高台的最佳時機之一，飛行傘最適合的風向和角度，是吹南風的時候，因為飛行傘是無動力的飛行載具，因此常常受到各種飛行條件的影響，包含天候、個人、裝備等因素，尤其是天氣。這裡設有偵測風向的風向帶，每當風向帶被吹成與地面成45度角的時候，就是最適合飛行的天候情況，夏季往往是最適合飛行傘的季節。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/A高台散步/GT0006高台 韋立琦 2017-07-01 鹿野高台/GT0007高台 韋立琦 2017-07-01 B鹿野高台飛行傘.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0007高台 韋立琦 B鹿野高台飛行傘/GT0007_0000_.jpg"
                    }, {
                        "time": 9,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0007高台 韋立琦 B鹿野高台飛行傘/GT0007_0009_.jpg"
                    }, {
                        "time": 26,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0007高台 韋立琦 B鹿野高台飛行傘/GT0007_0026_.jpg"
                    }, {
                        "time": 41,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0007高台 韋立琦 B鹿野高台飛行傘/GT0007_0041_.jpg"
                    }, {
                        "time": 55,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0007高台 韋立琦 B鹿野高台飛行傘/GT0007_0055_.jpg"
                    }, {
                        "time": 69,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0007高台 韋立琦 B鹿野高台飛行傘/GT0007_0069_.jpg"
                    }, {
                        "time": 78,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0007高台 韋立琦 B鹿野高台飛行傘/GT0007_0078_.jpg"
                    },
                ],
            },
            "moreAudio": ["概述", "遠眺都蘭山", "高台涼亭(高眺亭)"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "鹿野高台_遠眺都蘭山") {
        serverData = {
            "name": "鹿野高台",
            "subtitle": "遠眺都蘭山",
            "location": "https://goo.gl/maps/Fg2KJB9VUmr",
            "intro": "當我們站在鹿野高台向東邊望去，就可以看見一座山形美麗的山，位在海岸山脈當中，同時也是海岸山脈南段的最高峰，高度1,190公尺，這座山不是一座普通的山，它是守護台東千百年的一座聖山，叫做都蘭山。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/A高台散步/GT0006高台 韋立琦 2017-07-01 鹿野高台/GT0008高台 韋立琦 2017-07-01 C遠眺都蘭山.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0008高台 韋立琦 C遠眺都蘭山/GT0008_0000_.jpg"
                    }, {
                        "time": 30,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0008高台 韋立琦 C遠眺都蘭山/GT0008_0030_.jpg"
                    }, {
                        "time": 55,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0008高台 韋立琦 C遠眺都蘭山/GT0008_0055_.jpg"
                    },
                ],
            },
            "moreAudio": ["概述", "飛行傘", "高台涼亭(高眺亭)"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "鹿野高台_高台涼亭(高眺亭)") {
        serverData = {
            "name": "鹿野高台",
            "subtitle": "高台涼亭(高眺亭)",
            "location": "https://goo.gl/maps/nYEiyaqCpdP2",
            "intro": "鹿野高台今年(2017)舉辦熱氣球嘉年華已經是第7屆了，這段期間來到台東一定不能錯過這場盛會！來到鹿野高台最佳的欣賞位置就是高台涼亭(高眺亭)。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/A高台散步/GT0006高台 韋立琦 2017-07-01 鹿野高台/GT0009高台 韋立琦 2017-07-01 D高台涼亭(高眺亭).mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0009高台 韋立琦 D鹿野高台涼亭(高眺亭)/GT0009_0000_.jpg"
                    }, {
                        "time": 17,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0009高台 韋立琦 D鹿野高台涼亭(高眺亭)/GT0009_0017_.jpg"
                    }, {
                        "time": 33,
                        "photoSrc": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0009高台 韋立琦 D鹿野高台涼亭(高眺亭)/GT0009_0033_.jpg"
                    },
                ],
            },
            "moreAudio": ["概述", "飛行傘", "遠眺都蘭山"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "鹿野高台飛行傘_翱翔飛行傘") {
        serverData = {
            "name": "鹿野高台飛行傘",
            "subtitle": "翱翔飛行傘",
            "location": "https://goo.gl/maps/EvADQob152E2",
            "intro": "近幾年鹿野高台最讓各界熟悉的活動可能是熱氣球，也越來越多人知道來鹿野高台必須、一定要玩的戶外運動就是飛行傘！我們在這裡提供飛行傘運動是希望讓來到鹿野的遊客朋友，能夠從不同角度來看看這裡美麗的景色！",
            "speaker": {
                "name": "王子麵",
                "photo": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_icon 高台 王子麵x300p.jpg",
                "resume": ["飛行傘教練"],
                "intro": "大家好，我是翱翔飛行傘飛行傘教練王子麵，在我身後就是熱氣球的大草皮，我從事飛行傘運動已經有8年的時間，目前都在翱翔飛行傘帶著從各地來的朋友體驗飛行傘運動。我個人參加過很多(飛行傘)越野比賽，在2017年4月份的埔里站越野比賽我拿到第2名的成績，2017年台東站我拿到越野比賽的第3名。我們翱翔飛行傘還有非常多飛行員的技術比我好，真的是臥虎藏龍。我們希望用這種專業態度提供更好的服務給從各地來玩的朋友，希望各位到鹿野高台一定要來體驗飛行傘哦！謝謝！",
                "videoUrl": "https://www.youtube.com/embed/UBdQg814WCs",
                "homeNumber": "09 5637 7533",
                "phoneNumber": "09 1707 5990",
                "FBUrl": "https://www.facebook.com/soar001/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0010高台 王子麵 2017-07-05 翱翔飛行傘/GT0010高台 王子麵 2017-07-05 翱翔飛行傘.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0000_.jpg"
                    }, {
                        "time": 6,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0006_.jpg"
                    }, {
                        "time": 12,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0012_.jpg"
                    }, {
                        "time": 21,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0021_.jpg"
                    }, {
                        "time": 30,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0030_.jpg"
                    }, {
                        "time": 37,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0037_.jpg"
                    }, {
                        "time": 46,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0046_.jpg"
                    }, {
                        "time": 56,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0056_.jpg"
                    }, {
                        "time": 70,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0070_.jpg"
                    }, {
                        "time": 76,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0076_.jpg"
                    }, {
                        "time": 88,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0088_.jpg"
                    }, {
                        "time": 96,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0096_.jpg"
                    }, {
                        "time": 114,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0114_.jpg"
                    }, {
                        "time": 129,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0129_.jpg"
                    }, {
                        "time": 142,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0142_.jpg"
                    }, {
                        "time": 158,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0158_.jpg"
                    }, {
                        "time": 162,
                        "photoSrc": "images/photo/A高台散步/GT0010高台 王子麵 翱翔飛行傘/GT0010_0162_.jpg"
                    },
                ],
            },

            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "台灣國際熱氣球嘉年華_乘球攻略") {
        serverData = {
            "name": "台灣國際熱氣球嘉年華",
            "subtitle": "乘球攻略",
            "location": "https://goo.gl/maps/djugubFCG312",
            "intro": "非常歡迎各位來鹿野高台參加由台東縣政府主辦的台灣熱氣球國際嘉年華活動，每年夏天最精彩的盛會，每日的清晨、黃昏在高台大草原上舉辦。鹿野高台現已成為華人世界的熱氣球聖地，不只是活動期間最長，也是光雕音樂會最多的嘉年華活動。如果您想來體驗熱氣球繫留活動，清晨5點開始售票，下午是4點賣票。根據經驗，清晨3、4點來一定可以買到票，如果想要下午才來體驗繫留，同樣根據以往經驗，如果下午2點前沒有到現場，大概就沒有機會排到..。除了清晨比較容易買到票，更棒的原因是，清晨的熱氣流比較穩定，溫度也比較涼爽，所以只要沒有下雨，幾乎99%可以搭乘熱氣球升空。",
            "speaker": {
                "name": "許裕昌",
                "photo": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011_icon 高台 許裕昌x300p.jpg",
                "resume": ["活動主持人", "台東縣觀光協會第11屆總幹事", ""],
                "intro": "你好！我叫許裕昌，很多朋友都習慣叫我昌哥！我的現職是台東縣觀光協會總幹事，大家會認識我，都是因為近年的台灣熱氣球國際嘉年華活動，今年是第七年，這七年都是由我主持！各位朋友想要知道熱氣球的魅力嗎？想要讓你的夢想升空嗎？熱氣球一生一次，感動一世！每年夏天、每天的清晨和黃昏在台東的鹿野高台，有全亞洲最美麗的熱氣球，要帶你把夢想升空，朋友們快來吧！",
                "videoUrl": "https://www.youtube.com/embed/HZXLFp2_M-A",
                "homeNumber": "",
                "phoneNumber": "",
                "FBUrl": "http://www.ttva.org.tw/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0011高台 許裕昌 2017-07-08 熱氣球嘉年華/GT0011高台 許裕昌 2017-07-08 A熱氣球嘉年華乘球攻略.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0000_.jpg"
                    }, {
                        "time": 18,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0018_.jpg"
                    }, {
                        "time": 28,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0028_.jpg"
                    }, {
                        "time": 43,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0043_.jpg"
                    }, {
                        "time": 55,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0055_.jpg"
                    }, {
                        "time": 69,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0069_.jpg"
                    }, {
                        "time": 74,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0074_.jpg"
                    }, {
                        "time": 86,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0086_.jpg"
                    }, {
                        "time": 106,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0106_.jpg"
                    }, {
                        "time": 120,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0120_.jpg"
                    }, {
                        "time": 140,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011高台 許裕昌 A熱氣球嘉年華乘球攻略/GT0011_0140_.jpg"
                    },
                ],
            },
            "moreAudio": ["飛行規則與常見狀況", "活動特色"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "台灣國際熱氣球嘉年華_飛行規則與常見狀況") {
        serverData = {
            "name": "台灣國際熱氣球嘉年華",
            "subtitle": "飛行規則與常見狀況",
            "location": "https://goo.gl/maps/djugubFCG312",
            "intro": "熱氣球因為體積大、重量輕，非常容易受到風的影響，所以風勢大的時候看不到熱氣球，下雨天的時候也看不到熱氣球，因為熱氣球淋濕之後會變重，飛不起來。熱氣球也怕大太陽，如果太陽的高溫持續加溫熱氣球，就會導致浮力不斷增加，對於自由飛和繫留兩種情況都會造成搭乘人員的危險。所以大多數熱氣球都是選擇在清晨和黃昏這兩個時段。",
            "speaker": {
                "name": "許裕昌",
                "photo": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011_icon 高台 許裕昌x300p.jpg",
                "resume": ["活動主持人", "台東縣觀光協會第11屆總幹事", ""],
                "intro": "你好！我叫許裕昌，很多朋友都習慣叫我昌哥！我的現職是台東縣觀光協會總幹事，大家會認識我，都是因為近年的台灣熱氣球國際嘉年華活動，今年是第七年，這七年都是由我主持！各位朋友想要知道熱氣球的魅力嗎？想要讓你的夢想升空嗎？熱氣球一生一次，感動一世！每年夏天、每天的清晨和黃昏在台東的鹿野高台，有全亞洲最美麗的熱氣球，要帶你把夢想升空，朋友們快來吧！",
                "videoUrl": "https://www.youtube.com/embed/HZXLFp2_M-A",
                "homeNumber": "",
                "phoneNumber": "",
                "FBUrl": "http://www.ttva.org.tw/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0011高台 許裕昌 2017-07-08 熱氣球嘉年華/GT0012高台 許裕昌 2017-07-08 B熱氣球嘉年華飛行規則與常見狀況.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0012高台 許裕昌 B熱氣球嘉年華飛行規則與常見狀況/GT0012_0000_.jpg"
                    }, {
                        "time": 11,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0012高台 許裕昌 B熱氣球嘉年華飛行規則與常見狀況/GT0012_0011_.jpg"
                    }, {
                        "time": 25,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0012高台 許裕昌 B熱氣球嘉年華飛行規則與常見狀況/GT0012_0025_.jpg"
                    }, {
                        "time": 45,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0012高台 許裕昌 B熱氣球嘉年華飛行規則與常見狀況/GT0012_0045_.jpg"
                    }, {
                        "time": 60,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0012高台 許裕昌 B熱氣球嘉年華飛行規則與常見狀況/GT0012_0060_.jpg"
                    }, {
                        "time": 70,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0012高台 許裕昌 B熱氣球嘉年華飛行規則與常見狀況/GT0012_0070_.jpg"
                    },
                ],
            },
            "moreAudio": ["乘球攻略", "活動特色"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "台灣國際熱氣球嘉年華_活動特色") {
        serverData = {
            "name": "台灣國際熱氣球嘉年華",
            "subtitle": "活動特色",
            "location": "https://goo.gl/maps/djugubFCG312",
            "intro": "每天下午場的熱氣球活動，到了天色昏暗的時候，通常都會加演一場小型的燈光噴火秀，很多遊客都喜歡這樣的表演。在高台大草坪上十幾顆的夜明珠一起照亮浪漫的夜晚。今年(2017)主打的是，歷年來最多造型球的熱氣球盛會，總共邀集13個國家，35顆國內外造型球。",
            "speaker": {
                "name": "許裕昌",
                "photo": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0011_icon 高台 許裕昌x300p.jpg",
                "resume": ["活動主持人", "台東縣觀光協會第11屆總幹事", ""],
                "intro": "你好！我叫許裕昌，很多朋友都習慣叫我昌哥！我的現職是台東縣觀光協會總幹事，大家會認識我，都是因為近年的台灣熱氣球國際嘉年華活動，今年是第七年，這七年都是由我主持！各位朋友想要知道熱氣球的魅力嗎？想要讓你的夢想升空嗎？熱氣球一生一次，感動一世！每年夏天、每天的清晨和黃昏在台東的鹿野高台，有全亞洲最美麗的熱氣球，要帶你把夢想升空，朋友們快來吧！",
                "videoUrl": "https://www.youtube.com/embed/HZXLFp2_M-A",
                "homeNumber": "",
                "phoneNumber": "",
                "FBUrl": "http://www.ttva.org.tw/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0011高台 許裕昌 2017-07-08 熱氣球嘉年華/GT0013高台 許裕昌 2017-07-08 C熱氣球嘉年華活動特色.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0013高台 許裕昌 C熱氣球嘉年華活動特色/GT0013_0000_.jpg"
                    }, {
                        "time": 22,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0013高台 許裕昌 C熱氣球嘉年華活動特色/GT0013_0022_.jpg"
                    }, {
                        "time": 36,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0013高台 許裕昌 C熱氣球嘉年華活動特色/GT0013_0036_.jpg"
                    }, {
                        "time": 47,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0013高台 許裕昌 C熱氣球嘉年華活動特色/GT0013_0047_.jpg"
                    }, {
                        "time": 69,
                        "photoSrc": "images/photo/A高台散步/GT0011高台 許裕昌 熱氣球嘉年華/GT0013高台 許裕昌 C熱氣球嘉年華活動特色/GT0013_0069_.jpg"
                    },
                ],
            },
            "moreAudio": ["乘球攻略", "飛行規則與常見狀況"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "高台心樂園",
                    subtitle: "內容介紹"
                },
            ],
        };
    } else if (param == "高台心樂園_內容介紹") {
        serverData = {
            "name": "高台心樂園",
            "subtitle": "內容介紹",
            "location": "https://goo.gl/maps/CYhmsHrRDUJ2",
            "intro": "高台心樂園位於台東鹿野高台，提供飛行傘、滑草、都蘭山、茶文化等體驗、導覽活動，結合在地景點與文化藝術的深度旅遊，串連在地民宿與店家，提供遊客值回票價的遊程體驗。",
            "speaker": {
                "name": "李暖暖",
                "photo": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014_icon 高台 李暖暖x300p.jpg",
                "resume": ["導覽員"],
                "intro": "大家好！我是高台心樂園的導覽員，我叫暖暖，我也是返鄉青年噢。我的阿公跟我的祖先們都一直住在這邊，我為什麼想在高台做導覽員呢？因為我非常喜歡鹿野高台的自然風景和地方人情，我在高台心樂園的工作非常的有趣，每天都可以帶領遊客DIY體驗我們在地的藝術活動。我們有逗茶、捏陶、風箏彩繪等等有趣的活動，我會用生動活潑的方式帶著大家欣賞高台最美的風景！記得要來找我喔！",
                "videoUrl": "https://www.youtube.com/embed/KyN9gp5tHVI",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 7677 3355",
                "FBUrl": "https://www.facebook.com/gtgoodmate/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0014高台 李暖暖 2017-07-07 高台心樂園/GT0014高台 李暖暖 2017-07-07 1高台心樂園﻿簡介.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0000.jpg"
                    }, {
                        "time": 8,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0008.jpg"
                    }, {
                        "time": 14,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0014.jpg"
                    }, {
                        "time": 28,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0028.jpg"
                    }, {
                        "time": 34,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0034.jpg"
                    }, {
                        "time": 42,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0042.jpg"
                    }, {
                        "time": 51,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0051.jpg"
                    }, {
                        "time": 64,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0064.jpg"
                    }, {
                        "time": 77,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0077.jpg"
                    }, {
                        "time": 83,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0083.jpg"
                    }, {
                        "time": 90,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0090.jpg"
                    }, {
                        "time": 113,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0113.jpg"
                    }, {
                        "time": 132,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014高台 李暖暖 1高台心樂園簡介/GT0014_0132.jpg"
                    },
                ],
            },
            "moreAudio": ["蛇雕", "飛行傘", "遠眺都蘭山", "阿薩姆茶園替身樹"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                },
            ],
        };
    } else if (param == "高台心樂園_蛇雕") {
        serverData = {
            "name": "高台心樂園",
            "subtitle": "蛇雕",
            "location": "https://goo.gl/maps/CYhmsHrRDUJ2",
            "intro": "歡迎來到鹿野高台！我們要導覽的是蛇雕，高台天空常見的一種老鷹叫做蛇雕，也叫大冠鷲。有一種鳥叫做魚鷹，牠主要的食物是魚類，所以同樣地，蛇雕主要的食物是什麼呢？沒錯，就是蛇！因此蛇雕在高台有一個稱號叫做高台法海，也就是白蛇傳裡面的法海和尚唷..。",
            "speaker": {
                "name": "李暖暖",
                "photo": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014_icon 高台 李暖暖x300p.jpg",
                "resume": ["導覽員"],
                "intro": "大家好！我是高台心樂園的導覽員，我叫暖暖，我也是返鄉青年噢。我的阿公跟我的祖先們都一直住在這邊，我為什麼想在高台做導覽員呢？因為我非常喜歡鹿野高台的自然風景和地方人情，我在高台心樂園的工作非常的有趣，每天都可以帶領遊客DIY體驗我們在地的藝術活動。我們有逗茶、捏陶、風箏彩繪等等有趣的活動，我會用生動活潑的方式帶著大家欣賞高台最美的風景！記得要來找我喔！",
                "videoUrl": "https://www.youtube.com/embed/KyN9gp5tHVI",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 7677 3355",
                "FBUrl": "https://www.facebook.com/gtgoodmate/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0014高台 李暖暖 2017-07-07 高台心樂園/GT0015高台 李暖暖 2017-07-07 2高台心樂園蛇雕.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0015高台 李暖暖 2高台心樂園蛇雕/GT0015_0000.jpg"
                    }, {
                        "time": 52,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0015高台 李暖暖 2高台心樂園蛇雕/GT0015_0052.jpg"
                    }, {
                        "time": 93,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0015高台 李暖暖 2高台心樂園蛇雕/GT0015_0093.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "飛行傘", "遠眺都蘭山", "阿薩姆茶園替身樹"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                },
            ],
        };
    } else if (param == "高台心樂園_飛行傘") {
        serverData = {
            "name": "高台心樂園",
            "subtitle": "飛行傘",
            "location": "https://goo.gl/maps/CYhmsHrRDUJ2",
            "intro": "飛行傘是一種技術性高、安全性也高的空中極限運動，跟一般所謂的降落傘不同，跟滑翔翼也不一樣，它是一種無動力飛行器。它的起源有人說源自法國，也有人說來自美國NASA太空總署的計畫，..。據我們了解，台灣目前能飛飛行傘的地方應該有七個，有金山翡翠灣、屏東賽嘉、新竹、南投、宜蘭、花蓮以及台東鹿野高台。鹿野高台曾經舉辦過幾屆國際飛行傘比賽，是國際飛行員公認最美、最理想的起飛場！",
            "speaker": {
                "name": "李暖暖",
                "photo": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014_icon 高台 李暖暖x300p.jpg",
                "resume": ["導覽員"],
                "intro": "大家好！我是高台心樂園的導覽員，我叫暖暖，我也是返鄉青年噢。我的阿公跟我的祖先們都一直住在這邊，我為什麼想在高台做導覽員呢？因為我非常喜歡鹿野高台的自然風景和地方人情，我在高台心樂園的工作非常的有趣，每天都可以帶領遊客DIY體驗我們在地的藝術活動。我們有逗茶、捏陶、風箏彩繪等等有趣的活動，我會用生動活潑的方式帶著大家欣賞高台最美的風景！記得要來找我喔！",
                "videoUrl": "https://www.youtube.com/embed/KyN9gp5tHVI",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 7677 3355",
                "FBUrl": "https://www.facebook.com/gtgoodmate/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0014高台 李暖暖 2017-07-07 高台心樂園/GT0016高台 李暖暖 2017-07-07 3高台心樂園飛行傘.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0000.jpg"
                    }, {
                        "time": 15,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0015.jpg"
                    }, {
                        "time": 40,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0040.jpg"
                    }, {
                        "time": 60,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0060.jpg"
                    }, {
                        "time": 80,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0080.jpg"
                    }, {
                        "time": 92,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0092.jpg"
                    }, {
                        "time": 105,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0105.jpg"
                    }, {
                        "time": 115,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0115.jpg"
                    }, {
                        "time": 131,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0131.jpg"
                    }, {
                        "time": 168,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0168.jpg"
                    }, {
                        "time": 175,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0175.jpg"
                    }, {
                        "time": 185,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0185.jpg"
                    }, {
                        "time": 200,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0200.jpg"
                    }, {
                        "time": 214,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0214.jpg"
                    }, {
                        "time": 230,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0230.jpg"
                    }, {
                        "time": 257,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0016高台 李暖暖 3高台心樂園飛行傘/GT0016_0257.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "蛇雕", "遠眺都蘭山", "阿薩姆茶園替身樹"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                },
            ],
        };
    } else if (param == "高台心樂園_遠眺都蘭山") {
        serverData = {
            "name": "高台心樂園",
            "subtitle": "遠眺都蘭山",
            "location": "https://goo.gl/maps/CYhmsHrRDUJ2",
            "intro": "座落在海岸山脈的這座大山它有許多名字，篤信佛教的人稱呼它為臥佛山，道教的朋友稱它為仙山，卑南族及阿美族原住民則稱它為聖山，而官方則命名為都蘭山，縱谷的漢人卻叫它美人山。各位可以仔細觀察這座山有額頭、眼睛、鼻子、嘴巴、下巴，那耳朵在哪裡呢？..",
            "speaker": {
                "name": "李暖暖",
                "photo": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014_icon 高台 李暖暖x300p.jpg",
                "resume": ["導覽員"],
                "intro": "大家好！我是高台心樂園的導覽員，我叫暖暖，我也是返鄉青年噢。我的阿公跟我的祖先們都一直住在這邊，我為什麼想在高台做導覽員呢？因為我非常喜歡鹿野高台的自然風景和地方人情，我在高台心樂園的工作非常的有趣，每天都可以帶領遊客DIY體驗我們在地的藝術活動。我們有逗茶、捏陶、風箏彩繪等等有趣的活動，我會用生動活潑的方式帶著大家欣賞高台最美的風景！記得要來找我喔！",
                "videoUrl": "https://www.youtube.com/embed/KyN9gp5tHVI",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 7677 3355",
                "FBUrl": "https://www.facebook.com/gtgoodmate/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0014高台 李暖暖 2017-07-07 高台心樂園/GT0017高台 李暖暖 2017-07-07 4高台遠眺都蘭山.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0017高台 李暖暖 4高台遠眺都蘭山/GT0017_0000_.jpg"
                    }, {
                        "time": 33,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0017高台 李暖暖 4高台遠眺都蘭山/GT0017_0033_.jpg"
                    }, {
                        "time": 106,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0017高台 李暖暖 4高台遠眺都蘭山/GT0017_0106_.jpg"
                    }, {
                        "time": 142,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0017高台 李暖暖 4高台遠眺都蘭山/GT0017_0142_.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "蛇雕", "飛行傘", "阿薩姆茶園替身樹"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                },
            ],
        };
    } else if (param == "高台心樂園_阿薩姆茶園替身樹") {
        serverData = {
            "name": "高台心樂園",
            "subtitle": "阿薩姆茶園替身樹",
            "location": "https://goo.gl/maps/CYhmsHrRDUJ2",
            "intro": "這是一則和這片茶園有關的故事，叫做替身樹。為什麼這片茶園會被稱為替身樹呢？這片茶園做種的茶叫阿薩姆，50多年前還沒有種這片阿薩姆茶園之前，發生過一段在地人才聽聞過的故事。高台當年有一位美麗的姑娘，據說當時有一位算命師給她算定，她將來會嫁8個老公，說也奇怪，後來這位女孩結婚後不久，先生果然就過世了。..",
            "speaker": {
                "name": "李暖暖",
                "photo": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0014_icon 高台 李暖暖x300p.jpg",
                "resume": ["導覽員"],
                "intro": "大家好！我是高台心樂園的導覽員，我叫暖暖，我也是返鄉青年噢。我的阿公跟我的祖先們都一直住在這邊，我為什麼想在高台做導覽員呢？因為我非常喜歡鹿野高台的自然風景和地方人情，我在高台心樂園的工作非常的有趣，每天都可以帶領遊客DIY體驗我們在地的藝術活動。我們有逗茶、捏陶、風箏彩繪等等有趣的活動，我會用生動活潑的方式帶著大家欣賞高台最美的風景！記得要來找我喔！",
                "videoUrl": "https://www.youtube.com/embed/KyN9gp5tHVI",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 7677 3355",
                "FBUrl": "https://www.facebook.com/gtgoodmate/"
            },
            "audio": {
                "src": "audio/A高台散步/GT0014高台 李暖暖 2017-07-07 高台心樂園/GT0018高台 李暖暖 2017-07-07 5高台阿薩姆茶園替身樹.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0018高台 李暖暖 5高台阿薩姆茶園替身樹/GT0018_0000.jpg"
                    }, {
                        "time": 7,
                        "photoSrc": "images/photo/A高台散步/GT0014高台 李暖暖 高台心樂園/GT0018高台 李暖暖 5高台阿薩姆茶園替身樹/GT0018_0007.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "蛇雕", "飛行傘", "遠眺都蘭山"],
            "neighView": [
                {
                    title: "春一枝鹿野76誠信商店",
                    subtitle: "名稱由來"
                }, {
                    title: "鹿野遊客中心",
                    subtitle: "簡介"
                }, {
                    title: "鹿野高台",
                    subtitle: "概述"
                }, {
                    title: "鹿野高台飛行傘",
                    subtitle: "翱翔飛行傘"
                }, {
                    title: "台灣國際熱氣球嘉年華",
                    subtitle: "乘球攻略"
                },
            ],
        };
    } else if (param == "龍谷茶園_簡介") {
        serverData = {
            "name": "龍谷茶園",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/H1Pud9wFXa72",
            "intro": "龍谷茶園到今天已經經營40餘年了，目前是由我先生陳岳雄主導經營茶園。在製茶理念上，我們一直遵循長輩教導的技術，我們很注重香、重、甘潤的製茶原則。",
            "speaker": {
                "name": "涂彩萍",
                "photo": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019_icon.jpg",
                "resume": ["女主人"],
                "intro": "我們是位於鹿野高台的一戶茶農，家中經營茶葉已歷經三代，最早是祖父母單純種茶、採茶、做一些雜工的工作，也就是一般的農民。一直到我公婆接手農務之後，一次因緣際會到霧社學做茶，學到專業製茶的知識後，才回到鹿野開創新的品牌叫「龍谷茶園」。",
                "videoUrl": "https://www.youtube.com/embed/zTgwABHbd9o",
                "homeNumber": "089 551 390",
                "phoneNumber": "09 7096 6222",
                "FBUrl": "https://goo.gl/YAzFoC"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT0019品茶 涂彩萍 2017-07-05 龍谷茶園/PT0001品茶 涂彩萍 2017-07-05 龍谷茶園.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0000_.jpg"
                    }, {
                        "time": 7,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0007_.jpg"
                    }, {
                        "time": 12,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0012_.jpg"
                    }, {
                        "time": 19,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0019_.jpg"
                    }, {
                        "time": 31,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0031_.jpg"
                    }, {
                        "time": 36,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0036_.jpg"
                    }, {
                        "time": 45,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0045_.jpg"
                    }, {
                        "time": 52,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0052_.jpg"
                    }, {
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0060_.jpg"
                    }, {
                        "time": 74,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019龍谷茶園簡介/PT0019_0074_.jpg"
                    },
                ],
            },
            "moreAudio": ["紅烏龍淵源"],
            "neighView": [
                {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍谷茶園_紅烏龍淵源") {
        serverData = {
            "name": "龍谷茶園",
            "subtitle": "紅烏龍淵源",
            "location": "https://goo.gl/maps/H1Pud9wFXa72",
            "intro": "",
            "speaker": {
                "name": "涂彩萍",
                "photo": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0019_icon.jpg",
                "resume": ["女主人"],
                "intro": "我們是位於鹿野高台的一戶茶農，家中經營茶葉已歷經三代，最早是祖父母單純種茶、採茶、做一些雜工的工作，也就是一般的農民。一直到我公婆接手農務之後，一次因緣際會到霧社學做茶，學到專業製茶的知識後，才回到鹿野開創新的品牌叫「龍谷茶園」。",
                "videoUrl": "https://www.youtube.com/embed/zTgwABHbd9o",
                "homeNumber": "089 551 390",
                "phoneNumber": "09 7096 6222",
                "FBUrl": "https://goo.gl/YAzFoC"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT0019品茶 涂彩萍 2017-07-05 龍谷茶園/PT0002品茶 涂彩萍 2017-07-05 龍谷茶園紅烏龍淵源.mp3",
                "tags": [
                    {
                        "time": 1,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0001.jpg"
                    }, {
                        "time": 11,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0011.jpg"
                    }, {
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0020.jpg"
                    }, {
                        "time": 33,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0033.jpg"
                    }, {
                        "time": 42,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0042.jpg"
                    }, {
                        "time": 55,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0055.jpg"
                    }, {
                        "time": 62,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0062.jpg"
                    }, {
                        "time": 72,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0072.jpg"
                    }, {
                        "time": 79,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0079.jpg"
                    }, {
                        "time": 85,
                        "photoSrc": "images/photo/B鹿野品茶/PT0019品茶 涂彩萍 龍谷茶園/PT0020紅烏龍淵源/PT0020_0085.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介"],
            "neighView": [
                {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "福鹿山休閒農莊_簡介") {
        serverData = {
            "name": "福鹿山休閒農莊",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/nYEiyaqCpdP2",
            "intro": "我們農莊所在位置就是每年熱氣球活動舉辦的地點，我們最主項的產品就是本地產的茶葉，首推紅烏龍和蜜香烏龍紅茶，這是我們現在最夯的產品，此外還有福鹿茶。我們經營露營區，也有台東特色產品的展售場、兒童遊樂設施、二樓自助式泡茶區。",
            "speaker": {
                "name": "李明訓",
                "photo": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021_icon.jpg",
                "resume": ["負責人"],
                "intro": "我是福鹿山休閒農莊的負責人，敝姓李，我是李明訓，歡迎大家來福鹿山休閒農莊聊天、品茶，欣賞鹿野高台的美景。",
                "videoUrl": "https://www.youtube.com/embed/EIY1ncPD4cQ",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 5516 1626",
                "FBUrl": "https://goo.gl/o2aEh7"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT02品茶 李明訓 李小燕 2017-07-01 福鹿山休閒農莊/PT02a品茶 李明訓 2017-07-01 A福鹿山休閒農莊簡介.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0000.jpg"
                    }, {
                        "time": 10,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0010.jpg"
                    }, {
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0020.jpg"
                    }, {
                        "time": 28,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0028.jpg"
                    }, {
                        "time": 35,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0035.jpg"
                    }, {
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0040.jpg"
                    }, {
                        "time": 45,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0045.jpg"
                    }, {
                        "time": 55,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0055.jpg"
                    }, {
                        "time": 65,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021福鹿山休閒農莊簡介/PT0021_0065.jpg"
                    },
                ],
            },
            "moreAudio": ["鹿野高台簡介", "周邊導覽", "福鹿茶"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "福鹿山休閒農莊_鹿野高台簡介") {
        serverData = {
            "name": "福鹿山休閒農莊",
            "subtitle": "鹿野高台簡介",
            "location": "https://goo.gl/maps/nYEiyaqCpdP2",
            "intro": "",
            "speaker": {
                "name": "李明訓",
                "photo": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021_icon.jpg",
                "resume": ["負責人"],
                "intro": "我是福鹿山休閒農莊的負責人，敝姓李，我是李明訓，歡迎大家來福鹿山休閒農莊聊天、品茶，欣賞鹿野高台的美景。",
                "videoUrl": "https://www.youtube.com/embed/EIY1ncPD4cQ",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 5516 1626",
                "FBUrl": "https://goo.gl/o2aEh7"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT02品茶 李明訓 李小燕 2017-07-01 福鹿山休閒農莊/PT02a品茶 李明訓 2017-07-01 B鹿野高台簡介.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0000.jpg"
                    }, {
                        "time": 9,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0009.jpg"
                    }, {
                        "time": 17,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0017.jpg"
                    }, {
                        "time": 27,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0027.jpg"
                    }, {
                        "time": 37,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0037.jpg"
                    }, {
                        "time": 43,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0043.jpg"
                    }, {
                        "time": 47,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0047.jpg"
                    }, {
                        "time": 56,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0022鹿野高台簡介/PT0022_0056.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "周邊導覽", "福鹿茶"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "福鹿山休閒農莊_周邊導覽") {
        serverData = {
            "name": "福鹿山休閒農莊",
            "subtitle": "周邊導覽",
            "location": "https://goo.gl/maps/nYEiyaqCpdP2",
            "intro": "",
            "speaker": {
                "name": "李明訓",
                "photo": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0021_icon.jpg",
                "resume": ["負責人"],
                "intro": "我是福鹿山休閒農莊的負責人，敝姓李，我是李明訓，歡迎大家來福鹿山休閒農莊聊天、品茶，欣賞鹿野高台的美景。",
                "videoUrl": "https://www.youtube.com/embed/EIY1ncPD4cQ",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 5516 1626",
                "FBUrl": "https://goo.gl/o2aEh7"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT02品茶 李明訓 李小燕 2017-07-01 福鹿山休閒農莊/PT02a品茶 李明訓 2017-07-01 C福鹿山休閒農莊周邊導覽.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0000.jpg"
                    }, {
                        "time": 15,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0015.jpg"
                    }, {
                        "time": 25,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0025.jpg"
                    }, {
                        "time": 51,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0051.jpg"
                    }, {
                        "time": 91,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0091.jpg"
                    }, {
                        "time": 97,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0097.jpg"
                    }, {
                        "time": 103,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0103.jpg"
                    }, {
                        "time": 109,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0023鹿野高台周邊導覽/PT0023_0109.jpg"
                    }
                ],
            },
            "moreAudio": ["簡介", "鹿野高台簡介", "福鹿茶"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "福鹿山休閒農莊_福鹿茶") {
        serverData = {
            "name": "福鹿山休閒農莊",
            "subtitle": "福鹿茶",
            "location": "https://goo.gl/maps/nYEiyaqCpdP2",
            "intro": "這幾年最有代表性的福鹿茶就是我們的蜜香紅烏龍，我們秉持著無毒、有機的理念製作這樣的茶葉，這款茶葉是採用烏龍茶種，經由小綠葉蟬的叮咬，讓茶葉產生一系列變化，在發酵過程中會產生一股淡淡的蜜香，所以被稱為蜜香紅烏龍。",
            "speaker": {
                "name": "李小燕",
                "photo": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024_icon.jpg",
                "resume": ["女主人"],
                "intro": "大家好，我是福鹿山休閒農莊的女主人李小燕，歡迎大家來福鹿山品嘗我們的福鹿茶！",
                "videoUrl": "https://www.youtube.com/embed/dcNUbaxJl-o",
                "homeNumber": "089 550 797",
                "phoneNumber": "09 5516 1626",
                "FBUrl": "https://goo.gl/o2aEh7"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT02品茶 李明訓 李小燕 2017-07-01 福鹿山休閒農莊/PT02b品茶 李小燕 2017-07-01 福鹿山休閒農莊福鹿茶.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0000.jpg"
                    }, {
                        "time": 8,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0008.jpg"
                    }, {
                        "time": 14,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0014.jpg"
                    }, {
                        "time": 24,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0024.jpg"
                    }, {
                        "time": 34,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0034.jpg"
                    }, {
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0040.jpg"
                    }, {
                        "time": 46,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0046.jpg"
                    }, {
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0060.jpg"
                    }, {
                        "time": 67,
                        "photoSrc": "images/photo/B鹿野品茶/PT0021品茶 李明訓 李小燕 福鹿山休閒農莊/PT0024福鹿山休閒農莊福鹿茶/PT0024_0067.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "鹿野高台簡介", "周邊導覽"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "厚生茶園_簡介") {
        serverData = {
            "name": "厚生茶園",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/xeKRUKxUpdU2",
            "intro": "厚生茶園位在鹿野遊客中心旁，也是大家耳熟能詳、釋放熱氣球的地點，更是花東縱谷最美的高地！如果要欣賞熱氣球、飛行傘，一定會經過我們厚生茶園，歡迎大家路過的時候進來品茶！本店最具特色的招牌功夫茶是董事長茶，這款茶是由本店老闆陳錫恩所研發、製作，他也是台灣第26位茶葉官能品評師，已累積四十幾年的烘焙技術。",
            "speaker": {
                "name": "詹美子",
                "photo": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_icon.jpg",
                "resume": ["老闆娘"],
                "intro": "大家好！我是台東鹿野高台厚生茶園的老闆娘，我叫詹美子，很開心能為大家介紹我們的店。",
                "videoUrl": "https://www.youtube.com/embed/xH4YpgEWSqQ",
                "homeNumber": "089 550 867",
                "phoneNumber": "",
                "FBUrl": "https://www.facebook.com/HUDSON.GREEN.TEA/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT03品茶 詹美子 2017-07-06 厚生茶園.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0000.jpg"
                    }, {
                        "time": 8,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0008.jpg"
                    }, {
                        "time": 26,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0026.jpg"
                    }, {
                        "time": 37,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0037.jpg"
                    }, {
                        "time": 46,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0046.jpg"
                    }, {
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0060.jpg"
                    }, {
                        "time": 70,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0070.jpg"
                    }, {
                        "time": 80,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0080.jpg"
                    }, {
                        "time": 90,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0090.jpg"
                    }, {
                        "time": 110,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0110.jpg"
                    }, {
                        "time": 120,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0120.jpg"
                    }, {
                        "time": 130,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0130.jpg"
                    }, {
                        "time": 135,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0135.jpg"
                    }, {
                        "time": 145,
                        "photoSrc": "images/photo/B鹿野品茶/PT0025品茶 詹美子 厚生茶園/PT0025_0145.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "永安茶園_簡介") {
        serverData = {
            "name": "永安茶園",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/9gmyMSnjn6P2",
            "intro": "永安茶園在鹿野高台已經經營了40多年，是由阿公劉天來先生在民國66年創立高台第一間茶工廠，當時都是做外銷批發，20年前爸爸接班的時候，才開始轉型做零售，並將店名命名為永安茶園，因為高台屬於永安村，另外一層意義是希望來喝茶的人，會永遠覺得安心。現在由我們第三代傳承，也是秉持一樣的精神。",
            "speaker": {
                "name": "劉倚瑩 ",
                "photo": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0026_icon.jpg",
                "resume": ["第三代經營者"],
                "intro": "大家好，我是永安茶園的劉倚瑩，和爸爸媽媽一起經營這間茶行。",
                "videoUrl": "https://www.youtube.com/embed/qDpq6q0Kym8",
                "homeNumber": "",
                "phoneNumber": "089 550 818",
                "FBUrl": "https://www.facebook.com/yongan.teagarden"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT04品茶 劉倚瑩 2017-07-06 永安茶園/PT04b品茶 劉倚瑩 2017-07-06 永安茶園.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0000.jpg"
                    }, {
                        "time": 6,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0006.jpg"
                    }, {
                        "time": 11,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0011.jpg"
                    }, {
                        "time": 24,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0024.jpg"
                    }, {
                        "time": 32,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0032.jpg"
                    }, {
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0040.jpg"
                    }, {
                        "time": 47,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0047.jpg"
                    }, {
                        "time": 55,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0055.jpg"
                    }, {
                        "time": 65,
                        "photoSrc": "images/photo/B鹿野品茶/PT0026品茶 劉倚瑩 永安茶園/PT0027永安茶園簡介2/PT0027_0065.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "連記茶莊_簡介") {
        serverData = {
            "name": "連記茶莊",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/h8WHhttSyWk",
            "intro": "經營者連姊於1989年搬至台東，因為有在台北生活的經驗，帶進許多行銷經驗、多角經營、包裝等概念，為鹿野地區的茶產業注入新的活力。",
            "speaker": {
                "name": "連婀娜 ",
                "photo": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028_icon.jpg",
                "resume": ["經營者"],
                "intro": "大家好，我是連記茶莊的連姊，大家如果來到鹿野高台，歡迎來連記茶莊坐坐！我們連記茶莊位置就在春一枝冰棒再往前走的不遠處，大約散步1分鐘不到就會看見連記茶莊。我們前門有一塊小庭院，歡迎來這裡透透氣，連記茶莊有好的茶和咖啡等您來品嘗，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/ZTqWBms35A4",
                "homeNumber": "089 551 117",
                "phoneNumber": "09 3760 0168",
                "FBUrl": "https://www.facebook.com/lien.tea11/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT05品茶 連婀娜 2017-07-07 連記茶莊/PT05品茶 連婀娜 2017-07-07 連記茶莊.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0000.jpg"
                    }, {
                        "time": 5,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0005.jpg"
                    }, {
                        "time": 11,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0011.jpg"
                    }, {
                        "time": 28,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0028.jpg"
                    }, {
                        "time": 39,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0039.jpg"
                    }, {
                        "time": 50,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0050.jpg"
                    }, {
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0060.jpg"
                    }, {
                        "time": 68,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0068.jpg"
                    }, {
                        "time": 74,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0074.jpg"
                    }, {
                        "time": 76,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0076.jpg"
                    }, {
                        "time": 78,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0078.jpg"
                    }, {
                        "time": 85,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0085.jpg"
                    }, {
                        "time": 95,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0095.jpg"
                    }, {
                        "time": 105,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0105.jpg"
                    }, {
                        "time": 117,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0117.jpg"
                    }, {
                        "time": 123,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028連記茶莊簡介/PT0028_0123.jpg"
                    },
                ],
            },
            "moreAudio": ["民宿介紹", "特色茶"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "連記茶莊_民宿介紹") {
        serverData = {
            "name": "連記茶莊",
            "subtitle": "民宿介紹",
            "location": "https://goo.gl/maps/h8WHhttSyWk",
            "intro": "連記茶莊同時也是台東第一間合法登記的民宿，整間民宿的房間都以「茶」為主題及命名，佈置優雅而具有中國味。在每晚的談茶時間，主人親沏一壺山泉水，敬邀遠來的客人在這高台茶區海跋三百公尺的平房裡品茗。連記茶莊不止是一間民宿，更是個可以讓您遠離塵囂，身心放鬆的家。",
            "speaker": {
                "name": "連婀娜 ",
                "photo": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028_icon.jpg",
                "resume": ["經營者"],
                "intro": "大家好，我是連記茶莊的連姊，大家如果來到鹿野高台，歡迎來連記茶莊坐坐！我們連記茶莊位置就在春一枝冰棒再往前走的不遠處，大約散步1分鐘不到就會看見連記茶莊。我們前門有一塊小庭院，歡迎來這裡透透氣，連記茶莊有好的茶和咖啡等您來品嘗，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/ZTqWBms35A4",
                "homeNumber": "089 551 117",
                "phoneNumber": "09 3760 0168",
                "FBUrl": "https://www.facebook.com/lien.tea11/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT05品茶 連婀娜 2017-07-07 連記茶莊/PT05品茶 連婀娜 2017-07-07 連記茶莊民宿.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0000.jpg"
                    }, {
                        "time": 7,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0007.jpg"
                    }, {
                        "time": 11,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0011.jpg"
                    }, {
                        "time": 22,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0022.jpg"
                    }, {
                        "time": 28,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0028.jpg"
                    }, {
                        "time": 34,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0034.jpg"
                    }, {
                        "time": 43,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0043.jpg"
                    }, {
                        "time": 51,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0051.jpg"
                    }, {
                        "time": 58,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0058.jpg"
                    }, {
                        "time": 66,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0029連記茶莊民宿介紹/PT0029_0066.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "特色茶"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "連記茶莊_特色茶") {
        serverData = {
            "name": "連記茶莊",
            "subtitle": "特色茶",
            "location": "https://goo.gl/maps/h8WHhttSyWk",
            "intro": "連記茶莊推廣概念在於獎就養生、安全、健康等意識，也是經營者連姊過去在台北生活的經驗所致，進而想在產地改變成生產有機茶園，對茶園管理有了些想法，從有機轉型期一路走來，於2015年獲得有機認證。",
            "speaker": {
                "name": "連婀娜 ",
                "photo": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0028_icon.jpg",
                "resume": ["經營者"],
                "intro": "大家好，我是連記茶莊的連姊，大家如果來到鹿野高台，歡迎來連記茶莊坐坐！我們連記茶莊位置就在春一枝冰棒再往前走的不遠處，大約散步1分鐘不到就會看見連記茶莊。我們前門有一塊小庭院，歡迎來這裡透透氣，連記茶莊有好的茶和咖啡等您來品嘗，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/ZTqWBms35A4",
                "homeNumber": "089 551 117",
                "phoneNumber": "09 3760 0168",
                "FBUrl": "https://www.facebook.com/lien.tea11/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT05品茶 連婀娜 2017-07-07 連記茶莊/PT05品茶 連婀娜 2017-07-07 連記茶莊特色茶.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0000_.jpg"
                    }, {
                        "time": 9,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0009_.jpg"
                    }, {
                        "time": 19,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0019_.jpg"
                    }, {
                        "time": 28,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0028_.jpg"
                    }, {
                        "time": 38,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0038_.jpg"
                    }, {
                        "time": 51,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0051_.jpg"
                    }, {
                        "time": 75,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0075_.jpg"
                    }, {
                        "time": 104,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0104_.jpg"
                    }, {
                        "time": 132,
                        "photoSrc": "images/photo/B鹿野品茶/PT0028品茶 連婀娜 連記茶莊/PT0030連記茶莊特色茶/PT0030_0132_.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "民宿介紹"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍芳茶園_雨天室內熱風萎凋") {
        serverData = {
            "name": "龍芳茶園",
            "subtitle": "雨天室內熱風萎凋",
            "location": "https://goo.gl/maps/tFEjjQXufWG2",
            "intro": "龍芳茶園位於台東縣鹿野鄉龍田村光榮路上，由目前的經營者廖柏涵的父親廖坤金先生於民國81年創立，原收購茶農種植茶葉製作，十年前因鹿野茶區農民改種其他作物茶葉產量銳減，父親決定自己種植、製作，每天辛勤地在茶廠農田間奔波，至今已種植二十多甲茶樹成為鹿野茶區少數僅存的製茶廠也是最大的製茶廠獲獎無數。",
            "speaker": {
                "name": "廖柏涵",
                "photo": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031_icon.jpg",
                "resume": ["第二代經營者"],
                "intro": "大家好，我是龍芳茶園的第二代經營者廖柏涵，目前和家人一起經營龍芳茶園，歡迎遊客來品茶、體驗我們的產品和服務！",
                "videoUrl": "https://www.youtube.com/embed/H6bJZmdQmN8",
                "homeNumber": "",
                "phoneNumber": "09 8790 8708",
                "FBUrl": "https://www.facebook.com/longfangtea/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT06品茶 廖柏涵 2017-03-26 龍芳茶園/PT06品茶 廖柏涵 2017-03-26 龍芳茶園A雨天室內熱風萎凋.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0200_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0201_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0202_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0203_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0204_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0205_.jpg"
                    },
                ],
            },
            "moreAudio": ["室外日光萎凋場", "雨天製程", "殺菁揉茶", "金萱紅烏龍一心二葉", "體驗遊程"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍芳茶園_室外日光萎凋場") {
        serverData = {
            "name": "龍芳茶園",
            "subtitle": "室外日光萎凋場",
            "location": "https://goo.gl/maps/tFEjjQXufWG2",
            "intro": "",
            "speaker": {
                "name": "廖柏涵",
                "photo": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031_icon.jpg",
                "resume": ["第二代經營者"],
                "intro": "大家好，我是龍芳茶園的第二代經營者廖柏涵，目前和家人一起經營龍芳茶園，歡迎遊客來品茶、體驗我們的產品和服務！",
                "videoUrl": "https://www.youtube.com/embed/H6bJZmdQmN8",
                "homeNumber": "",
                "phoneNumber": "09 8790 8708",
                "FBUrl": "https://www.facebook.com/longfangtea/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT06品茶 廖柏涵 2017-03-26 龍芳茶園/PT06品茶 廖柏涵 2017-03-26 龍芳茶園B室外日光萎凋場.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0206_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0207_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0208_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0209_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0210_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0211_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0212_.jpg"
                    },
                ],
            },
            "moreAudio": ["雨天室內熱風萎凋", "雨天製程", "殺菁揉茶", "金萱紅烏龍一心二葉", "體驗遊程"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍芳茶園_雨天製程") {
        serverData = {
            "name": "龍芳茶園",
            "subtitle": "雨天製程",
            "location": "https://goo.gl/maps/tFEjjQXufWG2",
            "intro": "",
            "speaker": {
                "name": "廖柏涵",
                "photo": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031_icon.jpg",
                "resume": ["第二代經營者"],
                "intro": "大家好，我是龍芳茶園的第二代經營者廖柏涵，目前和家人一起經營龍芳茶園，歡迎遊客來品茶、體驗我們的產品和服務！",
                "videoUrl": "https://www.youtube.com/embed/H6bJZmdQmN8",
                "homeNumber": "",
                "phoneNumber": "09 8790 8708",
                "FBUrl": "https://www.facebook.com/longfangtea/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT06品茶 廖柏涵 2017-03-26 龍芳茶園/PT06品茶 廖柏涵 2017-03-26 龍芳茶園C雨天製程.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0213_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0214_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0214_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0216_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0217_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0225_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0219_.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0220_.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0221_.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0222_.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0223_.jpg"
                    },
                ],
            },
            "moreAudio": ["雨天室內熱風萎凋", "室外日光萎凋場", "殺菁揉茶", "金萱紅烏龍一心二葉", "體驗遊程"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍芳茶園_殺菁揉茶") {
        serverData = {
            "name": "龍芳茶園",
            "subtitle": "殺菁揉茶",
            "location": "https://goo.gl/maps/tFEjjQXufWG2",
            "intro": "",
            "speaker": {
                "name": "廖柏涵",
                "photo": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031_icon.jpg",
                "resume": ["第二代經營者"],
                "intro": "大家好，我是龍芳茶園的第二代經營者廖柏涵，目前和家人一起經營龍芳茶園，歡迎遊客來品茶、體驗我們的產品和服務！",
                "videoUrl": "https://www.youtube.com/embed/H6bJZmdQmN8",
                "homeNumber": "",
                "phoneNumber": "09 8790 8708",
                "FBUrl": "https://www.facebook.com/longfangtea/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT06品茶 廖柏涵 2017-03-26 龍芳茶園/PT06品茶 廖柏涵 2017-03-26 龍芳茶園D殺菁揉茶.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0226_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0227_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0228_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0229_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0230_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0231_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0232_.jpg"
                    },
                ],
            },
            "moreAudio": ["雨天室內熱風萎凋", "室外日光萎凋場", "雨天製程", "金萱紅烏龍一心二葉", "體驗遊程"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍芳茶園_金萱紅烏龍一心二葉") {
        serverData = {
            "name": "龍芳茶園",
            "subtitle": "金萱紅烏龍一心二葉",
            "location": "https://goo.gl/maps/tFEjjQXufWG2",
            "intro": "",
            "speaker": {
                "name": "廖柏涵",
                "photo": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031_icon.jpg",
                "resume": ["第二代經營者"],
                "intro": "大家好，我是龍芳茶園的第二代經營者廖柏涵，目前和家人一起經營龍芳茶園，歡迎遊客來品茶、體驗我們的產品和服務！",
                "videoUrl": "https://www.youtube.com/embed/H6bJZmdQmN8",
                "homeNumber": "",
                "phoneNumber": "09 8790 8708",
                "FBUrl": "https://www.facebook.com/longfangtea/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT06品茶 廖柏涵 2017-03-26 龍芳茶園/PT06品茶 廖柏涵 2017-03-26 龍芳茶園E金萱紅烏龍一心二葉.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0233_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0234_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0235_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0236_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0240_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0238_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0239_.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0240_.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0241_.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0220_.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0221_.jpg"
                    },{
                        "time": 110,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0222_.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0223_.jpg"
                    },{
                        "time": 130,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0224_.jpg"
                    },
                ],
            },
            "moreAudio": ["雨天室內熱風萎凋", "室外日光萎凋場", "雨天製程", "殺菁揉茶", "體驗遊程"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍芳茶園_體驗遊程") {
        serverData = {
            "name": "龍芳茶園",
            "subtitle": "體驗遊程",
            "location": "https://goo.gl/maps/tFEjjQXufWG2",
            "intro": "",
            "speaker": {
                "name": "廖柏涵",
                "photo": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031_icon.jpg",
                "resume": ["第二代經營者"],
                "intro": "大家好，我是龍芳茶園的第二代經營者廖柏涵，目前和家人一起經營龍芳茶園，歡迎遊客來品茶、體驗我們的產品和服務！",
                "videoUrl": "https://www.youtube.com/embed/H6bJZmdQmN8",
                "homeNumber": "",
                "phoneNumber": "09 8790 8708",
                "FBUrl": "https://www.facebook.com/longfangtea/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT06品茶 廖柏涵 2017-03-26 龍芳茶園/PT06品茶 廖柏涵 2017-03-26 龍芳茶園F體驗遊程.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0205_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0206_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0207_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0208_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0209_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0210_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT06品茶 廖柏涵 龍芳茶園/PT0031雨天室內熱風萎凋/DSC_0211_.jpg"
                    },
                ],
            },
            "moreAudio": ["雨天室內熱風萎凋", "室外日光萎凋場", "雨天製程", "殺菁揉茶", "金萱紅烏龍一心二葉"],
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "碧蘿園_曬菁、炒茶") {
        serverData = {
            "name": "碧蘿園",
            "subtitle": "曬菁、炒茶",
            "location": "https://goo.gl/maps/zcZUtkR4Q6Q2",
            "intro": "碧蘿園至今已經有25個年頭，10餘年來銷售全國各地，培養不少老主顧，算是福鹿茶區內較具規模的茶工廠。舉凡烏龍、大葉烏龍、金萱、翠玉、蜜香紅茶及蜜香綠茶皆有生產。近年戮力推動紅烏龍茶的增生與品質提升，希望大家多多支持純屬於台灣好茶的特色茶品種「紅烏龍」！",
            "speaker": {
                "name": "郭敬緯",
                "photo": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_icon.jpg",
                "resume": ["第二代經營者"],
                "intro": "大家好，我是郭敬緯，歡迎來碧蘿園喝免費的茶，來試試我們不同做法、不同茶種的茶，您可以一一的試喝、品嘗。我們是親自種茶、親自製作的製茶廠，所以能提供各種不同茶品的選擇，此外也有DIY體驗。我們的茶園就在茶廠附近，希望大家來鹿野、龍田這裡走走的時候，可以來我們這裡深入瞭解一下茶的製作過程，彼此交流、切磋。",
                "videoUrl": "https://www.youtube.com/embed/kiUIazy43uw",
                "homeNumber": "089 550 339",
                "phoneNumber": "",
                "FBUrl": "https://www.facebook.com/beeloutea/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT07品茶 郭敬緯 2017-06-30 碧蘿園曬菁炒茶.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0000.jpg"
                    },{
                        "time": 8,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0008.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0015.jpg"
                    },{
                        "time": 22,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0022.jpg"
                    },{
                        "time": 28,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0028.jpg"
                    },{
                        "time": 34,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0034.jpg"
                    },{
                        "time": 43,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0043.jpg"
                    },{
                        "time": 53,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0053.jpg"
                    },{
                        "time": 76,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0076.jpg"
                    },{
                        "time": 85,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0085.jpg"
                    },{
                        "time": 103,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0103.jpg"
                    },{
                        "time": 113,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0113.jpg"
                    },{
                        "time": 123,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0123.jpg"
                    },{
                        "time": 134,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0134.jpg"
                    },{
                        "time": 155,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0155.jpg"
                    },{
                        "time": 180,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0180.jpg"
                    },{
                        "time": 189,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0189.jpg"
                    },{
                        "time": 205,
                        "photoSrc": "images/photo/B鹿野品茶/PT07品茶 郭敬緯 碧蘿園曬菁炒茶/PT0077_0205.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "博雅齋",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "博雅齋_簡介") {
        serverData = {
            "name": "博雅齋",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/fffyAygvT182",
            "intro": "博雅齋店內高雅的古董原木家具滿室生香，再加上清新的茶香，讓人恍若置身宮廷品茶。樂觀真誠的女主人吳秋伶專注於茶事，樸實低調，一路走來，認真態度始終如一。",
            "speaker": {
                "name": "吳秋伶",
                "photo": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_icon.jpg",
                "resume": ["女主人"],
                "intro": "大家好，我是博雅齋的女主人吳秋伶，我們在這邊經營茶葉已經有30年，我們是一間融合茶葉與古董的人文茶館。您可以來這邊體會空間的氛圍，茶席的擺設和茶葉的種類，來感受博雅齋的人文氣質。博雅齋的紅烏龍在2017年得到比利時米其林美食評鑑的最高榮譽三星獎，我們歡迎各位來博雅齋品嘗這個享譽國際的得獎茶！",
                "videoUrl": "https://www.youtube.com/embed/J5JHO94wOaE",
                "homeNumber": "089 322 933",
                "phoneNumber": "09 3298 2456",
                "FBUrl": "http://www.322933.com.tw/"
            },
            "audio": {
                "src": "audio/B鹿野品茶/PT08品茶 吳秋伶 2017-06-29 博雅齋人文自然茶葉公司.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0000.jpg"
                    },{
                        "time": 14,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0014.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0020.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0030.jpg"
                    },{
                        "time": 37,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0037.jpg"
                    },{
                        "time": 45,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0045.jpg"
                    },{
                        "time": 52,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0052.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/B鹿野品茶/PT08品茶 吳秋伶 博雅齋人文自然茶葉公司/PT0078_0060.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍谷茶園",
                    subtitle: "簡介"
                }, {
                    title: "福鹿山休閒農莊",
                    subtitle: "簡介"
                }, {
                    title: "厚生茶園",
                    subtitle: "簡介"
                }, {
                    title: "永安茶園",
                    subtitle: "簡介"
                }, {
                    title: "連記茶莊",
                    subtitle: "簡介"
                }, {
                    title: "龍芳茶園",
                    subtitle: "雨天室內熱風萎凋"
                }, {
                    title: "碧蘿園",
                    subtitle: "曬菁、炒茶"
                },
            ],
        };
    } else if (param == "龍田村_龍田西門町") {
        serverData = {
            "name": "龍田村",
            "subtitle": "龍田西門町",
            "location": "https://goo.gl/maps/T9xCUTaJ7Bp",
            "intro": "為什麼叫龍田西門町呢？因為我們這個村莊曾經是新移民的天堂，大約在一百年前被日本人相中，因此曾經有多達一千三百多個日本移民到這裡，龍田村可說是當時最大的移民村。最近這十幾年，陸陸續續有好多來自各個都會地區的人移居到這裡，大家都發現龍田的美好，甚至吸引年輕人在這裡定居、從事友善耕種或有機、或無毒耕種的農業生活。因為越來越多人喜歡這裡，所以從龍田活動中心一直到鹿野區役場這一段路，吸引很多旅客慢走、慢遊，有時候人潮一多，會誤以為這裡像是台北的西門町，這其實是一種誇張、有趣的形容而已。",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 A龍田西門町.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0000_.jpg"
                    },{
                        "time": 9,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0009_.jpg"
                    },{
                        "time": 16,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0016_.jpg"
                    },{
                        "time": 22,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0022_.jpg"
                    },{
                        "time": 33,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0033_.jpg"
                    },{
                        "time": 42,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0042_.jpg"
                    },{
                        "time": 64,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0064_.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0100_.jpg"
                    },{
                        "time": 129,
                        "photoSrc": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_0129_.jpg"
                    },
                ],
            },
            "moreAudio": ["特色概覽", "概覽"],
            "neighView": [
                {
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍田村_特色概覽") {
        serverData = {
            "name": "龍田村",
            "subtitle": "特色概覽",
            "location": "https://goo.gl/maps/T9xCUTaJ7Bp",
            "intro": "龍田村有好多特色，這個位置是日本人發現的，當時開闢了棋盤式農田，造就現在很整齊的街道，形成很豐富的農產、自然景觀。從鹿野高台飛行傘場遠眺、俯瞰龍田村，就可以看出這裡的棋盤式農田和街道區廓。花東縱谷管理處在這裡設置一個飛行傘的降落場，這個龍田大草原是一個大家可以休閒、放鬆的地方。推動單車導覽的阿度的店曾經在北三路的小葉欖仁綠色隧道創下千人躺馬路的話題並且帶動風潮。",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 E龍田特色概覽.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0000.jpg"
                    },{
                        "time": 8,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0008.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0015.jpg"
                    },{
                        "time": 23,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0023.jpg"
                    },{
                        "time": 33,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0033.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0040.jpg"
                    },{
                        "time": 46,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0046.jpg"
                    },{
                        "time": 52,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0052.jpg"
                    },{
                        "time": 62,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0062.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0070.jpg"
                    },{
                        "time": 77,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0077.jpg"
                    },{
                        "time": 86,
                        "photoSrc": "images/photo/C龍田逛逛/LT0038龍田 邱樹蘭 E龍田特色概覽/LT0038_0086.jpg"
                    },
                ],
            },
            "moreAudio": ["龍田西門町", "概覽"],
            "neighView": [
                {
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍田村_概覽") {
        serverData = {
            "name": "龍田村",
            "subtitle": "概覽",
            "location": "https://goo.gl/maps/T9xCUTaJ7Bp",
            "intro": "龍田村地名的由來，要追溯到日本統治台灣50年的歷史。在日本統治台灣的末期，為了把台灣人變成日本的子民－皇民，因此頒布了一個內地延長主義的移民政策，在那個年代，從日本內地移民過來的日本人在這邊定居，從哪邊移民過來，地名就用哪邊的。所以從日本龍田地區移民過來的人，這邊的地名就叫做龍田。因此龍田村過去是一個很傳統的日本移民村，從它建造成田字型的樣子就可以看出這個特徵。龍田村的光榮路正代表著日本軍國主義的光榮，不願苟且偷生，要光榮赴死的精神。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-07-01 韋立琦 龍田村/L00龍田 韋立琦 2017-07-01 龍田村.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0039龍田 韋立琦 龍田村概覽/LT0039_0000.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0039龍田 韋立琦 龍田村概覽/LT0039_0015.jpg"
                    },{
                        "time": 28,
                        "photoSrc": "images/photo/C龍田逛逛/LT0039龍田 韋立琦 龍田村概覽/LT0039_0028.jpg"
                    },{
                        "time": 45,
                        "photoSrc": "images/photo/C龍田逛逛/LT0039龍田 韋立琦 龍田村概覽/LT0039_0045.jpg"
                    },{
                        "time": 55,
                        "photoSrc": "images/photo/C龍田逛逛/LT0039龍田 韋立琦 龍田村概覽/LT0039_0055.jpg"
                    },
                ],
            },
            "moreAudio": ["龍田西門町", "特色概覽"],
            "neighView": [
                {
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "茶葉改良場台東分場_茶葉改良場與鹿野茶") {
        serverData = {
            "name": "茶葉改良場台東分場",
            "subtitle": "茶葉改良場與鹿野茶",
            "location": "https://goo.gl/maps/r9WL9TpNZYu",
            "intro": "翠蝶園從蝴蝶生態至工藝發展與藝術創作至今，以營造蝴蝶花園的自然生態提供一個戶外教學的環境，讓遊客更深一層的認識蝴蝶生態之美與多變的蝴蝶世界，此外還有檳榔葉鞘的手創工藝品與植物種子DIY等體驗活動。",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 F茶葉改良場與鹿野茶.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0040龍田 邱樹蘭 F茶葉改良場與鹿野茶/LT0040_0000.jpg"
                    },{
                        "time": 16,
                        "photoSrc": "images/photo/C龍田逛逛/LT0040龍田 邱樹蘭 F茶葉改良場與鹿野茶/LT0040_0016.jpg"
                    },{
                        "time": 24,
                        "photoSrc": "images/photo/C龍田逛逛/LT0040龍田 邱樹蘭 F茶葉改良場與鹿野茶/LT0040_0024.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0040龍田 邱樹蘭 F茶葉改良場與鹿野茶/LT0040_0030.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_概覽") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "概覽",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "鹿野區役場翻成現代的白話來說，也就是現在的鹿野鄉公所，經過龍田社區發展協會及在地居民的合力整修，把舊有的房舍復原，現在變成文化建築，裡頭也保留了一些文物。到了連續假期的時候還會舉辦「連假市集」，大部分販售的東西是自己栽種的、無毒的、在地的食材，大家如果有時間也可以來捧捧場，來看看這裡的歷史文物。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-07-01 韋立琦 龍田村/LT0041龍田 韋立琦 2017-07-01 鹿野區役場M.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0041龍田 韋立琦 鹿野區役場/LT0041_0000_.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0041龍田 韋立琦 鹿野區役場/LT0041_0015_.jpg"
                    },{
                        "time": 22,
                        "photoSrc": "images/photo/C龍田逛逛/LT0041龍田 韋立琦 鹿野區役場/LT0041_0022_.jpg"
                    },{
                        "time": 28,
                        "photoSrc": "images/photo/C龍田逛逛/LT0041龍田 韋立琦 鹿野區役場/LT0041_0028_.jpg"
                    },{
                        "time": 35,
                        "photoSrc": "images/photo/C龍田逛逛/LT0041龍田 韋立琦 鹿野區役場/LT0041_0035_.jpg"
                    },{
                        "time": 42,
                        "photoSrc": "images/photo/C龍田逛逛/LT0041龍田 韋立琦 鹿野區役場/LT0041_0042_.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_龍眼樹平台與構想") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "龍眼樹平台與構想",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)1龍眼樹平台與構想.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1034_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1035_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1036_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1037_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1038_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1039_00.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1040_00.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1041_00.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1042_00.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1043_00.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1044_00.jpg"
                    },
                ],
            },
            "moreAudio": ["修繕防潮工事", "建築特殊性", "室內介紹", "救屋始末", "連假市集", "烤窯與工具間"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_修繕防潮工事") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "修繕防潮工事",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)2修繕防潮工事.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1045_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1047_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1048_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1049_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1051_00.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1053_00.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1054_00.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 110,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1035_00.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1057_00.jpg"
                    },
                ],
            },
            "moreAudio": ["龍眼樹平台與構想", "建築特殊性", "室內介紹", "救屋始末", "連假市集", "烤窯與工具間"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_建築特殊性") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "建築特殊性",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)3建築特殊性.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1045_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1047_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1048_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1049_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1051_00.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1053_00.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1054_00.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 110,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1035_00.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1057_00.jpg"
                    },
                ],
            },
            "moreAudio": ["龍眼樹平台與構想", "修繕防潮工事", "室內介紹", "救屋始末", "連假市集", "烤窯與工具間"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_室內介紹") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "室內介紹",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)4室內介紹.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0000_.jpg"
                    },{
                        "time": 8,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0008_.jpg"
                    },{
                        "time": 21,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0021_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0030_.jpg"
                    },{
                        "time": 38,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0038_.jpg"
                    },{
                        "time": 45,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0045_.jpg"
                    },{
                        "time": 72,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0072_.jpg"
                    },{
                        "time": 88,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045龍田 輝哥 4區役場室內介紹(臺語)/LT0045_0088_.jpg"
                    },
                ],
            },
            "moreAudio": ["龍眼樹平台與構想", "修繕防潮工事", "建築特殊性", "救屋始末", "連假市集", "烤窯與工具間"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_救屋始末") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "救屋始末",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)5救屋始末.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1034_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1035_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1036_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1037_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1038_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1039_00.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1040_00.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1041_00.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1042_00.jpg"
                    }
                ],
            },
            "moreAudio": ["龍眼樹平台與構想", "修繕防潮工事", "建築特殊性", "室內介紹", "連假市集", "烤窯與工具間"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_論地租") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "論地租",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)6論地租.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1045_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1047_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1048_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1049_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1051_00.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1053_00.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1054_00.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 110,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1035_00.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1057_00.jpg"
                    },
                ],
            },
            "moreAudio": ["龍眼樹平台與構想", "修繕防潮工事", "建築特殊性", "室內介紹", "救屋始末", "連假市集", "烤窯與工具間"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_連假市集") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "連假市集",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)7連假市集.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0000_.jpg"
                    },{
                        "time": 35,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0035_.jpg"
                    },{
                        "time": 55,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0055_.jpg"
                    },{
                        "time": 65,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0065_.jpg"
                    },{
                        "time": 75,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0075_.jpg"
                    },{
                        "time": 92,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0092_.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0120_.jpg"
                    },{
                        "time": 135,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0135_.jpg"
                    },{
                        "time": 150,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0150_.jpg"
                    },{
                        "time": 165,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0165_.jpg"
                    },{
                        "time": 175,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0048龍田 輝哥 7區役場連假市集(臺語)/LT0048_0175_.jpg"
                    },
                ],
            },
            "moreAudio": ["龍眼樹平台與構想", "修繕防潮工事", "建築特殊性", "室內介紹", "救屋始末", "烤窯與工具間"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿野區役場_烤窯與工具間") {
        serverData = {
            "name": "鹿野區役場",
            "subtitle": "烤窯與工具間",
            "location": "https://goo.gl/maps/NGuAbWY4sYs",
            "intro": "這間老屋才是真正的主角，從1922年建成至今已經95年。我們很單純的想法就是讓區役場留下來，讓它變成社會共同的資產，可以傳承給後代，讓後人了解這個地方，這才是這個場域最重要的價值。",
            "speaker": {
                "name": "輝哥",
                "photo": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/LT0045_icon 輝哥.jpg",
                "resume": ["修繕義工"],
                "intro": "輝哥與許多自發響應鹿野區役場修繕的居民一起在龍田生活至今。",
                "videoUrl": "",
                "homeNumber": "089 551 485",
                "phoneNumber": "",
                "FBUrl": "https://goo.gl/HFhhXD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L02龍田 輝哥 2017-06-29 鹿野區役場/龍田 輝哥 2017-06-29 11-52 區役場(臺語)8烤窯與工具間.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1045_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1047_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1048_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1049_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1051_00.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1046_00.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1053_00.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1054_00.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1055_00.jpg"
                    },{
                        "time": 110,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1035_00.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/C龍田逛逛/LT0042 龍田 輝哥 鹿野區役場/DSCN1057_00.jpg"
                    },
                ],
            },
            "moreAudio": ["龍眼樹平台與構想", "修繕防潮工事", "建築特殊性", "室內介紹", "救屋始末", "連假市集"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "老鄉長日式寓所(邱仁銘宅)_簡介") {
        serverData = {
            "name": "老鄉長日式寓所(邱仁銘宅)",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/YNN4Wkh5pBn",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 老鄉長日式民宅.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0050龍田 邱樹蘭 老鄉長日式寓所/LT0050_0000_.jpg"
                    },{
                        "time": 5,
                        "photoSrc": "images/photo/C龍田逛逛/LT0050龍田 邱樹蘭 老鄉長日式寓所/LT0050_0005_.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0050龍田 邱樹蘭 老鄉長日式寓所/LT0050_0015_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0050龍田 邱樹蘭 老鄉長日式寓所/LT0050_0020_.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "紅茶食堂_介紹") {
        serverData = {
            "name": "紅茶食堂",
            "subtitle": "介紹",
            "location": "https://goo.gl/maps/siV77Pd5mgL2",
            "intro": "我喜歡有我自己的理念和個性，每個環節每個細項都親身去要求，紅茶食堂沒有很華麗的裝潢，但卻可以給人溫馨的感覺。與其賺大錢，不如讓我快樂又充實的過生活。工作不是生命的全部，但是可以透過工作去分享我的人生。",
            "speaker": {
                "name": "紅茶",
                "photo": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/LT0051_icon.jpg",
                "resume": ["老闆"],
                "intro": "大家好，我是紅茶食堂的老闆，我來自台中，會來台東龍田是因為喜歡這裡的環境。我本身很喜歡分享，開設紅茶食堂正是希望這裡成為一個分享的空間，餐飲則是分享的一種橋梁，希望藉由餐飲和進來這裡的遊客分享我們在台東的生活點滴和體驗，我們也很樂意聽聽客人的經驗談。也就是說，藉由這個空間和食物讓我們可以和來訪的人多多聊天，聽聽彼此的故事。",
                "videoUrl": "",
                "homeNumber": "",
                "phoneNumber": "09 2667 0607",
                "FBUrl": "https://www.facebook.com/blacktea.canteen/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L03B龍田 紅茶老闆 2017-06-29 紅茶食堂.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1012_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1013_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1016_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1018_.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1019_.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1022_.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1023_.jpg"
                    },{
                        "time": 140,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1024_.jpg"
                    },{
                        "time": 160,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1025_.jpg"
                    },{
                        "time": 180,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1026_.jpg"
                    },{
                        "time": 200,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1029_.jpg"
                    },{
                        "time": 220,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1030_.jpg"
                    },{
                        "time": 240,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1032_.jpg"
                    },{
                        "time": 260,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1033_.jpg"
                    },{
                        "time": 280,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1652_.jpg"
                    },{
                        "time": 300,
                        "photoSrc": "images/photo/C龍田逛逛/LT0051龍田 紅茶老闆 紅茶食堂/DSCN1653_.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "阿榮甘仔店_簡介") {
        serverData = {
            "name": "阿榮甘仔店",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/xUnqrBNUQNH2",
            "intro": "我們家從我小的時候就在這裡，這間甘仔店原本是阿嬤的雜貨店，那時候店裡賣的就是菸酒、小糖果這類的東西。後來因為阿嬤身體不好，收起來不做生意之後，爸媽和我就接手把它改造成現在這個樣子。2013年的時候，有一位年輕的女生來我們的農場打工換宿，她提出一個構想，想要做這樣一間集合友善土地與農產品的店，於是她在和我們家人商量之後，我們家提供店面，由她擔任店長，我們就一起合開了這間店面。後來那位店長出國深造了，現在由我們自己家顧這個店面，店內的產品比以前多了很多，都是一些我們自己認識的農夫們所種的農產品，大多是友善土地耕作的。",
            "speaker": {
                "name": "張一鳴",
                "photo": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052_icon.jpg",
                "resume": ["阿鳴", "老闆阿榮的大兒子", ""],
                "intro": "大家好，我是張一鳴，這裡是阿榮甘仔店，阿榮是我爸爸，這間店以前是阿嬤的甘仔店，後來阿嬤休息不做之後，我們就把它重新裝潢改造成現在這個樣子。店裡現在有很多友善土地的產品，如果你來剛好遇到我，我們可以一起泡茶聊天，我可以跟你分享這些產品背後的故事，如果你對田裡的生活有興趣的話，我可以帶你去參觀我們的田，也歡迎你參加我們的打工換宿。如果你帶國外的朋友來，我可以用簡單的英文跟外國朋友介紹我們村莊。龍田村是一個很漂亮的地方，歡迎你們有空來這邊走一走、玩一玩，再來我們店裡看一看，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/VWLq0Kb7y0s",
                "homeNumber": "",
                "phoneNumber": "09 1017 6827",
                "FBUrl": "https://www.facebook.com/friendlygrocery/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L04龍田 張一鳴 2017-07-14 A阿榮甘仔店/L04龍田 張一鳴 2017-07-14 A阿榮甘仔店簡介.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0000.jpg"
                    },{
                        "time": 5,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0005.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0020.jpg"
                    },{
                        "time": 32,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0032.jpg"
                    },{
                        "time": 42,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0042.jpg"
                    },{
                        "time": 49,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0049.jpg"
                    },{
                        "time": 55,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0055.jpg"
                    },{
                        "time": 61,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0061.jpg"
                    },{
                        "time": 67,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0067.jpg"
                    },{
                        "time": 72,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0072.jpg"
                    },{
                        "time": 83,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0083.jpg"
                    },{
                        "time": 89,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0089.jpg"
                    },{
                        "time": 95,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0095.jpg"
                    },{
                        "time": 103,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0103.jpg"
                    },{
                        "time": 112,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0112.jpg"
                    },{
                        "time": 118,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0118.jpg"
                    },{
                        "time": 130,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0130.jpg"
                    },{
                        "time": 136,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0136.jpg"
                    },{
                        "time": 143,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0143.jpg"
                    },{
                        "time": 150,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0150.jpg"
                    },{
                        "time": 156,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052龍田 張一鳴 A阿榮甘仔店簡介/LT0052_0156.jpg"
                    },
                ],
            },
            "moreAudio": ["老屋故事", "打工換宿", "鳳梨乾製作"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "阿榮甘仔店_老屋故事") {
        serverData = {
            "name": "阿榮甘仔店",
            "subtitle": "老屋故事",
            "location": "https://goo.gl/maps/xUnqrBNUQNH2",
            "intro": "",
            "speaker": {
                "name": "張一鳴",
                "photo": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052_icon.jpg",
                "resume": ["阿鳴", "老闆阿榮的大兒子", ""],
                "intro": "大家好，我是張一鳴，這裡是阿榮甘仔店，阿榮是我爸爸，這間店以前是阿嬤的甘仔店，後來阿嬤休息不做之後，我們就把它重新裝潢改造成現在這個樣子。店裡現在有很多友善土地的產品，如果你來剛好遇到我，我們可以一起泡茶聊天，我可以跟你分享這些產品背後的故事，如果你對田裡的生活有興趣的話，我可以帶你去參觀我們的田，也歡迎你參加我們的打工換宿。如果你帶國外的朋友來，我可以用簡單的英文跟外國朋友介紹我們村莊。龍田村是一個很漂亮的地方，歡迎你們有空來這邊走一走、玩一玩，再來我們店裡看一看，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/VWLq0Kb7y0s",
                "homeNumber": "",
                "phoneNumber": "09 1017 6827",
                "FBUrl": "https://www.facebook.com/friendlygrocery/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L04龍田 張一鳴 2017-07-14 A阿榮甘仔店/L04龍田 張一鳴 2017-07-14 B阿榮甘仔店老屋故事.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1674_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1677_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1686_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1690_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1694_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1697_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1699_.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1700_.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "打工換宿", "鳳梨乾製作"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "阿榮甘仔店_打工換宿") {
        serverData = {
            "name": "阿榮甘仔店",
            "subtitle": "打工換宿",
            "location": "https://goo.gl/maps/xUnqrBNUQNH2",
            "intro": "",
            "speaker": {
                "name": "張一鳴",
                "photo": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052_icon.jpg",
                "resume": ["阿鳴", "老闆阿榮的大兒子", ""],
                "intro": "大家好，我是張一鳴，這裡是阿榮甘仔店，阿榮是我爸爸，這間店以前是阿嬤的甘仔店，後來阿嬤休息不做之後，我們就把它重新裝潢改造成現在這個樣子。店裡現在有很多友善土地的產品，如果你來剛好遇到我，我們可以一起泡茶聊天，我可以跟你分享這些產品背後的故事，如果你對田裡的生活有興趣的話，我可以帶你去參觀我們的田，也歡迎你參加我們的打工換宿。如果你帶國外的朋友來，我可以用簡單的英文跟外國朋友介紹我們村莊。龍田村是一個很漂亮的地方，歡迎你們有空來這邊走一走、玩一玩，再來我們店裡看一看，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/VWLq0Kb7y0s",
                "homeNumber": "",
                "phoneNumber": "09 1017 6827",
                "FBUrl": "https://www.facebook.com/friendlygrocery/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L04龍田 張一鳴 2017-07-14 A阿榮甘仔店/L04龍田 張一鳴 2017-07-14 C阿榮甘仔店打工換宿.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1674_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1677_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1686_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1690_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1694_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1697_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1699_.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0053阿榮甘仔店老屋故事/DSCN1700_.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "老屋故事", "鳳梨乾製作"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "阿榮甘仔店_鳳梨乾製作") {
        serverData = {
            "name": "阿榮甘仔店",
            "subtitle": "鳳梨乾製作",
            "location": "https://goo.gl/maps/xUnqrBNUQNH2",
            "intro": "",
            "speaker": {
                "name": "張一鳴",
                "photo": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0052_icon.jpg",
                "resume": ["阿鳴", "老闆阿榮的大兒子", ""],
                "intro": "大家好，我是張一鳴，這裡是阿榮甘仔店，阿榮是我爸爸，這間店以前是阿嬤的甘仔店，後來阿嬤休息不做之後，我們就把它重新裝潢改造成現在這個樣子。店裡現在有很多友善土地的產品，如果你來剛好遇到我，我們可以一起泡茶聊天，我可以跟你分享這些產品背後的故事，如果你對田裡的生活有興趣的話，我可以帶你去參觀我們的田，也歡迎你參加我們的打工換宿。如果你帶國外的朋友來，我可以用簡單的英文跟外國朋友介紹我們村莊。龍田村是一個很漂亮的地方，歡迎你們有空來這邊走一走、玩一玩，再來我們店裡看一看，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/VWLq0Kb7y0s",
                "homeNumber": "",
                "phoneNumber": "09 1017 6827",
                "FBUrl": "https://www.facebook.com/friendlygrocery/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L04龍田 張一鳴 2017-07-14 A阿榮甘仔店/L04龍田 張一鳴 2017-07-14 D阿榮甘仔店鳳梨乾.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0055阿榮甘仔店鳳梨乾製作/DSCN1662_.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0055阿榮甘仔店鳳梨乾製作/DSCN1663_.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0055阿榮甘仔店鳳梨乾製作/DSCN1664_.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0055阿榮甘仔店鳳梨乾製作/DSCN1669_.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0055阿榮甘仔店鳳梨乾製作/DSCN1666_.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0055阿榮甘仔店鳳梨乾製作/DSCN1667_.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0052龍田 張一鳴 阿榮甘仔店/LT0055阿榮甘仔店鳳梨乾製作/DSCN1668_.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "老屋故事", "打工換宿"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "小農田餐酒館_簡介") {
        serverData = {
            "name": "小農田餐酒館",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/JYrAznshPom",
            "intro": "我們取名叫小農田餐酒館是因為跟龍田這個地名諧音，這樣讓大家比較好記，我們希望在這裡做道地的義大利菜，讓遊客到這裡可以享用我們精心選購的酒搭配我們親手料理的美食，這也是一種義大利很普遍的飲食文化，我們希望把它引進台東，讓大家能夠習慣這種慢食的飲食文化。",
            "speaker": {
                "name": "恰克",
                "photo": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_icon.jpg",
                "resume": ["老闆"],
                "intro": "Hello! 大家好！我是恰克，來到龍田已經一年多了，因為非常喜歡義大利菜所以來到龍田開設這家義大利餐廳。曾經在義大利生活了半年，學到了正統義大利菜的料理方式，希望將這項技藝帶到這裡，跟大家分享。龍田這個地方很漂亮，我很喜歡這裡的環境，有別於西部或是大城市，因此想要在這裡落腳，歡迎大家到裡來的時候，可以進來小農田聊聊，或是來這裡小酌幾杯，跟我們大家交個朋友，謝謝！",
                "videoUrl": "https://www.youtube.com/embed/WJl_ZpyokRA",
                "homeNumber": "",
                "phoneNumber": "09 7120 1258",
                "FBUrl": "https://goo.gl/7TdSvD"
            },
            "audio": {
                "src": "audio/C龍田逛逛/LT05龍田 恰克 2017-07-08 小農田餐酒館.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0000.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0010.jpg"
                    },{
                        "time": 17,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0017.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0020.jpg"
                    },{
                        "time": 36,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0036.jpg"
                    },{
                        "time": 46,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0046.jpg"
                    },{
                        "time": 66,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0066.jpg"
                    },{
                        "time": 74,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0074.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0080.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0090.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0100.jpg"
                    },{
                        "time": 113,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0113.jpg"
                    },{
                        "time": 123,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0123.jpg"
                    },{
                        "time": 150,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0150.jpg"
                    },{
                        "time": 159,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0159.jpg"
                    },{
                        "time": 166,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0166.jpg"
                    },{
                        "time": 172,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0172.jpg"
                    },{
                        "time": 177,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0177.jpg"
                    },{
                        "time": 181,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0181.jpg"
                    },{
                        "time": 188,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0188.jpg"
                    },{
                        "time": 200,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0200.jpg"
                    },{
                        "time": 225,
                        "photoSrc": "images/photo/C龍田逛逛/LT0056龍田 恰克 小農田餐酒館/LT0056_0225.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "翠蝶園_簡介") {
        serverData = {
            "name": "翠蝶園",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/xgKx46kWafL2",
            "intro": "翠蝶園從蝴蝶生態至工藝發展與藝術創作至今，以營造蝴蝶花園的自然生態提供一個戶外教學的環境，讓遊客更深一層的認識蝴蝶生態之美與多變的蝴蝶世界，此外還有檳榔葉鞘的手創工藝品與植物種子DIY等體驗活動。",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L06龍田 邱樹蘭 2017-06-29 翠蝶園/LT0057龍田 邱樹蘭 2017-06-29 翠蝶園簡介.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0000.jpg"
                    },{
                        "time": 7,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0007.jpg"
                    },{
                        "time": 13,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0013.jpg"
                    },{
                        "time": 19,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0019.jpg"
                    },{
                        "time": 25,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0025.jpg"
                    },{
                        "time": 32,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0032.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0040.jpg"
                    },{
                        "time": 49,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0049.jpg"
                    },{
                        "time": 58,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0057翠蝶園簡介/LT0057_0058.jpg"
                    },
                ],
            },
            "moreAudio": ["倒地鈴", "樟樹", "手作體驗", "黃金薏苡串珠", "藍棕梠", "石櫟"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "翠蝶園_倒地鈴") {
        serverData = {
            "name": "翠蝶園",
            "subtitle": "倒地鈴",
            "location": "https://goo.gl/maps/xgKx46kWafL2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L06龍田 邱樹蘭 2017-06-29 翠蝶園/LT06龍田 邱樹蘭 2017-06-29 翠蝶園2倒地鈴.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0058倒地鈴/DSCN1006_00.jpg"
                    },{
                        "time": 5,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0058倒地鈴/DSCN1095_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0058倒地鈴/DSCN1096_00.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0058倒地鈴/DSCN1097_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0058倒地鈴/DSCN1105_00.jpg"
                    },{
                        "time": 25,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0058倒地鈴/DSCN1106_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0058倒地鈴/DSCN1112_00.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "樟樹", "手作體驗", "黃金薏苡串珠", "藍棕梠", "石櫟"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "翠蝶園_樟樹") {
        serverData = {
            "name": "翠蝶園",
            "subtitle": "樟樹",
            "location": "https://goo.gl/maps/xgKx46kWafL2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L06龍田 邱樹蘭 2017-06-29 翠蝶園/LT06龍田 邱樹蘭 2017-06-29 翠蝶園3樟樹.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0059樟樹/DSC_0544_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0059樟樹/DSC_0547_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0059樟樹/DSC_0551_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0059樟樹/DSC_0553_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0059樟樹/DSCN1908_00.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "倒地鈴", "手作體驗", "黃金薏苡串珠", "藍棕梠", "石櫟"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "翠蝶園_手作體驗") {
        serverData = {
            "name": "翠蝶園",
            "subtitle": "手作體驗",
            "location": "https://goo.gl/maps/xgKx46kWafL2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L06龍田 邱樹蘭 2017-06-29 翠蝶園/LT06龍田 邱樹蘭 2017-06-29 翠蝶園手作體驗.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1101_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1107_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1114_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1123_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1126_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1131_00.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1134_00.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1135_00.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0060手作體驗/DSCN1136_00.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "倒地鈴", "樟樹", "黃金薏苡串珠", "藍棕梠", "石櫟"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "翠蝶園_黃金薏苡串珠") {
        serverData = {
            "name": "翠蝶園",
            "subtitle": "黃金薏苡串珠",
            "location": "https://goo.gl/maps/xgKx46kWafL2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L06龍田 邱樹蘭 2017-06-29 翠蝶園/LT06龍田 邱樹蘭 2017-06-29 翠蝶園手作體驗1黃金薏苡串珠.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0061黃金薏苡串珠/DSCN1099_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0061黃金薏苡串珠/DSCN1100_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0061黃金薏苡串珠/DSCN1102_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0061黃金薏苡串珠/DSCN1108_00.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0061黃金薏苡串珠/DSCN1110_00.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0061黃金薏苡串珠/DSCN1111_00.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "倒地鈴", "樟樹", "手作體驗", "藍棕梠", "石櫟"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "翠蝶園_藍棕梠") {
        serverData = {
            "name": "翠蝶園",
            "subtitle": "藍棕梠",
            "location": "https://goo.gl/maps/xgKx46kWafL2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L06龍田 邱樹蘭 2017-06-29 翠蝶園/LT06龍田 邱樹蘭 2017-06-29 翠蝶園手作體驗2藍棕梠.mp3",
                "tags": [
                    {
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0062藍棕梠/DSCN1120_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0062藍棕梠/DSCN1127_00.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0062藍棕梠/DSCN1128_00.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "倒地鈴", "樟樹", "手作體驗", "黃金薏苡串珠", "石櫟"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "翠蝶園_石櫟") {
        serverData = {
            "name": "翠蝶園",
            "subtitle": "石櫟",
            "location": "https://goo.gl/maps/xgKx46kWafL2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L06龍田 邱樹蘭 2017-06-29 翠蝶園/LT06龍田 邱樹蘭 2017-06-29 翠蝶園手作體驗3石櫟.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0063石櫟/DSCN1122_00.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0063石櫟/DSCN1124_00.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0057龍田 邱樹蘭 翠蝶園/LT0063石櫟/DSCN1125_00.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介", "倒地鈴", "樟樹", "手作體驗", "黃金薏苡串珠", "藍棕梠"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "阿度的店_簡介") {
        serverData = {
            "name": "阿度的店",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/zCGFh5hLJWM2",
            "intro": "阿度的店是龍田村吸引許多遊客到訪的重要原因之一，他把腳踏車結合風趣的導覽吸引遊客，往往讓遊客開懷大笑。",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 阿度的店.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0064龍田 邱樹蘭 阿度的店/DSCN1242.jpg"
                    },{
                        "time": 5,
                        "photoSrc": "images/photo/C龍田逛逛/LT0064龍田 邱樹蘭 阿度的店/DSCN1243.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0064龍田 邱樹蘭 阿度的店/DSCN1987.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0064龍田 邱樹蘭 阿度的店/DSCN1989.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0064龍田 邱樹蘭 阿度的店/DSCN1996.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍田國小托兒所_簡介") {
        serverData = {
            "name": "龍田國小托兒所",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/s9GuJJMNs5x",
            "intro": "龍田國小是大約一百年前，日本人在這邊創設的一所國小，當時叫做日本尋常小學，裡面有留下一座校長宿舍，現在已被列入歷史建物，它的旁邊還有另外一棟也是日本蓋的，也就是台灣最早的托兒所，光是在龍田國小，就可以參訪兩間悠久的日式建築。",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L08龍田 邱樹蘭 2017-06-29 龍田國小托兒所.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0065龍田 邱樹蘭 龍田國小托兒所/DSC0536.jpg"
                    },{
                        "time": 5,
                        "photoSrc": "images/photo/C龍田逛逛/LT0065龍田 邱樹蘭 龍田國小托兒所/DSC0539.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0065龍田 邱樹蘭 龍田國小托兒所/DSC0544.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0065龍田 邱樹蘭 龍田國小托兒所/DSC_0087.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0065龍田 邱樹蘭 龍田國小托兒所/DSC_0089.jpg"
                    },{
                        "time": 25,
                        "photoSrc": "images/photo/C龍田逛逛/LT0065龍田 邱樹蘭 龍田國小托兒所/DSCN0988.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "米米娜娜小熊燒_簡介") {
        serverData = {
            "name": "米米娜娜小熊燒",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/S3fehhxd6HE2",
            "intro": "米米娜娜小熊燒在光榮路262號門前擺攤，我們有5種口味，有原味、麻糬、蜂蜜、奶油、巧克力，小熊燒的造型很可愛，很受小朋友喜愛。我們也有販售天然食材和山泉水熬煮的飲料。米米娜娜小熊燒週一到週日全年無休，遊客如果來龍田玩，歡迎到米米娜娜小熊燒吃吃看！",
            "speaker": {
                "name": "小琳",
                "photo": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/LT0066_icon.jpg",
                "resume": ["老闆娘"],
                "intro": "你好！我就是米米娜娜小熊燒的老闆娘，我叫小林，我從小在這邊出生長大，已經生活了30多年，會在這邊擺攤是因為想讓龍田國小的小朋友放學回家的時候有點心可以吃。米米娜娜小熊燒有很多種口味，大家來龍田玩的時候，歡迎到我這裡吃吃看噢！",
                "videoUrl": "https://www.youtube.com/embed/0Mkco-M7Uxg",
                "homeNumber": "",
                "phoneNumber": "",
                "FBUrl": ""
            },
            "audio": {
                "src": "audio/C龍田逛逛/L09A龍田 小林 2017-07-08 米米娜娜小熊燒.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1471.jpg"
                    },{
                        "time": 5,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1472.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1473.jpg"
                    },{
                        "time": 15,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1475.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1476.jpg"
                    },{
                        "time": 25,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1478.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1479.jpg"
                    },{
                        "time": 35,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1480.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0066龍田 小林 米米娜娜小熊燒/DSCN1484.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "古早人ㄟ厝_簡介") {
        serverData = {
            "name": "古早人ㄟ厝",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/nnsYCa8x2K22",
            "intro": "為什麼這裡叫古早人ㄟ厝呢？因為餐廳的房子已經有70多年了，而且是竹子所做的老房子，所以就把這裡取名為古早人的厝。客人來到這裡最喜歡吃的菜餚，有我用肉桂烤的桶仔雞，以及用現在最火紅的紅藜和小米燉煮的雞湯，還有我們當地的紅烏龍茶滷製的香魚、山上採集的月桃葉及假酸漿葉所包裹的紅藜香粽和當季野菜所做的料理，很多客人吃了都覺得很好吃。客人來這裡用餐，平均一桌十人2千5百元起跳，個人套餐一份3百元。來台東旅遊的朋友，歡迎來嚐嚐我親自烹調的美味料理，但請提前一天預約，這樣食材會比較新鮮，希望大家能來嚐一嚐古早人ㄟ厝的美食，謝謝大家！",
            "speaker": {
                "name": "潘姐",
                "photo": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/LT0067_icon.jpg",
                "resume": ["老闆娘"],
                "intro": "大家好，我是古早人ㄟ厝的老闆娘，大家都叫我潘姊。",
                "videoUrl": "",
                "homeNumber": "089 550 497",
                "phoneNumber": "09 7571 3558",
                "FBUrl": "https://www.facebook.com/lattacat520/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L09B龍田 潘幸憶(潘姐) 2017-07-14 古早人ㄟ厝.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/DSCN1725.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/DSCN1726.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/DSCN1729.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/DSCN1730.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/DSCN1731.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/DSCN2136.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/古早人ㄟ厝 料理2.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0067龍田 潘幸憶 古早人ㄟ厝/古早人ㄟ厝 料理4.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "鹿天時光_簡介") {
        serverData = {
            "name": "鹿天時光",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/1xX97Fb8PhT2",
            "intro": "",
            "speaker": {
                "name": "",
                "photo": "",
                "resume": ["", "", ""],
                "intro": "",
                "videoUrl": "",
                "homeNumber": "",
                "phoneNumber": "",
                "FBUrl": ""
            },
            "audio": {
                "src": "",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": ""
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "龍田文物館_簡介") {
        serverData = {
            "name": "龍田文物館",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/u1VPg3aTMgN2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 B龍田文物館.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0069龍田 邱樹蘭 龍田文物館/DSCN0971.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0069龍田 邱樹蘭 龍田文物館/DSCN0972.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0069龍田 邱樹蘭 龍田文物館/DSCN0973.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0069龍田 邱樹蘭 龍田文物館/DSCN0974.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0069龍田 邱樹蘭 龍田文物館/DSCN0975.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "崑慈堂、鹿野神社_簡介") {
        serverData = {
            "name": "崑慈堂、鹿野神社",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/u1VPg3aTMgN2",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 C崑慈堂鹿野神社.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0982.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0989.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0990.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0991.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0994.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0995.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0996.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0997.jpg"
                    },{
                        "time": 79,
                        "photoSrc": "images/photo/C龍田逛逛/LT0070龍田 邱樹蘭 崑慈堂鹿野神社/DSCN0998.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "崑慈堂、鹿野神社、苦楝樹_概述") {
        serverData = {
            "name": "崑慈堂、鹿野神社、苦楝樹",
            "subtitle": "概述",
            "location": "https://goo.gl/maps/u1VPg3aTMgN2",
            "intro": "我們現在所在的地方叫崑慈堂，崑慈堂在日本時代就是日本神社的所在地，而現在的社區發展或社區營造都想積極的重現歷史，同樣的在這裡，本地的居民在這裡找到1933年的歷史資料和相片，在2012年邀集一些專家學者，一起研究如何把當年的神社重現，因而之後在崑慈堂的旁邊，根據1933年的相片，重現了現在所看到的鹿野神社。崑慈堂廟宇內主祀的是瑤池金母，廟裡最特殊的是有兩尊神像是「活」的，其中一尊是土地公，另一尊是文昌帝君，它們都會繼續長鬍子，遊客到此不妨仔細觀察看看。說到崑慈堂，就不能不提到證嚴法師，也就是慈濟的證嚴法師。證嚴法師年輕的時候，曾經在崑慈堂修行打尖了三個月，而在這個地方有一顆巨大的苦楝樹，證嚴法師就在這棵樹下對著村民講經說道。台東不只有池上伯朗大道的金城武樹，大家也應該來龍田崑慈堂看一看慈濟樹。",
            "speaker": {
                "name": "韋立琦",
                "photo": "images/photo/A高台散步/GT0005高台 韋立琦 鹿野/GT0005_icon 高台 韋立琦 x300p.jpg",
                "resume": ["人文生態導遊"],
                "intro": "各位朋友大家好！我是台東人文生態導遊韋立琦，大家稱呼我韋導就可以了，我從事導遊工作已經有10年的時間，專長是生態導覽、文化解說，談天說地。如果大家想對台東有更深入的瞭解，可以和我聯絡。來台東旅遊除了要看到很多美麗的景點之外，更重要的是要有深度、知性、感性的體驗！",
                "videoUrl": "https://www.youtube.com/embed/1zZ-SHC_Pao",
                "homeNumber": "",
                "phoneNumber": "09 1187 9327",
                "FBUrl": "https://goo.gl/qzo1Em"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-07-01 韋立琦 龍田村/L12龍田 韋立琦 2017-07-01 崑慈堂苦楝樹鹿野神社.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN0990.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN0991.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN0995.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN0996.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN0997.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN0998.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN0999.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN1000.jpg"
                    },{
                        "time": 80,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN1231.jpg"
                    },{
                        "time": 90,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN1226.jpg"
                    },{
                        "time": 100,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN1227.jpg"
                    },{
                        "time": 110,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN1228.jpg"
                    },{
                        "time": 120,
                        "photoSrc": "images/photo/C龍田逛逛/LT0071龍田 韋立琦 崑慈堂鹿野神社苦楝樹/DSCN1229.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "苦楝樹_簡介") {
        serverData = {
            "name": "苦楝樹",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/f2X9QwQLfo62",
            "intro": "",
            "speaker": {
                "name": "邱樹蘭",
                "photo": "images/photo/C龍田逛逛/LT0037龍田 邱樹蘭 A龍田西門町/LT0037_icon.jpg",
                "resume": ["蝴蝶姊姊"],
                "intro": "Hello! 大家好！我是翠蝶園的女主人邱樹蘭，大家都叫我蝴蝶姊姊。因為在自己家裡營造一座蝴蝶花園，所以在家裡就可以欣賞到蝴蝶的生態，甚至旅客經過都可以進來療癒一下。所以我們發展出DIY活動，除了蝴蝶生態之外，我們有種子的玩賞，客人可以到園區採集種子，甚至可以把自己手作的作品帶回去。像我頭上這頂帽子的裝飾都是我們隨手拈來的創作，可以讓你們很療癒！歡迎各位到龍田逛逛，我們附近有阿度的店，對面有小農田餐酒館，斜對面也阿榮柑仔店，旁邊還有九叔公民宿，後面可以看到飛行傘、可以看到熱氣球。所以來到這裡很值得讓你泡一整天的地方，歡迎來噢！",
                "videoUrl": "https://www.youtube.com/embed/b5tnHXUSauE",
                "homeNumber": "089 551 138",
                "phoneNumber": "09 2270 1433 ",
                "FBUrl": "https://chushulan.wordpress.com/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/2017-06-29 邱樹蘭 龍田村/龍田 邱樹蘭 2017-06-29 D苦楝樹.mp3",
                "tags": [
                    {
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0072龍田 邱樹蘭 苦楝樹/DSCN1226.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0072龍田 邱樹蘭 苦楝樹/DSCN1227.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0072龍田 邱樹蘭 苦楝樹/DSCN1228.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0072龍田 邱樹蘭 苦楝樹/DSCN1229.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0072龍田 邱樹蘭 苦楝樹/DSCN1232.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "昕新小吃部_簡介") {
        serverData = {
            "name": "昕新小吃部",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/tNRFk2quke42",
            "intro": "大家好！我是昕新小吃部的頭家娘劉錦芳，我在這開店已經十幾年了，我在這裡賣的東西有手工水餃、炒飯、炒麵、海鮮麵、蔥油餅和各種小菜。我們自己種地瓜葉自己摘、自己吃，都是天然無毒的。我們店裡賣的蔬菜都是自己種的，沒有噴農藥，吃起來健康又安心，歡迎大家來吃看看！吃飽飯之後還可以試試我們的飲料，有綠豆冰沙和冷泡茶，綠豆冰沙是把綠豆絞碎之後，裝到瓶子裡冷藏，夏天喝起來特別沁涼。您如果來台東玩樂，有經過我們龍田村，歡迎各位來昕新小吃部品嘗我們的小吃，謝謝！",
            "speaker": {
                "name": "劉錦芳",
                "photo": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/LT0073_icon.jpg",
                "resume": ["頭家娘"],
                "intro": "大家好，我是劉錦芳，我是昕新小吃部的頭家娘，真歡喜大家來這裡玩樂，各位如果玩累了、肚子餓了，可以來我們小店吃飯、喝冷飲。歡迎大家來龍田玩！",
                "videoUrl": "https://www.youtube.com/embed/1iKOUk44cSw",
                "homeNumber": "089 552 329",
                "phoneNumber": "",
                "FBUrl": ""
            },
            "audio": {
                "src": "audio/C龍田逛逛/L14B龍田 劉錦芳 2017-07-05 昕新小吃部.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/DSCN1398.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/DSCN1401.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/DSCN1404.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/DSCN1406.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/DSCN1411.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/DSCN1412.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0073龍田 劉錦芳 昕新小吃部/DSCN1413.jpg"
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "小胭小吃部_簡介") {
        serverData = {
            "name": "小胭小吃部",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/AktNtLavYay",
            "intro": "小胭小吃部老闆娘－小胭，融合越式美食及台灣在地手藝，精挑在地皇帝米、手工麵條、米苔目等食材，以傳統古法熬製大骨湯頭，為旅人提供暖心的餐點。來到鹿野的朋友歡迎前來品嘗！",
            "speaker": {
                "name": "阮氏胭",
                "photo": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/LT0074_icon.jpg",
                "resume": ["老闆娘"],
                "intro": "大家好！我是小胭小吃部的老闆娘，我叫阮氏胭，你們也可以叫我小胭！我來自越南，來龍田已經20年了，我喜歡做吃的，我在龍田做小吃，希望可以服務大家！各位朋友來鹿野龍田玩的時候，歡迎來小胭小吃部品嘗我們的美食！",
                "videoUrl": "https://www.youtube.com/embed/SgxVcDJ7B2M",
                "homeNumber": "",
                "phoneNumber": "09 8831 7031",
                "FBUrl": "https://www.facebook.com/yan0988317031/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L15龍田 阮氏胭 2017-07-07 小胭小吃部/龍田 阮氏胭 2017-07-07 小胭小吃部.mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1463.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1657.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1658.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1984.jpg"
                    },{
                        "time": 40,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN2156.jpg"
                    },{
                        "time": 50,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN2158.jpg"
                    },{
                        "time": 60,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN2161.jpg"
                    },{
                        "time": 70,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN2162.jpg"
                    },
                ],
            },
            "moreAudio": ["越南語"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "小胭小吃部_越南語") {
        serverData = {
            "name": "小胭小吃部",
            "subtitle": "越南語",
            "location": "https://goo.gl/maps/AktNtLavYay",
            "intro": "Rouge quán bar nhỏ bà chủ - ít rouge, các món ăn fusion và Đài Loan trong công nghệ, tốt nhất trong mét hoàng đế, mì làm bằng tay, Mi Taimu và các thành phần khác để chữa bệnh truyền thống xương lớn súp luộc đầu, ấm áp trái tim để cung cấp khách du lịch bữa ăn. Kano bạn bè chào đón đến thưởng thức!",
            "speaker": {
                "name": "阮氏胭",
                "photo": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/LT0074_icon.jpg",
                "resume": ["老闆娘"],
                "intro": "Xin chao cac ban em ten quyen em o lu ye lung then co mo quan mi co mi hu tieu co mon an dai loan nua chi em minh ai co di ngang qua ghe gup hoi dum em nhe cam on cac ban nhieu nhieu?",
                "videoUrl": "https://www.youtube.com/embed/iAzrKAD0-cs",
                "homeNumber": "",
                "phoneNumber": "09 8831 7031",
                "FBUrl": "https://www.facebook.com/yan0988317031/"
            },
            "audio": {
                "src": "audio/C龍田逛逛/L15龍田 阮氏胭 2017-07-07 小胭小吃部/龍田 阮氏胭 2017-07-08 小胭小吃部(越南語).mp3",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1463.jpg"
                    },{
                        "time": 10,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1657.jpg"
                    },{
                        "time": 20,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1658.jpg"
                    },{
                        "time": 30,
                        "photoSrc": "images/photo/C龍田逛逛/LT0074龍田 阮氏胭 小胭小吃部/DSCN1984.jpg"
                    },
                ],
            },
            "moreAudio": ["簡介"],
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "老鄉長日式寓所(邱仁銘宅)",
                    subtitle: "簡介"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    } else if (param == "老鄉長日式寓所(邱仁銘宅)_簡介") {
        serverData = {
            "name": "老鄉長日式寓所(邱仁銘宅)",
            "subtitle": "簡介",
            "location": "https://goo.gl/maps/YNN4Wkh5pBn",
            "intro": "",
            "speaker": {
                "name": "林振雄",
                "photo": "",
                "resume": ["", "", ""],
                "intro": "",
                "videoUrl": "",
                "homeNumber": "",
                "phoneNumber": "",
                "FBUrl": ""
            },
            "audio": {
                "src": "",
                "tags": [
                    {
                        "time": 0,
                        "photoSrc": ""
                    },
                ],
            },
            "neighView": [
                {
                    title: "龍田村",
                    subtitle: "龍田西門町"
                },{
                    title: "茶葉改良場台東分場",
                    subtitle: "茶葉改良場與鹿野茶"
                },{
                    title: "鹿野區役場",
                    subtitle: "龍眼樹平台與構想"
                },{
                    title: "紅茶食堂",
                    subtitle: "介紹"
                },{
                    title: "阿榮甘仔店",
                    subtitle: "簡介"
                },{
                    title: "小農田餐酒館",
                    subtitle: "簡介"
                },{
                    title: "翠蝶園",
                    subtitle: "簡介"
                },{
                    title: "阿度的店",
                    subtitle: "簡介"
                },{
                    title: "龍田國小托兒所",
                    subtitle: "簡介"
                },{
                    title: "米米娜娜小熊燒",
                    subtitle: "簡介"
                },{
                    title: "古早人ㄟ厝",
                    subtitle: "簡介"
                },{
                    title: "鹿天時光",
                    subtitle: "簡介"
                },{
                    title: "龍田文物館",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社",
                    subtitle: "簡介"
                },{
                    title: "崑慈堂、鹿野神社、苦楝樹",
                    subtitle: "概述"
                },{
                    title: "苦楝樹",
                    subtitle: "簡介"
                },{
                    title: "昕新小吃部",
                    subtitle: "簡介"
                },{
                    title: "小胭小吃部",
                    subtitle: "簡介"
                },
            ],
        };
    }
}



//處理所有從伺服器拿回來的資料
function initDataFromServer(serverData) {

    //初始化音檔
    audioClass.initDataFromServer(serverData.audio);
    //初始化圖片輪播區相片
    imgSliderClass.initDataFromServer(serverData.audio.tags);
    if (typeof serverData.audio.tags[0] != "undefined") {
        updateMainPhoto(serverData.audio.tags[0].photoSrc);
    }
    //初始化景點資訊
    initViewpointData(serverData);
    //初始化講者資訊
    initAuthorData(serverData.speaker);

}

//初始化講者資訊
function initAuthorData(speakerData) {

    //講者姓名
    $$("speakerName").innerHTML = speakerData.name;
    //講者相片
    if (speakerData.photo != "") {
        $$("speakerPhoto").src = speakerData.photo;
        $$("speakerSmallPhoto").src = speakerData.photo;
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
    if (speakerData.FBUrl == null || speakerData.FBUrl == '') {
        $$("speakerFacebook").href = "#speaker";
        $$("speakerFacebook").children[1].innerHTML = "無";
    } else {
        $$("speakerFacebook").href = speakerData.FBUrl;
        $$("speakerFacebook").children[1].innerHTML = speakerData.FBUrl;
    }

    //講者簡歷
    for (var i = 0; i < speakerData.resume.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = speakerData.resume[i];
        $$("speakerResume").appendChild(li);
    }

    //講者影片
    if (speakerData.videoUrl != "") {
        $$("ytplayer").src = speakerData.videoUrl;
    } else {
        $$("ytplayer").style.display = "none";
        $$("videoPrep").style.display = "block";
    }

    /*var ytplayer;
    ytplayer = new YT.Player('ytplayer', {
        height: '495',
        width: '880',
        videoId: 'M7lc1UVf-VE',
        events: {'onStateChange': onPlayerStateChange}
    });
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            document.getElementById("audio").pause();
        }
    }*/
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
    $$("vpLocation").href = vpData.location;

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
            audioA.href = "viewpoint.html?utm_source=InSite&utm_campaign=" + vpData.name + "_" + vpData.moreAudio[i];
            var audioDiv = document.createElement("div");
            audioDiv.className = "audio";
            audioDiv.innerHTML = vpData.moreAudio[i];
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

