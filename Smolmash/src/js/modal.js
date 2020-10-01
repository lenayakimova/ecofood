$(document).ready(function () {
	var modal = $('.popup'),
		link = $('a[data-popup="true"]'),
		overlay = $('.overlay'),
		close = $('.close');
	link.on('click', function() {
		overlay.show();
		modal.show();
	});
	close.click(function() {
		overlay.hide();
		modal.hide();
	});
	close.click(function () {
		$('.yt-video').each(function () {
			var el_src = $(this).attr("src");
			$(this).attr("src", el_src);
		});
	});
});