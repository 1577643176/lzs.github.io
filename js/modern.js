window.onload=function(){
	
	//轮播图的切换
	var indexs=0;
	var xh=null;
	var pics=document.getElementById("pictures");
	var items=pics.getElementsByTagName("li");
	var circles=document.getElementById("index");
	var nums=circles.getElementsByTagName("li");
	//getElementsByTagName()方法返回元素的顺序是它们在文档中的顺序
	var len=items.length;
	var leng=nums.length;
//	console.log(len);
//	console.log(leng);
	//调用自动播放函数
	xh=setInterval(auto,4000);
	// 遍历所有圆点导航实现划过切换至对应的图片
	for( var i =0; i<len; i++ ){
		(function(j){
			nums[j].onclick = function(){
				play(j);
				index = j;
			}
		})(i);
	}
	//播放第几页函数
	function play(num){
		hideItems();
		items[num].style.opacity=1;
		nums[num].className='on';
	}
	//自动播放函数
	function auto(){
		play(indexs);
//		console.log(indexs);
		if(indexs>len-2){
		indexs=0;
		}else{
			indexs++;
		}
	}
	//对图片进行初始化
	function hideItems(){
		for(var i=0;i<len;i++){
			items[i].style.opacity=0;
		}
		for(var j=0;j<leng;j++){
			if(nums[j].className=='on'){
				nums[j].className='';
			}
		}
	}


	//top键滑动效果
	$('a').click(function(){
		$('html,body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
		}, 600);
	return false; 
	});
	
	//页面到达一定高度时，导航栏滑下
	$(document).scroll(function(){   
		var Height=$(window).height();
		var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
//		console.log("窗口高度：",Height);
//		console.log("滚动条实时高度：",distance); //打印滚动条不同高度的位置的值
		if(distance>=Height-50){
			$("#nav").slideDown();
		}else{
			$("#nav").slideUp();
		}
	});
	
	//目录弹出层
    $("#m").click(function(){
		layui.use('layer', function(){
			var layer = layui.layer;
			layer.open({
				type: 1,
	  			title: "目录",
				closeBtn: 1,
				shade: 0,
				area: ['170px','170px'],
				offset:'r',
				content: $('#menu')
			}); 
		});
	});
	
	//top键到达一定的位置再出现
	$(document).scroll(function() {
		var scrollTop=$(document).scrollTop();
		var currentTop=parseInt(scrollTop);
		if(currentTop>10){
			$('#public').show();
		}else{
			$('#public').hide();
		}
	});
	


    //鼠标滑过事件，nav摇动
    $("#nav2 img").mouseover(function(){
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated bounceIn').one(animationEnd,function () {
            $('#nav2 img').removeClass('animated bounceIn');
        });
    });

    layui.use('element', function(){
        var element = layui.element;
    });

    //相关网站图片鼠标事件
    $("#e1-imgOne").mouseover(function(){
        $("#e1-imgOne").removeClass('display');
    });
    $("#e1-imgOne").mouseout(function () {
        $("#e1-imgOne").addClass('display');
    });
    $("#e1-imgTwo").mouseover(function(){
        $("#e1-imgTwo").removeClass('display');
    });
    $("#e1-imgTwo").mouseout(function () {
        $("#e1-imgTwo").addClass('display');
    });
    $("#e1-imgThree").mouseover(function(){
        $("#e1-imgThree").removeClass('display');
    });
    $("#e1-imgThree").mouseout(function () {
        $("#e1-imgThree").addClass('display');
    });
    $("#e1-imgFour").mouseover(function(){
        $("#e1-imgFour").removeClass('display');
    });
    $("#e1-imgFour").mouseout(function () {
        $("#e1-imgFour").addClass('display');
    });

}
