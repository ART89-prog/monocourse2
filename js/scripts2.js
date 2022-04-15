$(() => {

	$(".definition .more").on('click', function(e) {
		e.preventDefault()
		$(this).hide();
		$(".hide_text").slideDown();
	});

	// Фильтр
	$('body').on('click', '.mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			$('aside .filter').fadeOut(200)
		} else {
			$(this).addClass('active')
			$('aside .filter').fadeIn(300)
		}
	})

	$('aside .filter .close, .overlay, aside .filter_title .close').click(function(e){
		e.preventDefault()
	    $('aside .mob_filter_link').removeClass('active')
		$('aside .filter').fadeOut(200)
	})


	$('body').on('click', '.search-result_item button', function(e) {
		e.preventDefault();
		$(this).parent().hide();
		let id = $(this).parent().data("id");
		$("input[id='"+id+"']").prop("checked", false);
		if($(".search-result .search-result_item:visible").length==0)
		{
			$(".search-result .reset").hide();
		}
	});

	$(".search-result .reset").on('click', function(e) {
		$(this).hide();
		$(".search-result_item").hide();
		$(".filter").trigger("reset");
	});

	$(".submit-mob .reset").on('click', function(e) {		
		$(".search-result_item").hide();
		$(".filter").trigger("reset");
	});


	$(".filter input").on("change", function(){	
		if($(this).prop("checked"))
		{
			let name = $(this).next().text();
			if(name=="")
			{
				name = $(this).prev().text();
			}

			$(".search-result .reset").before('<div class="search-result_item" data-id="'+$(this).prop("id")+'"><span>'+name+'</span><button><img src="images/delete.png" alt=""></button></div>');
			$(".search-result .reset").show();
		}	
		else
		{
			let id = $(this).prop("id");
			console.log(".search-result_item[data-id='"+id+"']");
			$(".search-result_item[data-id='"+id+"']").hide();
			if($(".search-result .search-result_item:visible").length==0)
			{
				$(".search-result .reset").hide();
			}

		}
	});

	$(".show-more").on('click', function(e) {
		e.preventDefault()
		$(this).prev().find(".hide").show();
		$(this).hide();
	});


	$('select').niceSelect();


	$('.cats_title').click(function(e){
		e.preventDefault()	
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(this).next().slideUp();
		}	
		else
		{
			$(this).addClass("active");
			$(this).next().slideDown();
		}

	})


})