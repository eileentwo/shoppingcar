
$(function(){
	//查询调用ajax部分
	$.ajax({
	   url: "https://raw.githubusercontent.com/eileentwo/shoppingcar/master/json/package.json",//json文件位置
	   type: "GET",//请求方式为get
	   dataType: "json", //返回数据格式为json
	   success: function(data) {//请求成功完成后要执行的方法 
	   	
	       //each循环 使用$.each方法遍历返回的数据date
	       $.each(data.aboutband, function(i, item) {
		       	var str ='<tr id="item.id"><td><div class="btn"><a href="javascript:;"><input type="button" value="未加入" /><lable><span></span></lable></a></div></td><td>'+item.brand+'</td><td>'+item.carname+'</td><td>'+item.carstyle+'</td><td>'+item.output_volume+'</td><td>'+item.engine+'</td><td>'+item.drive_mode+'</td><td>'+item.productive_time+'</td><td>'+item.downtime+'</td></tr>';
				$('.product_tbody table').append(str);
				
				$('#inquire').click(function(){
					if($('.brand strong').text()==item.brand){
						
					}
					
				})
			            
			})
		
	
	var cLi = $('.choice');
	var	cDiv = $('.choices').find('li div');
	var	cUl = $('.choices').find('li ul');
	var	cAli = $('.choices li ul').find('li');
	var	cInput = $('.choices').find('li input');
		//下拉列表部分
		cLi.click(function(){
			var index =$(this).index();
			var cUl =cLi.eq(index).find('ul');
			if(cUl.is(':hidden')){
				cUl.show().parent().siblings().find('ul').hide();
				console.log(222);
			}
			else {
				cUl.hide();
			};
		})
		cAli.click(function(){
			var Text = $(this).text();
			if($(this).index()=='0'){
				window.location.reload();
			}
			$(this).css('background','#eee').siblings().css('background','#fff');
			$(this).parent().siblings().find('strong').text(Text);
			
		})
		
		//details选择部分
		var dBtn= $('.product_tbody').find('.btn');
			dBtn.click(function(){
				var Index =$(this).parent().parent().index();
				var dInp =$(this).find('input');
				if($(this).hasClass('checked')){
					$(this).removeClass('checked');
					dInp.val('未加入');
					$(".checked_tbody .carList").each(function(){
					    if(Index==$(this).find("div").data('index')){
							$(this).remove();
							var num = $('.Delete').length;
							$('.number').text(num)
						}
					});
				}
				else{
					$("#layer").fadeIn();
					var brand = $(this).parent().parent().find("td:eq(1)").text();
					var carName = $(this).parent().parent().find("td:eq(2)").text();
					var carType = $(this).parent().parent().find("td:eq(3)").text();
					var outputVolume = $(this).parent().parent().find("td:eq(4)").text();
					var Index = $(this).parent().parent().index();
					
					var html = '<li class="carList"><ul class="ClearFix"><li><div class="Delete" data-index="'+Index+'">'+brand+'</div></li><li>'+carName+'</li><li>'+carType+'</li><li>'+outputVolume+'</li></ul>';
					
					if($('.checked_tbody').has('li').length>0){
						$('.checked_tbody li:eq(0)').before(html);
					}else{
						$('.checked_tbody').append(html)
					}
					
					//清除当前这一行
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
					$(".selected").hide();
				};
			
		})
			
		//打开弹层
		$(".selected").click(function(){
			$("#layer").fadeIn();
			$(this).hide();
		})
		//关闭弹层
		$('.close').click(function(){
			$("#layer").fadeOut();
			$(".selected").show();
		})
		 // 一键清除
		$('.clearAll').click(function(){
			$('.checked_tbody li ').remove();
			var num = $('.Delete').length;
			$('.number').text(num);
			dBtn.removeClass('checked');
		});
		
		}	
	})	
		
})
