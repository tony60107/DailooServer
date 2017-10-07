/**
 * Created by Waiting on 2017/7/16.
 */

var scrollBar; //進度條主體
var bar; //進度條的拖動按鈕
var mask; //拖動按鈕的後面遮罩
var scrollBarWidth; //進度條寬度
var nowProgRate; //現在進度條百分比
var nowTimeTxt, allTimeTxt; //聲音的現在時間跟全部時間的文字控件

var pressing; //是否為按進度條時的狀態

var audio; //播放聲音控件
var isPlayedToPause; //記錄是否是在播放聲音時，拖動進度條導致暫停

var ScrollBar = Class.extend({

    init: function () {
        scrollBar = $$("scrollBar");
        bar = scrollBar.children[0];
        mask = scrollBar.children[1];
        scrollBarWidth = scrollBar.offsetWidth;
        nowTimeTxt = $$("nowTime");
        allTimeTxt = $$("allTime");
        audio = $$("audio");
        pressing = false;
    },

    bindEvent: function () {

        bar.addEventListener("touchstart", function (event) { //當按下拖動按鈕
            pressing = true;
            var leftVal = event.changedTouches[0].clientX - this.offsetLeft; // bar離螢幕左側之距離(滑鼠點下) -  bar距離進度條最左側的距離 = 進度條最左側距離螢幕左側之距離
            var that = this;    // bar，拖動一定要寫到move裡面才可以
            if (audio.paused == false) { //如果聲音正在播放
                audio.pause(); //暫停播放聲音
                clearInterval(audio.timer);
                isPlayedToPause = true;
            }
            document.addEventListener("touchmove", function (event) { //滑鼠移動時

                if (pressing) { //如果按下bar後，還未鬆手
                    that.style.left = event.changedTouches[0].clientX - leftVal + that.offsetWidth / 2 + 'px'; // 滑鼠座標 - 滾動條最左側距離螢幕左側之距離 =  bar距離進度條最左側之距離

                    var val = parseInt(that.style.left);
                    if (val < 0) { //如果bar到了頂部
                        that.style.left = 0;
                    } else if (val > scrollBarWidth) { //如果bar到了尾端
                        that.style.left = scrollBarWidth + "px";
                    }
                    mask.style.width = that.style.left;  // 遮罩盒子的寬度根據bar的位置做變化

                    updateProgTime(true); //更新進度條時間

                    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); //避免選擇到文字
                }
            });

            document.addEventListener("touchend", function () { //放開滑鼠
                pressing = false;
                if (isPlayedToPause) {//如果是拖動進度條導致暫停播放聲音，彈起後開始播放
                    audio.play();
                    audio.timer = setInterval(function () { //每0.3秒更新進度條狀態
                        updateProgTime(false);
                    }, 300);
                    isPlayedToPause = false;
                }
                document.onmousemove = null;   // 弹起鼠标不做任何操作
            });

        });
    }
});


function updateProgTime(isDragBar) { //更新進度條的時間文字

    var nowSec; //當前聲音時間

    if (isDragBar) { //如果是拖動進度條的bar

        nowProgRate = parseInt(bar.style.left) / scrollBarWidth; //計算進度條百分比
        nowSec = audioLength * nowProgRate; //計算現在秒數
        audio.currentTime = nowSec;

    } else { //如果是要根據聲音更新進度條
        nowSec = audio.currentTime;
        nowProgRate = nowSec / audioLength;
    }

    //更新進度條狀態
    bar.style.left = nowProgRate * scrollBarWidth + "px";
    mask.style.width = bar.style.left;

    //更新聲音時間進度文字
    if (nowSec % 60 < 10) {
        nowTimeTxt.innerHTML = parseInt(nowSec / 60) + ":0" + parseInt(nowSec % 60);
    } else {
        nowTimeTxt.innerHTML = parseInt(nowSec / 60) + ":" + parseInt(nowSec % 60);
    }
}

var scrollBarClass = new ScrollBar();