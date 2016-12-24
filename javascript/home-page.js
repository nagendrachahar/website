function myFunction(){
	var nameOpacity = document.getElementById('pop');
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
    }else{
    	lastP.className = "visible";
    }

	if (bodyScroll > 625 || documentScroll > 625) {
		list.style.backgroundColor = "rgba(0,0,0,1)";
		list.style.boxShadow = "0" + " " + "5px" + " " + "15px" + " " + "gray";
	}else {
		list.style.backgroundColor = "rgba(0,0,0,0)";
		list.style.boxShadow = "none";
	}
	var scrollBackground = bodyScroll + documentScroll;

	document.getElementById("mainUpperSection").style.backgroundPosition = "50%" + " " + -scrollBackground * 0.2 + "px";
	
	
}
window.onscroll = function() {
	myFunction();
	progress();
}

function scrollPortfolio() {
	//for chrome
    var bodyScroll = document.documentElement.scrollTop;
    //for firefox
    var documentScroll = document.body.scrollTop;
        if(bodyScroll > 550 || documentScroll > 550){
		    var scrolltop = bodyScroll + documentScroll;
		    var id = setInterval(frame, 1);
            function frame(){
		        if (scrolltop < 550) {
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
		    	if (scrolltop > 550) {
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
	scrollPortfolio();
});

function scrollWork() {
	//for chrome
    var bodyScroll = document.documentElement.scrollTop;
    //for firefox
    var documentScroll = document.body.scrollTop;
        if(bodyScroll > 900 || documentScroll > 900){
		    var scrolltop = bodyScroll + documentScroll;
		    var id = setInterval(frame, 1);
            function frame(){
		        if (scrolltop < 900) {
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
		    	if (scrolltop > 900) {
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
document.getElementById("workButton").addEventListener("click", function(){
	scrollWork();
});

function scrollAbout() {
	//for chrome
    var bodyScroll = document.documentElement.scrollTop;
    //for firefox
    var documentScroll = document.body.scrollTop;
        if(bodyScroll > 1250 || documentScroll > 1250){
		    var scrolltop = bodyScroll + documentScroll;
		    var id = setInterval(frame, 1);
            function frame(){
		        if (scrolltop < 1250) {
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
		    	if (scrolltop > 1250) {
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
document.getElementById("aboutButton").addEventListener("click", function(){
	scrollAbout();
});

function scrollContact() {
	//for chrome
    var bodyScroll = document.documentElement.scrollTop;
    //for firefox
    var documentScroll = document.body.scrollTop;
        if(bodyScroll > 1773 || documentScroll > 1773){
		    var scrolltop = bodyScroll + documentScroll;
		    var id = setInterval(frame, 1);
            function frame(){
		        if (scrolltop < 1773) {
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
		    	if (scrolltop > 1773) {
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
document.getElementById("contactButton").addEventListener("click", function(){
	scrollContact();
});

