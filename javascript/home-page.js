function myFunction(){
	var nameOpacity = document.getElementById('pop');
    var Name = document.getElementById("Name");
    var firstP = document.getElementById("firstP");
    var lastP = document.getElementById("lastP");
    var list = document.getElementById("list");
	console.log(document.body.scrollTop);
	if(document.body.scrollTop > 100){
		Name.className = "hidden";
	} else{
		Name.className = "visible";
	}

	if(document.body.scrollTop > 200){
		firstP.className = "hidden";
	}else{
		firstP.className = "visible";
	}

    if(document.body.scrollTop > 300){
    	lastP.className = "hidden";
    }else{
    	lastP.className = "visible";
    }

	if (document.body.scrollTop > 625) {
		list.style.backgroundColor = "rgba(0,0,0,1)";
		list.style.boxShadow = "0" + " " + "5px" + " " + "15px" + " " + "gray";
	}else {
		list.style.backgroundColor = "rgba(0,0,0,0)";
		list.style.boxShadow = "none";
	}
	document.getElementById("opo").style.backgroundPosition =  "50%" + " " + -document.body.scrollTop * 0.2 + "px";
	
}
window.onscroll = function() {myFunction()};

function scrollPort(){
	
}


function scrollWork() {
        if(document.body.scrollTop > 900){  
		    var scrolltop = document.body.scrollTop;
		    var id = setInterval(frame, 10);
            function frame(){
		        if (scrolltop < 900) {
		            clearInterval(id);
		        }
		        else {
		            scrolltop = scrolltop - 10; 
		            document.body.scrollTop = scrolltop; 
		        }
		    } 
        }
		else{
			var scrolltop = document.body.scrollTop;
			var id = setInterval(frame, 10);
		  	function frame(){
		    	if (scrolltop > 900) {
		            clearInterval(id);
		        }
		        else {
		            scrolltop = scrolltop + 10; 
		            document.body.scrollTop = scrolltop; 
		        }
		    }
		}
}
document.getElementById("workButton").addEventListener("click", function(){
	scrollWork();
});

