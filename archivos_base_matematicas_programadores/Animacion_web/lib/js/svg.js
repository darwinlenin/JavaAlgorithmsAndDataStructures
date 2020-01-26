window.onload=function() {
	document.getElementsByTagName("circle")[0].onmouseover=function(){
		this.style.fill = "yellow";
	};
	document.getElementsByTagName("circle")[0].onmouseout=function(){
		this.style.fill = "green";
	};	
}
