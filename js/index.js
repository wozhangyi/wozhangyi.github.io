window.onload=function(){
	var imgSrc = ['img/i-4.jpg','img/i-5.jpg','img/i-6.jpg','img/i-7.jpg','img/i-8.jpg']
var w = carouser.offsetWidth;
var index = 0;
var timer=null;
for(var i = 0;i < imgSrc.length;i++){
	$('<li><img src='+imgSrc[i]+'></li>').appendTo('#oUl');
};
$('#oUl').html($('#oUl').html()+$('#oUl').html());
$('#oUl').width($('#oUl li').length * $('#oUl li').width());

$('#oUl li').width(100/$('#oUl li').length+'%');

var buzhunhua = false;
var olIndex= 0;
//var con=['梦想声音：实现你的音乐梦想','无间道：黑白之战一触即发','大轰趴：徐海乔霸气公主抱大大','不良人2：全新剧情揭龙泉隐秘','欢脱定律：龙八丝袜头丑出新'];
function move(){
	if(buzhunhua)return;
		buzhunhua = true;
		index++;
		olIndex++;
		if(olIndex == $('#oUl>li').length/2){
			olIndex = 0;
		}
		//bannerbottom.innerHTML=con[olIndex];
		$('ol>li').removeClass('active');
		$('ol>li').eq(olIndex).addClass('active');
		$('#oUl').animate({
			'translateX':-w*index+'px'
		},500,'ease',function (){
			//console.log(index)
			if(index == 5){
				$('#oUl').css({
					'transform':'translateX(0px)'
				});
				index=0;
			};
			buzhunhua = false;
		});
};
timer=setInterval(move,2000);

$('#oUl').on({
	'swipeLeft':function(){
		if(buzhunhua)return;
		buzhunhua = true;
		index++;
		olIndex++;
		if(olIndex == $('#oUl>li').length/2){
			olIndex = 0;
		}
			//bannerbottom.innerHTML=con[olIndex];
		$('ol>li').removeClass('active');
		$('ol>li').eq(olIndex).addClass('active');
		$(this).animate({
			'translateX':-w*index+'px'
		},500,'ease',function (){
			console.log(index)
			if(index == 5){
				$(this).css({
					'transform':'translateX(0px)'
				});
				index=0;
			};
			buzhunhua = false;
		});
	},
	'swipeRight':function(){
		if(buzhunhua)return;
		buzhunhua = true;
		olIndex--;
		if(olIndex == -1){
			olIndex = $('#oUl > li').length/2 -1;
		}
		//	bannerbottom.innerHTML=con[olIndex];
		$('ol>li').removeClass('active');
		$('ol>li').eq(olIndex).addClass('active');
		if(index == 0){
			$('#oUl').css({
				'transform':'translateX('+(-$('#oUl').width()/2)+'px)'
			});
			index = $('#oUl > li').length/2;
		};
		index--;

		$('#oUl').animate({
			'translateX':-index*w+'px'
		},500,'ease',function(){
			buzhunhua = false;
		});
	}
});
var aA=document.getElementsByTagName("a");
 for(var i=0;i<aA.length;i++){
 	aA[i].onclick=function(){
 		return false;
 	}
 }
 
 
 //nav 导航条
	var oNav = document.getElementById("nav-ul"),
		oLi = oNav.getElementsByTagName('li'),
		min = 0,
		oNavobj = {
			start:0,
			left:0
		}
		
	for(var i=0;i<oLi.length;i++){
	 
		oLi[i].index=i
		 oLi[i].addEventListener("touchstart",function(e){
		 	 e.preventDefault();
		 	for(var j=0;j<oLi.length;j++){
		 		oLi[j].className=""
		 	}
		 	 oLi[this.index].className="tja"
		 })
	 
	}
	//遍历oli的个数  计算li的总宽	
	for(var i=0;i<oLi.length;i++){
		min += oLi[i].clientWidth;    //总的宽度
	}
	oNav.style.width=min+36+"px"
	//鼠标按下事件
	oNav.addEventListener('touchstart',function(e){
		var e = e || window.event;
		e.preventDefault();
		oNavobj.start = e.targetTouches[0].clientX;
		oNavobj.left = this.offsetLeft;
		console.log(oNavobj.left)
	},false);
	//鼠标移动事件
	oNav.addEventListener('touchmove',function(e){
		var e = e || window.event,
			len = oNavobj.left + e.targetTouches[0].clientX-oNavobj.start;
		e.preventDefault();
		if( len > 0 || len < -document.body.clientWidth){
			return;
		}else{
			oNav.style.left = len + 'px';
		}
	},false);
	//鼠标 离开事件
	oNav.addEventListener('touchend',function(e){
		var e = e || window.event;
		e.preventDefault();
	},false);
 
}
