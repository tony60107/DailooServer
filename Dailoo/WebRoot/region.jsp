<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>${regionName} - Dailoo帶路語音導覽服務</title>
      <meta name="viewport" content="user-scalable=no"/>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
    <meta http-equiv="description" content="${regionName} 主題介紹，包含以下主題：<c:forEach items="${themes}" var="theme">${theme.name}, </c:forEach>- 就像在地人親自帶路">
    <link rel="shortcut icon" href="images/general/dailoo.png">
    <link rel="stylesheet" href="css/base.css"/>
    <link rel="stylesheet" href="css/themelist.css"/>
  </head>
  
  <body>
      <div class="header clearfix">
          <img id="logo" class="logo fl" src="images/themelist/dailoo_logo.png" style="top: 34px;">
          <h1 id="title" class="cover fl">${regionName}行動語音導覽</h1>
      </div>
      <div id="themelist" class="themelist">
          <c:forEach items="${themes}" var="theme">
              <a href="/theme/${theme.id}">
                  <div class="theme">
                      <div class="cover">
                          <c:set value="${theme.name}" var="names" />
                          <h2 class="main-title">${ fn:split(names, ',')[0]}</h2>
                          <h3 class="title-eng">${ fn:split(names, ',')[1]}</h3>
                      </div>
                      <img alt="${fn:split(names, ',')[0]}" src="/ResourceServlet?url=${theme.behalfPhotoUrl}">
                  </div>
              </a>
          </c:forEach>
      </div>
      <input id="regionId" type="text" value="${regionId}" style="display: none"/>
  <!--Footer引入-->
  <div id="footer"></div>
  </body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/base.js"></script>
<script type="text/javascript" src="js/themelist2.js"></script>