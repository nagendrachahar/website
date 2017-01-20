function progress(){
	if(document.documentElement.scrollTop > 1250 || document.body.scrollTop > 1250){
		console.log(document.body.scrollTop);
$(document).ready(function() {
       $(".status-bar").animate({width:"400px"}, 2000);
	});

}
}
function headerScroller(){
	var listHeight = document.getElementById("list");
	if(listHeight.style.height == 0){
        listHeight.style.height = "155px";
	}else if(listHeight.style.height == "155px"){
		listHeight.style.height = 0;
	}else{
		listHeight.style.height = "155px";
	}
	console.log(listHeight.style.height);
}
