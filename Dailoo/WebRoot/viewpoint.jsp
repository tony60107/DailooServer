<%@ page language="java" import="java.util.*" pageEncoding="BIG5"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
      <base href="<%=basePath%>">
      <title>${vp.name}${vp.subtitle} - Dailoo�a���y�������A��</title>
      <link rel="shortcut icon" href="images/general/dailoo.png">
      <meta http-equiv="pragma" content="no-cache">
      <meta http-equiv="cache-control" content="no-cache">
      <meta http-equiv="expires" content="0">
      <meta http-equiv="description" content="${vp.name}${vp.subtitle} - ${vp.intro} - �N���b�a�H�˦۱a��">
      <link rel="stylesheet" href="css/base.css"/>
      <link rel="stylesheet" href="css/viewpoint.css?20171209"/>
  </head>
  
  <body>

  <div class="w clearfix" style="overflow: hidden">
      <!--�D����-->
      <div id="player" class="player clearfix">
          <!--�Y���ɯ���-->
          <div class="header clearfix">
              <a id="backward" href="/theme/${themes.get(i).id}"><img src="images/viewpoint/back.png" alt="" class="back fl"></a>
              <div id="share" href=""><img src="images/viewpoint/share.png" alt="" class="share fr"></div>
              <a id="vpLocation" target="_blank"><img src="images/viewpoint/location.png" alt="" class="location fr"></a>
          </div>
          <!--���D�϶�-->
          <h1 id="vpName" class="main-title">${vp.name}</h1>
          <h2 id="vpSubtitle" class="subtitle">${vp.subtitle}</h2>
          <!--�Ϥ�������-->
          <div id="picShower" class="picshower clearfix">
              <img id="mainPhoto" src="/ResourceServlet?url=${tags[0].photoUrl}" alt="${vp.name}" class="pic">
              <button class="prevpic"></button>
              <button class="nextpic"></button>
              <div id="photoNum" class="photo-count">1/1</div>
          </div>
          <!--���̤p��-->
          <div class="speaker-small">
              <c:if test="${sp.photoUrl == null}"><img id="speakerSmallPhoto" src="images/viewpoint/speaker_defalut_small.png" alt=""></c:if>
              <c:if test="${sp.photoUrl != null}"><img id="speakerSmallPhoto" src="/ResourceServlet?url=${sp.photoUrl}" alt="${sp.name}"></c:if>
          </div>
          <!--�n���i�ױ�-->
          <div id="scrollBar" class="scroll">
              <div class="bar"></div>
              <div class="mask"></div>
              <div id="nowTime" class="nowtime">0:00</div>
              <div id="allTime" class="alltime">0:00</div>
          </div>
          <!--�n�����-->
          <div class="soundctrl clearfix">
              <audio id="audio"></audio>
              <button id="preTagBtn" class="prevtag fl"></button>
              <button id="playBtn" class="play fl"></button>
              <button id="nextTagBtn" class="nexttag fl"></button>
          </div>
      </div>
      <!--���I²��-->
      <div id="summary" class="summary">
          <div id="vpTitle" class="main-title">${vp.name}</div>
          <div id="area" class="subtitle">${vp.city}${vp.town}</div>
          <h2 id="vpIntro" class="intro">${vp.intro}</h2>
          <div id="readAllCont" class="readall">�K�i�}����</div>
      </div>
      <!--���j�u-->
      <a href="https://goo.gl/forms/UkVfGk86vZ2dqE1B2" target="_blank">
          <div class="feedback">�N���^�X</div>
      </a>
      <!--����-->
      <div id="speaker" class="speaker">
          <div class="info clearfix">
              <div class="info-l fl">
                  <c:if test="${sp.photoUrl == null}"><img id="speakerPhoto" class="photo" alt="" src="images/viewpoint/speaker_default.png"/></c:if>
                  <c:if test="${sp.photoUrl != null}"><img id="speakerPhoto" class="photo" alt="${sp.name}" src="/ResourceServlet?url=${sp.photoUrl}"/></c:if>
              </div>
              <div class="info-r fl">
                  <h3 id="speakerName" class="name">${sp.name}</h3>
                  <div class="resume">
                      <ul id="speakerResume">
                        <c:forTokens items="${sp.resume}" delims="," var="str">
                            <li>${str}</li>
                        </c:forTokens>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="contactInfo">
              <a id="speakerPhone" class="phone" href="tel:${sp.phoneNumber}">
                  <s></s>
                  <div>${sp.phoneNumber}<c:if test="${empty sp.phoneNumber}">�L</c:if></div>
              </a>
              <a id="speakerHome" class="home" href="tel:${sp.homeNumber}">
                  <s></s>
                  <div>${sp.homeNumber}<c:if test="${empty sp.homeNumber}">�L</c:if></div>
              </a>
              <a id="speakerUrl" class="facebook" href="${sp.speakerUrl}" target="_blank">
                  <s></s>
                  <div>${sp.speakerUrl}<c:if test="${empty sp.speakerUrl}">�L</c:if></div>
              </a>
          </div>
          <div class="intro">
              <h2 id="speakerIntro" class="cont">${sp.intro}</h2>
              <div id="readAllSpeakerIntro" class="readall">...�i�}����</div>
          </div>
          <!--<iframe id="ytplayer" class="ytplayer" width="880" height="495" src="" frameborder="0" allowfullscreen></iframe>-->
          <div id="ytplayer" class="ytplayer"></div>
          <img id="videoPrep" src="images/viewpoint/video_preparing.png" alt="" style="margin-top: 76px;">
      </div>
      <!--�٥i�H��ť-->
      <div id="moreAudio" class="more-audio">
          <div id="moreAudioTitle" class="main-title">�@���H�U�i�H��ť�G</div>
          <c:forEach items="${moreAudio}" var="vp">
              <a href="/view/${vp.name}_${vp.subtitle}?utm_source=InSite&amp;utm_campaign=${vp.name}_${vp.subtitle}">
                  <div class="audio">
                      <div class="audio-name fl">${vp.subtitle}</div>
                      <div class="fl" style="display: none;">...</div>
                      <div class="time fr">
                          <fmt:formatNumber var="min" value="${(vp.audioLength - vp.audioLength % 60) / 60}" pattern="##" maxFractionDigits="0"/>
                          <c:if test="${min >= 10}">${min}:</c:if>
                          <c:if test="${min < 10}">0${min}:</c:if>
                          <c:if test="${vp.audioLength % 60 > 9}">${vp.audioLength % 60}</c:if>
                          <c:if test="${vp.audioLength % 60 < 9}">0${vp.audioLength % 60}</c:if>
                      </div>
                  </div>
              </a>
          </c:forEach>
      </div>

      <!--�P�䴺�I-->
      <div id="neighViewContainer" class="neigh-view clearfix">
          <div class="main-title">�P�䴺�I</div>
          <div class="viewlist swiper-container">
              <ul id="neighView" class="swiper-wrapper">
                  <c:forEach items="${neighView}" var="vp">
                      <a class="view swiper-slide swiper-slide-active" href="/view/${vp.name}_${vp.subtitle}?utm_source=InSite&amp;utm_campaign=${vp.name}_${vp.subtitle}">
                          <img src="/ResourceServlet?url=${vp.behalfPhotoUrl}" alt="${vp.name}">
                          <div class="cover"></div>
                          <div class="main-title">${vp.name}</div>
                          <img class="speaker-photo fl" src="/ResourceServlet?url=${vp.speakerPhotoUrl}" alt="${vp.speakerName}">
                          <div class="speaker-info fl">
                              <div class="speaker">${vp.speakerName}</div>
                              <div class="time">
                                  <fmt:formatNumber var="min" value="${(vp.audioLength - vp.audioLength % 60) / 60}" pattern="##" maxFractionDigits="0"/>
                                  <c:if test="${min >= 10}">${min}:</c:if>
                                  <c:if test="${min < 10}">0${min}:</c:if>
                                  <c:if test="${vp.audioLength % 60 > 9}">${vp.audioLength % 60}</c:if>
                                  <c:if test="${vp.audioLength % 60 < 9}">0${vp.audioLength % 60}</c:if>
                              </div>
                          </div>
                          <div class="distance">�Z��
                              <c:if test="${vp.distance >= 1}">${vp.distance}KM</c:if>
                              <c:if test="${vp.distance < 1}"><fmt:formatNumber var="dt" value="${vp.distance*100}" pattern="##" maxFractionDigits="0"/>${dt*10}M</c:if>
                          </div>
                      </a>
                  </c:forEach>
              </ul>
          </div>
      </div>
      <!--���ɰ϶�-->
      <div id="sharemask" class="sharemask"></div>
      <div id="sharebox" class="sharebox">
          <div id="shareClose" class="close"></div>
          <div id="qrcode" class="qrcode"></div>
          <div class="desc">�I�B�ަ�@�_ť�a�I</div>
          <ul class="clearfix">
              <li onclick="window.open('https://www.facebook.com/dialog/share?display=popup&app_id=883175368431883&href=' + encodeURIComponent(document.shortUrl) + '&t=' + encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/facebook.png" alt=""></li>
              <li onclick="window.open('http://line.naver.jp/R/msg/text/?' + encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/line_c.png" alt=""></li>
              <li onclick="window.open('whatsapp://send?text=' + encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/whatsapp.png" alt=""></li>
              <li onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/twitter.png" alt=""></li>
              <li onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/mail.png" alt=""></li>
          </ul>
          <div class="input">
              <input id="shareInput" type="text" class="url">
              <img id="copyShortUrl" src="images/viewpoint/ad_copy.png" alt="" class="copy">
          </div>
          <div class="copy-desc">�I�����}�s���ƻs</div>

      </div>
      <!--�s�i�϶�-->
      <div id="admask" class="admask"></div>
      <div id="adbox" class="adbox">
          <div id="adClose" class="close"></div>
          <div class="ad"><a id="adHref" href="#" target="_blank"><img id="adImg" src="" alt=""></a></div>
          <div id="replay" class="replay clearfix">
              <img class="fl" src="images/viewpoint/ad_replay.png" alt="">
              <div class="replay-r">
                  <div id="replayTitle" class="main-title"></div>
                  <div id="replaySpeaker" class="name"></div>
                  <div id="replayTime" class="time"></div>
              </div>
          </div>
          <a id="nextAudio" href="#">
              <div class="next-audio clearfix">
                  <img class="fl" src="images/viewpoint/ad_next_audio.png" alt="">
                  <div class="next-audio-r">
                      <div id="nextAudioTitle" class="main-title"></div>
                      <div id="nextAudioSpeaker" class="name"></div>
                      <div id="nextAudioTime" class="time"></div>
                  </div>
              </div>
          </a>
          <div class="share">
              <ul>
                  <li id="adQRC"><img src="images/social/qrcode.png" alt=""></li>
                  <li onclick="window.open('https://www.facebook.com/dialog/share?display=popup&app_id=883175368431883&href=' + encodeURIComponent(document.shortUrl) + '&t=' + encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/facebook.png" alt=""></li>
                  <li onclick="window.open('http://line.naver.jp/R/msg/text/?' + encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/line_c.png" alt=""></li>
                  <li onclick="window.open('whatsapp://send?text=' + encodeURIComponent(document.shortUrl)); return false;"><img src="images/social/whatsapp.png" alt=""></li>
                  <li id="adMore"><img src="images/viewpoint/ad_more.png" alt=""></li>
              </ul>
          </div>
      </div>
      <!--�B�ʼ���-->
      <div id="floatPlayer" class="float-player">
          <a href="#player"><div class="pic"><img id="floatPhoto" src="" alt="${vp.name}"></div></a>
          <div id="flPreTagBtn" class="pre"></div>
          <div id="flPlayBtn" class="play"></div>
          <div id="flNextTagBtn" class="next"></div>
          <div id="flNowTime" class="time">0:00</div>
      </div>
      <!--Footer�ޤJ-->
      <div id="footer"></div>

      <!--��L�ܶq�x�s-->
      <input id="regionId" type="text" style="display: none"/>
      <input id="vpId" type="text" style="display: none" value="${vp.id}"/>
  </div>
  </body>
</html>
<script src="https://www.youtube.com/iframe_api"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/viewpoint2/simplejsinher.js"></script>
<script type="text/javascript" src="js/swiper.min.js"></script>
<script type="text/javascript" src="js/jquery.qrcode.min.js"></script>
<script type="text/javascript" src="js/base.js"></script>
<script type="text/javascript" src="js/viewpoint2/scrollbar.js"></script>
<script type="text/javascript" src="js/viewpoint2/imgSlider.js"></script>
<script type="text/javascript" src="js/viewpoint2/audio.js"></script>
<script type="text/javascript" src="js/viewpoint2/viewpoint.js"></script>
<script>
    var speakerData = "";
    function onYouTubeIframeAPIReady() {
        //�p�G�٨S���������̸�T�A����0.5���A����
        if ("" == speakerData) {
            setTimeout(function () {
                onYouTubeIframeAPIReady();
            }, 500);
        } else {
            setSpeakerYoutube();
        }
    }

    //�]�w���̼v��
    function setSpeakerYoutube() {

        var YTUrl = speakerData.youtubeUrl;
        if (YTUrl != '') {
            var YTID = YTUrl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1];
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

</script>