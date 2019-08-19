// JavaScript Document
function _onFocus(F16){
	$("#S_text").css("border","2px solid")
	$("#S_text").css("border-color",F16)
	$("#S_text").css("box-shadow","0 0 8px "+F16)
	$("#S_text").css("color",F16)
	$("#S_text").css("background-color","#FFF")
	$("#S_text").css("padding","2px")
}
function _onBlur(){
	$("#S_text").css("border","1px solid")
	$("#S_text").css("border-color","#7E7E7E")
	$("#S_text").css("box-shadow","")
	$("#S_text").css("background-color","transparent")
	$("#S_text").css("padding","2px")
}
function insert_image(std){
	$("#_IMG1").html("<img src="+std+">")
}
function insert_html(art,std){
	$("#"+art).html(std)
}
function _onhrvar(){
	$("#S_text").css("border","2px solid")
	$("#S_text").css("border-color","#000")
	$("#S_text").css("box-shadow"," 0 0 8px #000")
	$("#S_text").css("padding","1px")
}
function button_clik(std,str){

	var CC = document.getElementById('S_text').value

	if(str == 1){
		if(std){
			$("#S_button").click(function(){
				window.open("https://www.baidu.com/s?ie=UTF-8&wd="+CC)
			})
		}else{
			window.open("https://www.baidu.com/s?ie=UTF-8&wd="+CC)
		}
	}
	if(str == 2){
		if(std){
			$("#S_button").click(function(){
				window.open("https://search.bilibili.com/all?keyword="+CC+"&from_source=banner_search")
			})
		}else{
			window.open("https://search.bilibili.com/all?keyword="+CC+"&from_source=banner_search")
		}
	}
	if(str == 3){
		if(std){
			$("#S_button").click(function(){
				window.open("https://cn.bing.com/search?q="+CC)
			})
		}else{
			window.open("https://cn.bing.com/search?q="+CC)
		}
	}
}
function CreAndRe_textarea_Console(C_id,new_node_cc,cike_open){
	if(cike_open){
		var node_id = document.getElementById(C_id)
		var new_Element1 = document.createElement("p")
		new_Element1.id='node1'
		var new_Element2 = document.createElement(new_node_cc)
		var new_node1 = document.createTextNode("Console:")
		new_Element1.appendChild(new_node1)
		new_Element2.id='node2'
		node_id.appendChild(new_Element1)
		node_id.appendChild(new_Element2)
		$("#node2").css("border-color","#84F9FF")
		$("#node2").css("outline","none")
		$("#node1").css("margin-bottom","0px")
	}else{
		var node_id1 = document.getElementById(C_id)
		var re_Element = document.getElementById("node2")
		var re_node = document.getElementById("node1")
		node_id1.removeChild(re_Element)
		node_id1.removeChild(re_node)
	}
}
function Page(red){
		if(red){
			$("#filter_colro").css("display","none")
			$("#bodyPage").css("display","block")
			$("#bodyPage").fullImages({
				ImgWidth: 1920,   	 //设置轮播图的大小
				ImgHeight: 1080,
				autoplay :  7500,  	  //多长时间轮播一a
				fadeTime : 1000,		//过度动画时长
			});
		}else{
			$("#filter_colro").css("display","block")
			$("#bodyPage").css("display","none")
		}
}
function wpaper_bac(rad){
	var len = $("#bodyPage").find("img").length;
	var max = len;
	var cike = rad;
	for(;rad == cike;){
		cike = parseInt(Math.random()*(max-1)+1)
	}
	$("#filter_colro img").attr("src",$("#bodyPage img")[cike].src)
	return cike;
}
function filter_center(onf,num){
	if(onf){
		$("#filter_colro img").css("transform","scale(1."+num)
	}else{
		$("#filter_colro img").css("transform","scale(1.02)")
	}
}
