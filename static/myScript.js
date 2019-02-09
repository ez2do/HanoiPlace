$(document).ready(function(){
	$('.update-button').on('click', function(){
		let place_id = $(this).attr('placeID');
		let point = $(this).attr('value');

		var req = $.ajax({
			url: '/update',
			type: 'POST',
			data: {id: place_id, point: point}
		}).done(function(data){
			$('#card' + place_id).fadeOut(500).fadeIn(500);
			$('#point-of-' + place_id).html(data.rating.toFixed(2));
		});
	});
})