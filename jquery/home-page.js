function progress(){
	if(document.documentElement.scrollTop > 1250 || document.body.scrollTop > 1250){
		console.log(document.body.scrollTop);
$(document).ready(function() {
       $(".status-bar").animate({width:"400px"}, 2000);
	});

}
}

$(document).ready(function(){
	$(".dropdown-list").slideUp();
	$(".menu").click(function(){
		$(".dropdown-list").slideToggle(1000);
	});
});
