package com.dailoo.web;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.logging.log4j.LogManager;

import com.dailoo.domain.Speaker;
import com.dailoo.domain.Theme;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ThemeService;
import com.dailoo.util.FileUploadUtils;
import com.google.gson.Gson;

public class ThemeServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		ThemeService service = BasicFactory.getFactory().getService(ThemeService.class);
		Theme theme = new Theme();
		Gson gson = new Gson();
		
		//取得目前登入者的資訊
		Speaker loginUser = (Speaker) request.getSession().getAttribute("speaker");
		
		try {
			// 取得客戶端要求
			String method = request.getParameter("method");
			
			// 如果是新增主題
			if ("addTheme".equals(method)) {
				if("admin".equals(loginUser.getRole())){
					Map<String, String> paramMap = FileUploadUtils.getParamMap(request,response, this);
					service.addTheme(paramMap);
					//response.sendRedirect("/manageThemes.html");
					response.getWriter().write("{}");
				} else {
					response.getWriter().write("{\"error\":\"只有管理員才可以新增主題喔~\"}");
				}
			}
			//如果是根據地區ID取得主題
			else if("getThemesByRegionId".equals(method)){
				String json = service.findThemesByRegionId(request.getParameter("regionId"));
				response.getWriter().write(json);
			}
			//如果是根據ID刪除主題
			else if("delThemeById".equals(method)){
				if("admin".equals(loginUser.getRole())){
					service.delThemeById(request.getParameter("id"));
					//response.sendRedirect("/manageThemes.html");
					response.getWriter().write("{}");
				} else {
					response.getWriter().write("{\"error\":\"只有管理員才可以刪除主題喔~\"}");
				}
			}
			//如果是根據主題ID,找到該主題對應地區下的所有主題
			else if("getThemesByThemeId".equals(method)){
				String json = service.findThemesByThemeId(request.getParameter("id"));
				response.getWriter().write(json);
			}
			//如果是根據地區ID取得主題
			else if("getThemeById".equals(method)){
				String json = service.findThemeById(request.getParameter("id"));
				response.getWriter().write(json);
			}
			//如果是更新主題資訊
			else if("updateThemeInfo".equals(method)){
				if("admin".equals(loginUser.getRole())){
					Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
					BeanUtils.populate(theme, paramMap);
					service.updateThemeInfo(theme, paramMap.get("imgurls"));
					//response.sendRedirect("/updateThemeInfo.html?id=" + theme.getId());
					response.getWriter().write("{}");
				} else {
					response.getWriter().write("{\"error\":\"只有管理員才可以編輯主題喔~\"}");
				}
			}
			//如果是取得所有的主題
			else if("getAllThemes".equals(method)){
				List<Theme> themes = service.findAllThemes();
				String json = gson.toJson(themes);
				response.getWriter().write(json);
			}
			//更新主題地圖連結
			else if("updateMapUrlById".equals(method)){
				String id = request.getParameter("id");
				String type = request.getParameter("type");
				String url = request.getParameter("url");
				service.updateMapUrlById(id, type, url);
			}
		} catch (Exception e) {
			LogManager.getLogger().error("系統出錯", e);
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
