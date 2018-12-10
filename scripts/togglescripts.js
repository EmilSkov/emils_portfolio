// JavaScript Document
$(document).ready(function(){
	$(".nav_toggle").click(function()
	{
		$(".nav_toggle").toggleClass("active");
		$(".nav_overlay").toggleClass("active");
		$("nav").toggleClass("active");
	});
});