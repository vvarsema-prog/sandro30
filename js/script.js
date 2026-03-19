let shownav = () => {
   
  
if(document.getElementById("lains2").style.width  == "0px" ){     
document.getElementById("ul").style.height = ("0");
document.getElementById("lains2").style.width = ("100%");
document.getElementById("lains1").style.rotate = ("0deg");
document.getElementById("lains3").style.rotate = ("0deg");
document.getElementById("lains3").style.marginTop = ("0");
}
else {     
document.getElementById("ul").style.height = ("400px");
document.getElementById("lains2").style.width = ("0px");
document.getElementById("lains1").style.rotate = ("45deg");
document.getElementById("lains3").style.rotate = ("-45deg");
document.getElementById("lains3").style.marginTop = ("-35px")
};    
}
document.getElementById("burger").addEventListener("click",shownav);
