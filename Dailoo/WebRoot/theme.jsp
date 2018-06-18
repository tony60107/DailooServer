<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
    
    <title>${themeName} - Dailoo帶路語音導覽服務</title>
    <meta name="viewport" content="user-scalable=no"/>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="description" content="${themeName} 景點介紹，包含以下景點：<c:forEach items="${vps}" var="vp">${vp.name}, </c:forEach> - 就像在地人親自帶路">
    <link rel="shortcut icon" href="images/general/dailoo.png">
    <link rel="stylesheet" href="css/base.css"/>
    <link rel="stylesheet" href="css/viewlist.css?20171129"/>
  </head>
  
  <body>
  <div class="w">
      <div class="nav clearfix">
          <a id="backward" href="/region/${regionName}">
              <img class="back fl" src="images/viewlist/back.png"/>
          </a>
          <div id="title" class="main-title" onclick="switchDrop();">${themeName}<span id="drop" class="drop" style="display: inline-block"></span></div>
      </div>

      <div id="themelist" class="themelist" style="display:none;">
          <!--div class="reply" onclick="$$('drop').style.display = 'inline-block'; themelist.style.display = 'none';"><img src="images/viewlist/reply.png"/></div-->
          <c:forEach items="${themes}" var="theme">
              <div class="theme" onclick="getViewpointsDataFromServer('${theme.id}','${theme.name}', this);">${theme.name}</div>
          </c:forEach>
      </div>

      <div id="viewlist" class="viewlist clearfix">
          <c:forEach items="${vps}" var="vp">
              <a class="view"
                 href="/view/${vp.name}_${vp.subtitle}?utm_source=InSite&amp;utm_campaign=${vp.name}_${vp.subtitle}">
                  <img src="/ResourceServlet?url=${vp.behalfPhotoUrl}" alt="${vp.name}">
                  <div class="cover"></div>
                  <div class="main-title">${vp.name}</div>
                  <img class="speaker-photo fl"
                       src="/ResourceServlet?url=${vp.speakerPhotoUrl}"
                       alt="${vp.speakerName}">
                  <div class="fl">
                      <div class="speaker">${vp.speakerName}</div>
                      <div class="time">
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
      <!--Footer引入-->
      <div id="footer"></div>
  </div>
  </body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/base.js"></script>
<script type="text/javascript" src="js/viewlist2.js"></script>