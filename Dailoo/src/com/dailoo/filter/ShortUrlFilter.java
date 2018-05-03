package com.dailoo.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.ShortUrl;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ShortUrlService;

/**
 * Servlet Filter implementation class ShortUrlFilter
 */
@WebFilter("/ShortUrlFilter")
public class ShortUrlFilter implements Filter {
	
	ShortUrlService service;

	public void destroy() {
		// TODO Auto-generated method stub
	}
	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		String uri = req.getRequestURI();
		
		//如果是短網址
		if(uri.length() == 7){
			ShortUrl url = service.getByShorten(uri.split("/")[1]);
			//如果有找到對應的原網址
			if(url != null){
				//進行跳轉
				resp.sendRedirect(url.getOri());
				return;
			}
		}
		
		chain.doFilter(request, response);
	}

	public void init(FilterConfig fConfig) throws ServletException {
		service = BasicFactory.getFactory().getService(ShortUrlService.class);
	}

}
