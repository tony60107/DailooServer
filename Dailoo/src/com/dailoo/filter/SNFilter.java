package com.dailoo.filter;

import java.io.IOException;
import java.net.URLDecoder;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.SerialNumber;
import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.SNService;
import com.dailoo.service.SpeakerService;

public class SNFilter implements Filter{

	@Override
	public void destroy() {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		//1.只有未註冊序號的用戶，才會自動註冊
		if(req.getSession(false)==null || req.getSession().getAttribute("SN")==null){
			//2.只有带了序號cookie的用户才自动註冊
			Cookie [] cs = req.getCookies();
			Cookie findC = null;
			if(cs!=null){
				for(Cookie c : cs){
					if("SN".equals(c.getName())){
						findC = c;
						break;
					}
				}
			}
			if(findC!=null){
				//3.只有序號正確的用戶且序號在有效時間內，才會自動註冊
				String code = URLDecoder.decode(findC.getValue(),"utf-8");
				SNService service = BasicFactory.getFactory().getService(SNService.class);
				SerialNumber sn = service.findSNByCode(code);
				if(sn != null){
					long endTime = sn.getStartTime().getTime() + sn.getUseLength() * 3600 * 1000;
					if(endTime - System.currentTimeMillis() > 0){
						req.getSession().setAttribute("SN", sn);
					}
				}
			}
		}
		//4.無論是否自動註冊都要放行
		chain.doFilter(request, response);
		
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

}
