window.onload=function(){
	var html_li=document.getElementById("html_li");
	var css_li=document.getElementById("css_li");
	var js_li=document.getElementById("js_li");
	var practice_li=document.getElementById("practice_li");
	html_li.onclick=function(){
		html_ul.style.display="block";
		css_ul.style.display="none";
		js_ul.style.display="none";
		practice_ul.style.display="none";
	}
	css_li.onclick=function(){
		html_ul.style.display="none";
		css_ul.style.display="block";
		js_ul.style.display="none";
		practice_ul.style.display="none";
	}
	js_li.onclick=function(){
		html_ul.style.display="none";
		css_ul.style.display="none";
		js_ul.style.display="block";
		practice_ul.style.display="none";
	}
	practice_li.onclick=function(){
		html_ul.style.display="none";
		css_ul.style.display="none";
		js_ul.style.display="none";
		practice_ul.style.display="block";
	}
}
