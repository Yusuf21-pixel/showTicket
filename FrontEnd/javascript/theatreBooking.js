window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
if (window.pageYOffset >= sticky) {
   navbar.classList.add("sticky")
} else {
   navbar.classList.remove("sticky");
}
}

function myfunc(){
   document.getElementById("hide").style.display = "none";
}



$(".day").click(function(){
    $(".day").removeClass("change") ;
    this.classList.toggle("change");
    var d = new Date()
    var n = d.getMonth()+1;
     n = ("0"+   this.innerHTML).slice(-2)+ "/" + n  ;
       n += "/"+   d.getFullYear() ;
    sessionStorage.setItem("dat" , n )
});

function loadDetails() {
    document.getElementsByClassName("movName")[0].innerHTML = sessionStorage.getItem("mn");
    document.getElementsByClassName("lik")[0].innerHTML = sessionStorage.getItem("lk");
    document.getElementsByClassName("movietype")[0].innerHTML = sessionStorage.getItem("tp");
    document.getElementsByClassName("tim")[0].innerHTML = sessionStorage.getItem("tm");
    document.getElementById('date').innerHTML = sessionStorage.getItem("rd");
    var date = new Date();
    let dy = parseInt(date.getDate());
    let arrVal = [];
    if(dy > 25) {
       let days = [0,2,4,6,7,9,11]
       let mt = parseInt(date.getMonth());
       if(days.includes(mt)) {
          for(i=0;i<6;i++) {
             if(dy == 32) 
                 dy = 1;
             document.getElementsByClassName("day")[i].innerHTML = dy;
             dy++;   
          }
       }
       else {
           for(j=0;j<6;j++) {
               if(dy == 31) 
                  dy = 1;
                document.getElementsByClassName("day")[j].innerHTML = dy;
                dy++;
           }
       }
    }
    else {
        for(k=0;k<6;k++) {
             document.getElementsByClassName("day")[k].innerHTML = dy;
             dy++;
        }   
  }
  var d = new Date()
  var n = d.getMonth()+1;
  n = ("0"+  $("#d1").html()).slice(-2)+ "/" + n  ;
   n += "/"+   d.getFullYear() ;
    sessionStorage.setItem("dat" , n )

    $("#d1").addClass("change")
}

function bseat(z) {
    sessionStorage.setItem("theatreName",document.getElementById(z).innerHTML);
}

