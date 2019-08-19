// JavaScript Document
function C_console_js(C_consoleText){

	let eXR = /[\w*]\w*$/
	var con_Text =  C_consoleText.match(eXR)
	if(con_Text == null){ con_Text = new Array("") }

	var con_Text_Y = "   < < <  "
	var if_con_Text = "已启用"

	function test(std){
		if(std==true){
			con_Text += con_Text_Y
			$("#node2").val(C_consoleText+"\n"+con_Text+if_con_Text)
		}
		else if(std==false){
			con_Text += con_Text_Y
			$("#node2").val(C_consoleText+"\n"+con_Text+if_con_Text)
		}else{ $("#node2").val(C_consoleText+"\n"+"!!!错误 >>> Console.js 文件test函数参数出错 ") }
	}

		switch(con_Text[0]){

			case "bac_warpe":
				Page(true)
				if_con_Text = "背景循环已打开！！！"
				test(true)
				setCookie("bac_warpe","true",365)
				break

			case "bac_warpe_off":
				Page(false)
				if_con_Text = "背景循环已关闭！！！"
				test(false)
				setCookie("bac_warpe","false",365)
				break

			case "bac_blur_off":
				$("#filter_colro img").css("filter","blur(0px)")
				if_con_Text = "背景模糊已关闭！！！"
				test(false)
				setCookie("bac_blur","false",365)
				break

			case "bac_blur":
				$("#filter_colro img").css("filter","blur(5px)")
				if_con_Text = "背景模糊已打开！！！"
				test(true)
				setCookie("bac_blur","true",365)
				break

			default:
				con_Text += con_Text_Y
				$("#node2").val(C_consoleText+"\n"+con_Text+"未定义！！！")

		}

	return  C_consoleText.replace(/[\n*|\r*]/g,"")
}
