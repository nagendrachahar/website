function progressBar(){
	if(document.documentElement.scrollTop > 1250 || document.body.scrollTop > 1250){
			$(document).ready(function() {
					$("#htmlBar").animate({width:"350px"}, 2000);
					$("#cssBar").animate({width:"350px"}, 2000);
					$("#javascriptBar").animate({width:"300px"}, 2000);
					$("#jqueryBar").animate({width:"280px"}, 2000);
					
			});
		}
}
