$.fn.scrollMe = function() {

		$('.demo').on('click', function(){
			var $theElement = $(this); //to cash, you must turn $this into a variable
			if($theElement.length) {
				$('html, body').animate({
					scrollTop: $($theElement.attr('data-goto')).offset().top
				},1500, $theElement.attr('data-easetype'));
			}
		});
	};

		


	



	
	








