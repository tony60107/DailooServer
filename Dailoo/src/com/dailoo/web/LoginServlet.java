package com.dailoo.web;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.SpeakerService;
import com.dailoo.util.MD5Utils;

public class LoginServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		SpeakerService service = BasicFactory.getFactory().getService(SpeakerService.class);
		//1.获取用户名密码
		String username = request.getParameter("username");
		String password = MD5Utils.md5(request.getParameter("password"));
		//2.调用Service中根据用户名密码查找用户的方法
		Speaker speaker = service.getSpeakerByUnAndPsw(username,password);
		if(speaker == null){
			request.setAttribute("msg", "帳號密码不正确!");
			response.getWriter().write("{\"error\":\"帳號密碼不正確\"}");
			//request.getRequestDispatcher("/login.jsp").forward(request, response);
			//response.sendRedirect("/login.html");
			return;
		}
		
		Speaker sp = (Speaker) request.getSession().getAttribute("speaker");
		
		//4.登录用户重定向到主页
		request.getSession().setAttribute("speaker", speaker);
		
		//--处理记住用户名
		if("true".equals(request.getParameter("remname"))){
			Cookie remnameC = new Cookie("remname",URLEncoder.encode(speaker.getUsername(),"utf-8"));
			remnameC.setPath("/");
			remnameC.setMaxAge(3600*24*30);
			response.addCookie(remnameC);
		}else{
			Cookie remnameC = new Cookie("remname","");
			remnameC.setPath("/");
			remnameC.setMaxAge(0);
			response.addCookie(remnameC);
		}
		
		//--处理30天内自动登陆
		//if("true".equals(request.getParameter("autologin"))){
			Cookie autologinC = new Cookie("autologin",URLEncoder.encode(speaker.getUsername()+":"+speaker.getPassword(),"utf-8"));
			autologinC.setPath("/");
			autologinC.setMaxAge(3600*24*30);
			response.addCookie(autologinC);
		//}
		
		//response.sendRedirect("/updateSpeakerInfo.html");
		response.getWriter().write("{}");
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
