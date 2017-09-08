$(function(){
	var cLi = $('.choices').find('.choice'),
		cDiv = $('.choices').find('li div'),
		cUl = $('.choices').find('li ul'),
		cAli = $('.choices li ul').find('li'),
		cInput = $('.choices').find('li input');
		//下拉列表部分
		cLi.click(function(){
			var index =$(this).index();
			var cUl =cLi.eq(index).find('ul');
			if(cUl.is(':hidden')){
				cUl.show().parent().siblings().find('ul').hide();
			}
			else {
				cUl.hide();
			};
		})
		
		//details选择部分
		var dBtn= $('.product_tbody').find('.btn');
			dBtn.click(function(){
				var Index =$(this).index();
				var dInp =$(this).find('input');
				if($(this).hasClass('checked')){
					$(this).removeClass('checked');
					dInp.val('未加入');
					
				}
				else{
					$("#layer").fadeIn();
					var brand = $(this).parent().parent().find("td:eq(1)").text();
					var carName = $(this).parent().parent().find("td:eq(2)").text();
					var carType = $(this).parent().parent().find("td:eq(3)").text();
					var outputVolume = $(this).parent().parent().find("td:eq(4)").text();
					var Index = $(this).parent().parent().index();
					
					var html = '<li><ul class="ClearFix"><li><div class="Delete" data-index="'+Index+'">'+brand+'</div></li><li>'+carName+'</li><li>'+carType+'</li><li>'+outputVolume+'</li></ul>';
					
					if($('.checked_tbody').has('li').length>0){
						$('.checked_tbody li:eq(0)').before(html);
					}else{
						$('.checked_tbody').append(html)
					}
					$('.Delete').on("click", function(){
						$(this).parent().parent().parent().remove();
						var num = $('.Delete').length;
						$('.number').text(num);
						var index = $(this).data("index");
						var Tr = $('.product_tbody tr');
						Tr.eq(index).find('div').removeClass('checked');
					})
					var num = $('.Delete').length;
					$('.number').text(num)
					$(this).addClass('checked');
					dInp.val('已加入');
				};
			
		})
			
		//打开弹层
		$(".selected").click(function(){
			$("#layer").fadeIn();
			$(".selected").hide();
		})
		//关闭弹层
		$('.close').click(function(){
			$("#layer").fadeOut();
			$(".selected").show();
		})
		//清除当前这一行
		//$('.Delete').click(function(){
//		$('.Delete').on("click", function(){
//			$(this).parent().parent().parent().remove();
//			var num = $('.Delete').length;
//			$('.number').text(num)
//		})
		 // 一键清除
		$('.clearAll').click(function(){
			$('.checked_tbody li ').remove();
			var num = $('.Delete').length;
			$('.number').text(num);
			dBtn.removeClass('checked');
		})
})
