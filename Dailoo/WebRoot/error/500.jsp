<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>錯誤提示頁面</title>
  </head>
  
  <body>
	${pageContext.exception.message }
  </body>
</html>
