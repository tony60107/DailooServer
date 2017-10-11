<%@ page language="java" import="java.util.*" pageEncoding="utf-8" isErrorPage="true"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>錯誤提示頁面</title>
  </head>
  
  <body>
	${pageContext.exception.message }<br>
	 <% 
         exception.printStackTrace(response.getWriter()); 
     %> 
  </body>
</html>
<script>
	document.body.innerHTML = document.body.innerHTML.split("Caused by: java.lang.RuntimeException:")[1];
</script>
