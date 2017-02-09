// this function used to slide down list in the header
function headerScroller(){
	var listHeight = document.getElementById("list");
	if(listHeight.className == "list"){
        listHeight.className = "list-";
	}else if(listHeight.className == "list-"){
		listHeight.className = "list";
	}else{
		listHeight.style.height = "list-";
	}
}
// function for mainUpperSection
function myFunction(){
    var Name = document.getElementById("Name");
    var firstP = document.getElementById("firstP");
    var lastP = document.getElementById("lastP");
    var list = document.getElementById("list");
    //for chrome
    var bodyScroll = document.documentElement.scrollTop;
    //for firefox
    var documentScroll = document.body.scrollTop;

	if(bodyScroll > 100 || documentScroll > 100){
		Name.className = "hidden";
	} else{
		Name.className = "visible";
	}

	if(bodyScroll > 200 || documentScroll > 200){
		firstP.className = "hidden";
	}else{
		firstP.className = "visible";
	}

    if(bodyScroll > 300 || documentScroll > 300){
    	lastP.className = "hidden";
    	document.getElementById("down").className = "hidden";
    }else{
    	lastP.className = "visible";
    	document.getElementById("down").className = "visible";
    }

	if (bodyScroll > 575 || documentScroll > 575) {
		list.style.backgroundColor = "rgba(0,0,0,1)";
		list.style.boxShadow = "0" + " " + "5px" + " " + "15px" + " " + "gray";
	}else {
		list.style.backgroundColor = "rgba(0,0,0,0)";
		list.style.boxShadow = "none";
	}
	var scrollBackground = bodyScroll + documentScroll;

	document.getElementById("mainUpperSection").style.backgroundPosition = "50%" + " " + -scrollBackground * 0.2 + "px";
	
	
}


// this function used to scroll work-section
function scrollBody(s) {
	//for chrome
    var bodyScroll = document.documentElement.scrollTop;
    //for firefox
    var documentScroll = document.body.scrollTop;
        if(bodyScroll > s || documentScroll > s){
		    var scrolltop = bodyScroll + documentScroll;
		    var id = setInterval(frame, 1);
            function frame(){
		        if (scrolltop < s) {
		            clearInterval(id);
		        }
		        else {
		            scrolltop = scrolltop - 5; 
		            document.documentElement.scrollTop = scrolltop; 
		            document.body.scrollTop = scrolltop;
		        }
		    }
        }
		else{
			var scrolltop = bodyScroll + documentScroll;
			var id = setInterval(frame, 1);
		  	function frame(){
		    	if (scrolltop > s) {
		            clearInterval(id);
		        }
		        else {
		            scrolltop = scrolltop + 5; 
		            document.documentElement.scrolltop = scrolltop; 
		            document.body.scrollTop = scrolltop;
		        }
		    }
		}
}
document.getElementById("portfolioButton").addEventListener("click", function(){
	scrollBody(450);
});
document.getElementById("workButton").addEventListener("click", function(){
	scrollBody(1125);
});
document.getElementById("lastP").addEventListener("click", function(){
	scrollBody(1125);
});
document.getElementById("aboutButton").addEventListener("click", function(){
	scrollBody(1700);
});
document.getElementById("contactButton").addEventListener("click", function(){
	scrollBody(2000);
});

// this function used to increase width of status bar in about-container
function progressStatus(){
	if(document.documentElement.scrollTop > 1250 || document.body.scrollTop > 1250){
		var num = 1;
		var id = setInterval(framee, 18);
		function framee(){
			
			if(num > 99){
				clearInterval(id);
			}
			else{
				num++;
				document.getElementById("cssStatus").innerHTML = num + "%";
				document.getElementById("htmlStatus").innerHTML = num + "%";
				document.getElementById("javascriptStatus").innerHTML = num - 15 + "%";
				document.getElementById("jqueryStatus").innerHTML = num - 20 + "%";
			}
		}
		
	}
}


window.onscroll = function() {
	myFunction();
	progressBar();
	progressStatus();
}