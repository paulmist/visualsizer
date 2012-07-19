$(function() {

	$('.ad').css('opacity', '0').animate(
		{
			opacity: 1
		},
		300
	);

	$('.button').click(function(e){
		e.preventDefault();
		
		var w = $('input[name=ad-width]').val();
		var h = $('input[name=ad-height]').val();
		var hex = '#'+Math.floor(Math.random()*16777215).toString(16);
		console.log(w);
		console.log(h);
		console.log(hex);
		
		$('.ad').animate(
			{
				width: w,
				height: h,
				backgroundColor: hex
			},
			300
		);
	})

});
