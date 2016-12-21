function myFunction(){
	var nameOpacity = document.getElementById('pop');
    var Name = document.getElementById("Name");
    var firstP = document.getElementById("firstP");
    var lastP = document.getElementById("lastP");
    var list = document.getElementById("list");
	console.log(document.documentElement.scrollTop);
	if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
		Name.className = "hidden";
	} else{
		Name.className = "visible";
	}

	if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200){
		firstP.className = "hidden";
	}else{
		firstP.className = "visible";
	}

    if(document.documentElement.scrollTop > 300 || document.body.scrollTop > 300){
    	lastP.className = "hidden";
    }else{
    	lastP.className = "visible";
    }

	if (document.documentElement.scrollTop > 625 || document.body.scrollTop > 625) {
		list.style.backgroundColor = "rgba(0,0,0,1)";
		list.style.boxShadow = "0" + " " + "5px" + " " + "15px" + " " + "gray";
	}else {
		list.style.backgroundColor = "rgba(0,0,0,0)";
		list.style.boxShadow = "none";
	}
	var scrollBackground = document.body.scrollTop + document.documentElement.scrollTop;

	document.getElementById("mainUpperSection").style.backgroundPosition = "50%" + " " + -scrollBackground * 0.2 + "px";
	
	
}
window.onscroll = function() {
	myFunction();
	progress();
}
function scrollPortfolio() {
        if(document.documentElement.scrollTop > 550 || document.body.scrollTop > 550){
		    var scrolltop = document.documentElement.scrollTop + document.body.scrollTop;
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
			var scrolltop = document.documentElement.scrollTop + document.body.scrollTop;
			var id = setInterval(frame, 1);
		  	function frame(){
		    	if (scrolltop > 550) {
		            clearInterval(id);
		        }
		        else {
		            scrolltop = scrolltop + 5; 
		            document.documentElement.scrollTop = scrolltop; 
		            document.body.scrollTop = scrolltop;
		        }
		    }
		}
}
document.getElementById("portfolioButton").addEventListener("click", function(){
	scrollPortfolio();
});

function scrollWork() {
        if(document.documentElement.scrollTop > 900 || document.body.scrollTop > 900){  
		    var scrolltop = document.documentElement.scrollTop + document.body.scrollTop;
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
			var scrolltop = document.documentElement.scrollTop + document.body.scrollTop;
			var id = setInterval(frame, 1);
		  	function frame(){
		    	if (scrolltop > 900) {
		            clearInterval(id);
		        }
		        else {
		            scrolltop = scrolltop + 5; 
		            document.documentElement.scrollTop = scrolltop; 
		            document.body.scrollTop = scrolltop;
		        }
		    }
		}
}
document.getElementById("workButton").addEventListener("click", function(){
	scrollWork();
});

function scrollAbout() {
        if(document.documentElement.scrollTop > 1250 || document.body.scrollTop > 1250){  
		    var scrolltop = document.documentElement.scrollTop + document.body.scrollTop;
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
			var scrolltop = document.documentElement.scrollTop + document.body.scrollTop;
			var id = setInterval(frame, 1);
		  	function frame(){
		    	if (scrolltop > 1250) {
		            clearInterval(id);
		        }
		        else {
		            scrolltop = scrolltop + 5; 
		            document.documentElement.scrollTop = scrolltop; 
		            document.body.scrollTop = scrolltop;
		        }
		    }
		}
}
document.getElementById("aboutButton").addEventListener("click", function(){
	scrollAbout();
});

