window.onload = function() {
	function $(id) {
		return document.getElementById(id);
	}
	var target = 0,
		leader = 0,
		time = null;
	//	页面主体
	var i_zym = $("i_zym").getElementsByClassName("i_a");
	//	页面导航栏菜单
	var i_meau = $("i_meau").getElementsByTagName("li");
	//	小圆点
	var i_xyd = $("i_xyd").getElementsByTagName("li");
	var laye = $("i_laye").getElementsByTagName("li");
	var ydd = $("i_donghua").getElementsByTagName("li");
	console.log(i_meau);
	for(var i = 0; i < i_meau.length; i++) {
		i_meau[i].index = i;
		i_xyd[i].index = i;
		i_meau[i].onclick = function() {
			var index = this.index;
			i_liandong(index);
		}
		i_xyd[i].onclick = function() {
			var index = this.index;
			i_liandong(index);
		}
	}
	//		页面联动函数
	function i_liandong(index) {
		clearInterval(time);
		var i_a = index;
		i_yundong(i_a);
		for(var j = 0; j < i_meau.length; j++) {
			i_xyd[j].style.background = "";
			i_meau[j].style.color = "rgb(0,71,197)";
			
		}
		i_meau[index].style.color = "black";
		i_xyd[index].style.background = "orange";
		if(index==1){
			document.getElementById('plane1').style.animation="plane1 1s linear 0s 1 forwards";
			document.getElementById('plane3').style.animation="plane3 1s linear 0s 1 forwards";
		}else{
			document.getElementById('plane1').style.animation="";
			document.getElementById('plane3').style.animation="";
		}
		if(index==2){
			document.getElementById('pancel1').style.animation="pancel1 1s linear 0s 1 forwards";
			document.getElementById('pancel2').style.animation="pancel2 1s linear 0s 1 forwards";
			document.getElementById('pancel3').style.animation="pancel3 1s linear 0s 1 forwards";
		}else{
			document.getElementById('pancel1').style.animation="";
			document.getElementById('pancel2').style.animation="";
			document.getElementById('pancel3').style.animation="";
		}
		var i_yidong = index * 60;
		animate($("i_xjt"), {
			left: i_yidong
		}, function a() {});
	}
	//		页面滚动函数
	function i_gundong(inde) {
		//		       clearInterval(time);
		//				var i_a = index;
		//				i_yundong(i_a);
		for(var j = 0; j < i_meau.length; j++) {
			i_xyd[j].style.background = "";
			i_meau[j].style.color = "rgb(0,71,197)";
		}
		i_meau[inde].style.color = "black";
		i_xyd[inde].style.background = "orange";
		var i_yidong = inde * 60;
		animate($("i_xjt"), {
			left: i_yidong
		}, function a() {});
	}
	//	页面滚动函数封装
	function i_yundong(i_a) {
		target = i_zym[i_a].offsetTop;
		//			console.log(target);
		//			console.log(target);
		var time = setInterval(function() {
			if(leader > target - 1 && leader < target + 1) {
				//					console.log(leader);
				clearInterval(time);
			} else {
				leader = leader + (target - leader) / 10;
				window.scrollTo(0, leader);
			}
		}, 10)
	}
	//		页面滚动事件
	window.onscroll = function() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			for(var i = 0; i < i_zym.length; i++) {
				if(scrollTop > i_zym[i].offsetTop - 700) {
					i_gundong(i);
				}
			}
		}
		//页面滚动函数
	var scrollFunc = function(event) {
		var x = event || window.event;
		var y = document.documentElement.scrollTop || document.body.scrollTop;
		var t1 = document.getElementById("wheelDelta");
		var bodyheight = document.body.offsetHeight;
		//		var target = bodyheight / 2;

		if(event.wheelDelta) { //IE/Opera/Chrome
			var a = event.wheelDelta; //向上为120，向下为-120
			if(a > 0) { //向上 
				document.body.scrollTop = document.body.scrollTop - bodyheight / 2;
			}
			if(a < 0) { //向下
				document.body.scrollTop = document.body.scrollTop + bodyheight / 2;
			}
		}
	}
	if(document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	} //W3C   
	window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome  

	//	主界面动画函数
	function i_fun1() {
		var i = 0;
		var time1 = setInterval(function() {
			var a;
			if(i == 3) {
				i = 0;
				//		 排他思想 
				for(var j = 0; j < laye.length; j++) {
					laye[j].style.display = "none";
					ydd[j].style.background = "white";
				}
				ydd[i].style.background = "orange";
				laye[i].style.display = "block";
				laye[i + 3].style.display = "block";
				laye[i].style.animation = "yundong2 2s linear 0s 1";
				laye[i + 3].style.animation = "yundong1 2s linear 0s 1";
				var timeLast = setTimeout(function() {
					laye[i + 3].style.display = "none";
					clearTimeout(timeLast);
				}, 2000);
			} else {
				i = i + 1;
				//						console.log(i);
				for(var j = 0; j < laye.length; j++) {
					laye[j].style.display = "none";
					ydd[j].style.background = "white";
				}
				ydd[i].style.background = "orange";
				laye[i].style.display = "block";
				laye[i - 1].style.display = "block";
				laye[i].style.animation = "yundong2 2s linear 0s 1";
				laye[i - 1].style.animation = "yundong1 2s linear 0s 1";
			}
			//							小圆点点击事件
			for(var k = 0; k < ydd.length; k++) {
				ydd[k].index = k;
				ydd[k].onclick = function() {

					clearInterval(time1);
					for(var n = 0; n < laye.length; n++) {
						laye[n].style.display = "none";
						ydd[n].style.background = "white";
					}
					if(this.index == 0) {
						ydd[0].style.background = "orange";
						laye[0].style.display = "block";
						laye[3].style.display = "block";
						laye[0].style.animation = "yundong2 2s linear 0s 1";
						laye[3].style.animation = "yundong1 2s linear 0s 1";
						var timeLast1 = setTimeout(function() {
							laye[3].style.display = "none";
							clearTimeout(timeLast1);
						}, 2000);
					} else {
						ydd[this.index].style.background = "orange";
						laye[this.index].style.display = "block";
						laye[this.index - 1].style.display = "block";
						laye[this.index].style.animation = "yundong2 2s linear 0s 1";
						laye[this.index - 1].style.animation = "yundong1 2s linear 0s 1";
					}
					i = this.index;
					var timeLast2 = setTimeout(function() {
						i_fun1();
						clearTimeout(timeLast2);
					}, 5000);
				}

			}
		}, 5000);
	}
	i_fun1();
	//		悬浮暂停函数
	//第五个页面的js
	  var xteam = $("x_team");
	  var xcover = $("x_cover");
	  var xul = xcover.children;
	  var xlist = xul[0].children;
	  // console.dir(xlist);
	  var x_sind = $("x_sind");
      for(var i = 0;i < xlist.length;i++){
      	xlist[i].onmouseover = function(){
      		for(var i = 0;i < xlist.length;i++){
      			animate(xlist[i],{opacity:100});
      		}

      		animate(this,{opacity:0});
      	}
      	xlist[i].onmouseout = function(){
      		for(var i = 0;i < xlist.length;i++){
                animate(xlist[i],{opacity:0});
      		}
            animate(this,{opacity:0});
      	}
      }
}

function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


